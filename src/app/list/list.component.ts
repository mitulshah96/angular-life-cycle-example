import { Component, OnInit,OnDestroy,OnChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnDestroy,OnChanges {

  constructor() { }

  ngOnInit() {
    console.log('List ngOninit called')
  }
  ngOnDestroy(){
    console.log('Destroying ngOndestroylist')
  }

  ngOnChanges(){
    console.log('I am called before init')
  }
  

}
