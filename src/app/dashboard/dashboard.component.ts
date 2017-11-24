import { Component, OnInit,OnDestroy,OnChanges } from '@angular/core';
import { Name } from '../name'
import {DISPLAYNAMES} from '../mock-names'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit ,OnDestroy,OnChanges{

  constructor() { }

  name = DISPLAYNAMES;

  ngOnInit() {
    console.log('ngOnInit Called');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy Called');
  }

  ngOnChanges(){
    console.log('I am called  before onInit and whenever one or more data bound properties changes')
  }
  
  changeInput(name:string):void{
    //this.name.names='mituls';
  }
  handleChange(){
 //  this.name = [...this.name ,{'names':'abc'}]
 this.name.push({'names':'vaibhav chava'});
  }
}
