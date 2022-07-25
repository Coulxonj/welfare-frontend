import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributionsComponent } from './Contributions/contributions/contributions.component';
import { ExpenseComponent } from './Expenses/expense/expense.component';
import { MembersComponent } from './Members/members/members.component';
import { TransactionComponent } from './Transactions/transaction/transaction.component';
import { UserComponent } from './User/user/user.component';

const routes: Routes = [

  { path: '',  redirectTo: '/', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'contributions', component: ContributionsComponent},
  { path: 'members', component: MembersComponent },
  { path: 'expenses', component: ExpenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
