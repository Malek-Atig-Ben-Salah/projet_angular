import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/app/model/Residence';
import { ResidenceService } from 'src/app/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {

  constructor(private residenceService : ResidenceService) { }

  residences! : Residence[] ; 

  ngOnInit(): void {
    this.getResidences()
  }

  getResidences(){
    this.residenceService.getAllResidences().subscribe(res=>{
      this.residences = res;
    })
  }
}
