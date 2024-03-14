import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [NavbarComponent, FormsModule],
})
export class RegisterComponent {
  firstname: string = '';
  familyname: string = '';
  email: string = '';
  password: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  registerUser(): void {
    const payload = {
      firstname: this.firstname,
      lastname: this.familyname,
      email: this.email,
      password: this.password,
    };

    this.apiService.PostRegister(payload).subscribe({
      next: (response) => {
        if (response) {
          this.toastr.success('Register success!', 'Success!');
          this.router.navigate(['/customerpanel']);
        }
      },
      error: (error) => {
        console.error('Registration failed:', error);
        this.toastr.error('Register Error!', 'Error!');
      },
    });
  }
}
