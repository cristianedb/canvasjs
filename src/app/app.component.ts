import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../assets/canvasjs/canvasjs.min'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
  dato:any 
  t1:number
  t2:number
  constructor(){
    this.t1 = new Date().getTime()
    this.dato = new Array(100000).fill(0).map(()=>{return {x:1000*Math.random(),y:100*Math.random()}})
    this.t2 = new Date().getTime()
    console.log(this.t2 - this.t1)
  }
  ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Basic Column Chart in Angular"
    },
    axisX: {
      title:"Area (in sq. ft)",
      minimum: 0,
      maximum: 1000
    },
    axisY:{
      title: "Price (in USD)",
      valueFormatString: "$#,##0k"
    },
		data: [{
			type: "scatter",
		  toolTipContent: "<b>Area: </b>{x} sq.ft<br/><b>Price: </b>${y}k",
			dataPoints: this.dato
		}]
  });
  
  chart.render();
  console.log(new Date().getTime() -this.t2)
  }
}
