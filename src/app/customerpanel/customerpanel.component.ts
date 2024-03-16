import { OnInit, Component } from '@angular/core';
import { AccountService } from '../../services/account/account.service';
import { User } from '../../model/user';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { OrderviewComponent } from './orderview/orderview.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customerpanel',
  standalone: true,
  templateUrl: './customerpanel.component.html',
  styleUrls: ['./customerpanel.component.scss'],
  imports: [NavbarComponent, OrderviewComponent, CommonModule],
})
export class CustomerpanelComponent implements OnInit {
  customer: User | null = null;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.accountService.userData$.subscribe((userData: User | null) => {
      this.customer = userData;
    });
  }
}
