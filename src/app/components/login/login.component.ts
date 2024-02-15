import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  faLock=faLock;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private AuthService:AuthService,private router:Router ){}

  
  onSubmit()
  {
   if(this.loginForm.valid)
   {
    this.AuthService.login(this.loginForm.value).subscribe({
      next: (v) => {
        console.log('Observable emitted the next value: ' + v)
      },
      error: (e) => {
        alert("Unalbe to log in.");
      },
      complete: () => this.router.navigate(["admin"])
     })
   }
 }

}
