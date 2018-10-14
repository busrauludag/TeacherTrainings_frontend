import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from './RegisterUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
    
  }

  register(registerUser:RegisterUser){
    this.authService.register(registerUser);
  }

}
