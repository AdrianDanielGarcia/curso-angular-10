import { Component, OnInit } from '@angular/core';

import { alumnoData } from '../models/alumno.model';


@Component({
  selector: 'app-alumno-item',
  templateUrl: './alumno-item.component.html',
  styleUrls: ['./alumno-item.component.scss']
})
export class AlumnoItemComponent implements OnInit {

  alumno = alumnoData;

  constructor() { }

  ngOnInit(): void {
  }

}
