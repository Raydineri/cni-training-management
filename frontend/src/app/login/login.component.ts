import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dacauser ={
    nom_utilisateur:'',
    password:'',
    about:''

  }
  constructor(private _auth: AuthService,private router : Router  ) { }
  ngOnInit(): void {
    
  }
  token : any;
  
login() {
  this._auth.login(this.dacauser)
    .subscribe(
      (res: any) => {
        this.token = res;
        localStorage.setItem('token', this.token.mytoken);
        
        // Redirige vers différentes pages en fonction de la valeur de 'about'
        let userType = this._auth.getUserTypeFromToken();
        if (userType === 'dacaUser') {
          this.router.navigate(['/daca']);
        } else if (userType === 'ufrUser') {
          this.router.navigate(['/ufr']);
        }
      },
      (err: any) => console.log(err)
    )
}

}
