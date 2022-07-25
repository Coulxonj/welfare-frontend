import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welfare';

  links = [
    { title: 'Users', fragment: 'user' },
    { title: 'Members', fragment: 'members' },
    { title: 'Contributions', fragment: 'contributions' },
    { title: 'Transactions', fragment: 'transaction' },
    { title: 'Expenses', fragment: 'expenses' },
    
    
  ];
  
  constructor(public route: ActivatedRoute) {}
}