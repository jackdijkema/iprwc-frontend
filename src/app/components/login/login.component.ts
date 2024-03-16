import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LucideAngularModule } from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [NavbarComponent, LucideAngularModule, FormsModule],
})
export class LoginComponent {
  constructor(
    private accountService: AccountService,
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

    this.accountService.PostLogin(payload).subscribe({
      next: (response) => {
        if (response) {
          this.toastr.success('Login success!', 'Success!');
          this.router.navigate(['/dashboard']);
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.toastr.error('Login error!', 'Error!');
      },
    });
  }
}
