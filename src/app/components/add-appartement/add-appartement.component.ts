import { Component, OnInit } from '@angular/core';
import { Apprtement } from 'src/app/model/Appartement';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-add-appartement',
  templateUrl: './add-appartement.component.html',
  styleUrls: ['./add-appartement.component.css']
})
export class AddAppartementComponent implements OnInit {

  constructor() { }

  oui : string = 'oui';

  appartement! :Apprtement;

  ngOnInit(): void {
  }

  add(f : NgForm){
    console.log(f.value);
  }

}
