import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';
import { JwtHelper } from 'src/app/auth/jwt.helper';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-getstarted-list',
  templateUrl: './getstarted-list.component.html',
  styleUrls: ['./getstarted-list.component.scss']
})
export class GetstartedListComponent implements OnInit {

  constructor(
    private auth: LoginService,
    private jwt: JwtHelper,
    private router: Router,
    private toastr: ToastrService
  ) { }

  public loginData = {
    email: '',
    password: ''
  };

  public registerData = {
    email: '',
    firstName:'',
    lastName:'',
    password: ''
  };

  ngOnInit() {
  }
  onSubmit() {
    this.auth.login(this.loginData).subscribe((response: any) => {
      const token = response.token;
      this.jwt.setToken(token);

      this.jwt.setUser(response.user);
      this.router.navigate(['/']);
      setTimeout(() => {
        location.reload();
      }, 300);
    },

      (response) => {
        if (response.error.Message === 'WRONG_EMAIL_PASSWORD') {
          this.toastr.error('Wrong email or password!');
          this.loginData.password = '';
        }
      
    });
    return false;
  }

  onRegister() {
    this.auth.register(this.registerData).subscribe((response: any) => {
      const token = response.token;
      this.jwt.setToken(token);
      this.jwt.setUser(response.user);
      this.router.navigate(['/']);
      setTimeout(() => {
        location.reload();
      }, 300);
  },

    (response) => {
      if (response.error.Message === 'WRONG_EMAIL_PASSWORD') {
        this.toastr.error('Wrong password!');
        this.registerData.password = '';
      }
    });
    return false;
  }

}