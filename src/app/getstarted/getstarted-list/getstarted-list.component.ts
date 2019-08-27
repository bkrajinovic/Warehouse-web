import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login.service';
import { JwtHelper } from 'src/app/auth/jwt.helper';

@Component({
  selector: 'app-getstarted-list',
  templateUrl: './getstarted-list.component.html',
  styleUrls: ['./getstarted-list.component.scss']
})
export class GetstartedListComponent implements OnInit {

  constructor(
    private auth: LoginService,
    private jwt: JwtHelper
  ) { }

  public loginData = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  onSubmit() {
    this.auth.register(this.loginData).subscribe((response: any) => {
      const token = response.token;
      this.jwt.setToken(token);
      this.jwt.setUser(response.user);
    });
    return false;
  }

}
