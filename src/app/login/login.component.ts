import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  loginForm: any;
  showLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  login() {
    this.showLoading = true;
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (response: any) => {
        console.log(response);
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['summary']);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Errore',
          detail: 'Si è verificato un errore',
        });
      },
      () => {
        this.showLoading = false;
      }
    );
  }
}
