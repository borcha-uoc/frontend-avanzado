import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppSettings } from 'src/app/shared/app.settings';
import { User } from 'src/app/shared/models/user.model';

@Injectable()
export class AuthenticationService {
  base_url: string = "http://mybackend.com/api/";
  users_endpoint = "users";

  public currentUser: User;

  constructor(private http: HttpClient) {}

  async login({ email, password }): Promise<any> {
    const users = await this.getUsers();
    // Mock response from backend:
    this.currentUser = users.find(
      (user: any) => user.email === email && user.password === password
    )
    return this.currentUser;
  }

  private async getUsers() {
    return this.http.get<User[]>(this.base_url + this.users_endpoint).toPromise();
  }
}
