import { Router } from '@angular/router';
import { APIService } from './../../Services/api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  tipo:FormGroup
  consulta:FormGroup
  constructor(private serv:APIService, private router:Router, private builder:FormBuilder) { }

  ngOnInit(): void {
  }

}
