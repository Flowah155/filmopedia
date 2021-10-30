import { Component, OnInit } from '@angular/core';

import { BusquedaService } from 'src/app/servicios/busqueda/busqueda.service';
import { BusquedaInterface } from 'src/app/interfaces/busqueda-interface';
import { BusquedaModel } from 'src/app/clases/busqueda-model';

@Component({
	selector: 'app-busqueda',
	templateUrl: './busqueda.component.html',
	styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

	resultadoBusqueda! : BusquedaInterface;
	queryBusqueda! : string;
	modelBusqueda = new BusquedaModel('');

	constructor( private servicioBusqueda : BusquedaService) { }

	ngOnInit(): void {
	}

	sendQuery = () => {
		this.servicioBusqueda.busqueda(this.modelBusqueda.q).then( (response) => {
			this.resultadoBusqueda =  response;
		}, (error) => {
			alert("error: " + error.statusText )
	})}
}
