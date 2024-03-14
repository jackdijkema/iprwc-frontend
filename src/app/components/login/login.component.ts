import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [NavbarComponent, LucideAngularModule, FormsModule],
})
export class LoginComponent {
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  email: string = '';
  password: string = '';

  loginUser(): void {
    const payload = {
      email: this.email,
      password: this.password,
    };

    this.apiService.PostLogin(payload).subscribe({
      next: (response) => {
        if (response) {
          this.router.navigate(['/customerpanel']);
          this.toastr.success('Login success!', 'Sucess!');
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.toastr.error('Login error!', 'Error!');
      },
    });
  }
}
