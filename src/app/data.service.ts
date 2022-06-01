import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info:[]=[]
  getInfo(){
    return this.info
  }

  
  // TODO
  // Toarray(): void {
  //   this.users.push(this.user);
  //   console.log('Users array:', this.users)
  //   this.userService.users(this.users)
  // }

  constructor() { }
}
