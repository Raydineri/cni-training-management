import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  
  constructor(public _auth : AuthService ,private router: Router) { }
  ngOnInit(): void {
    
  }
  goBack() {
    if  (this._auth.getUserTypeFromToken()=='dacaUser'){
      this.router.navigate(['/daca']);
    }else if  (this._auth.getUserTypeFromToken()=='ufrUser'){
      this.router.navigate(['/ufr']);
   
    
  }

}
}