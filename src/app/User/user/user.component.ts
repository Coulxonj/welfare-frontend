import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  displayedColumns: string[] = ['userName', 'userPassword', 'userRank'];
  userForm: FormGroup;
  p: number = 1
  userList: any = [];
  term:string;
  CourseArr: any = [];
  datasource = this.userList;
  editForm = {
     userId: 0,
     userName: '',
     userPassword: '',
     userRank: '',   
  }
  closeResult: string;

  constructor(
   
    public fb: FormBuilder,
    private ngZone: NgZone,
    public userService: UserService,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }


  ngOnInit(): void {
    this.fetchUsers();
    this.addusers();
  }

    //get users
   fetchUsers() {
    return this.userService.getUser().subscribe((data: {}) => {
      this.userList = data;
    })
  }
  
  //create users

  addusers() {
    this.fetchUsers();
    this.userService.getUser().subscribe((data: {}) => {
      this.userList = data;
      const userId = this.userList.user_id
    })
  
    this.userForm = this.fb.group({
      userName: [''],
      userPassword: [''],
      userRank: [''],
     
    })
  }
 
  submitForm() {
    this.userService.createUser(this.userForm.value).subscribe(res => {
     
      this.ngZone.run(() => this.router.navigateByUrl('/'))
      this.toastr.success('Success!', 'User created!');
      this.ngOnInit();
      console.log(this.userForm.value)
    },
    (error: HttpErrorResponse) => {
            alert(error.message);
            this.toastr.error('Unsuccessful', error.message);
            
           }
    );
  }
    
  onEdit(f: NgForm) {
    this.userService.updateUser(this.editForm).subscribe(
      (response: User) => {
        console.log(response);
        this.fetchUsers();
        f.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        f.reset();
      }
    );
  }

  //delete
  deleteuser(id){
    return this.userService.DeleteUser(id).subscribe(res=>{
      this.fetchUsers();
      
    });
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  openEdit(targetModal: any, user: User) {
    console.log(user.userName);
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
    
    this.editForm = user;
     
(<HTMLElement>document.getElementById('userId')).setAttribute('value', (user.userId).toString());
(<HTMLElement>document.getElementById('userName')).setAttribute('data-target',(user.userName).toString());
(<HTMLElement>document.getElementById('userPassword')).setAttribute('value', (user.userPassword).toString());
(<HTMLElement>document.getElementById('userRank')).setAttribute('value', (user.userRank).toString());
   

}
}