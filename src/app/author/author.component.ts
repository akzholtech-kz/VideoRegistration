import { Router } from '@angular/router';
import { AuthorService, AuthResponseData } from './author.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
})
export class AuthorComponent implements OnInit {
  isLoginMode = true;
  error: string = null;

  constructor(private auth: AuthorService, private router: Router) {}

  ngOnInit() {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>
    if (this.isLoginMode) {
     authObs =  this.auth.login(email, password)
    } else {
     authObs =  this.auth.signup(email, password)
    }

    authObs.subscribe(
        (resData) => {
          console.log(resData);
          this.router.navigate(['/catalog'])
        },
        (errorMessage) => {
          this.error = errorMessage
        }
      );
    form.reset();
  }

}
