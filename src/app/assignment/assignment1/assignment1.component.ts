import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {

  users: User[] = [
    {
      name: 'Aditya',
      username: 'aditya',
      email: 'aditya@g.com'
    },
    {
      name: 'Akshay',
      username: 'akshay',
      email: 'akshay@g.com'
    },
    {
      name: 'Manuj',
      username: 'manuj',
      email: 'manuj@g.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteUser(userIndex: number) {
    this.users.splice(userIndex, 1)
  }

}
