import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './User/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContributionsComponent } from './Contributions/contributions/contributions.component';
import { TransactionComponent } from './Transactions/transaction/transaction.component';
import { MembersComponent } from './Members/members/members.component';
import { ToastrModule } from 'ngx-toastr';
import { ExpenseComponent } from './Expenses/expense/expense.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContributionsComponent,
    TransactionComponent,
    MembersComponent,
    ExpenseComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule,
    ToastrModule.forRoot()
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
