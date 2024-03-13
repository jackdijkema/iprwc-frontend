import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
  ) { }

  registerUser(): void {
    const payload = {
      firstname: this.firstname,
      lastname: this.familyname,
      email: this.email,
      password: this.password,
    };

    this.apiService.PostRegister(payload).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Registration failed:', error);
      },
    });
  }
}
