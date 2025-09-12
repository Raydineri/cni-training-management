import { Component ,OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-daca',
  templateUrl: './daca.component.html',
  styleUrls: ['./daca.component.css']
})

export class DacaComponent implements OnInit {
  constructor(public _auth : AuthService) { }

  ngOnInit(): void {
  }

}
  



