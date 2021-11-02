import { Injectable } from '@angular/core';
import { commonUser, loggedUser, userList } from '../core/models/users';
import { UsersService } from '../core/services/http/users.service';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ResolveUsersService {

  constructor() {

  }

}
