import { Component } from '@angular/core'
import { NavbarComponent } from '../components/navbar/navbar.component'
import { Router, RouterLink } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { AccountService } from '../../services/account/account.service'

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [NavbarComponent, FormsModule, RouterLink],
})
export class RegisterComponent {
  firstname: string = ''
  familyname: string = ''
  email: string = ''
  password: string = ''

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
  ) {}

  registerUser(): void {
    const payload = {
      firstname: this.firstname,
      lastname: this.familyname,
      email: this.email,
      password: this.password,
    }

    this.accountService.PostRegister(payload).subscribe({
      next: (response) => {
        if (response) {
          this.toastr.success('Register success!', 'Success!')
          this.router.navigate(['/login'])
        }
      },
      error: (error) => {
        console.error('Registration failed:', error)
        this.toastr.error('Register Error!', 'Error!')
      },
    })
  }
}
