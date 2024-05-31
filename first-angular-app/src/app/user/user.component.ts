import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  index: number = Math.floor(Math.random() * DUMMY_USERS.length);
  users = DUMMY_USERS;
  selectedUser = this.users.at(this.index);
}
