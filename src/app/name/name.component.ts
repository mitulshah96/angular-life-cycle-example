import { Component, OnInit, OnDestroy, Input, OnChanges, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Name } from '../name'
import { DISPLAYNAMES } from '../mock-names'

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,

})
export class NameComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  public obj: any = {
    changer: 1
  };

  private _oldValue: number = 1;

  constructor(private _changeRef: ChangeDetectorRef) { }

  @Input() name: Name;

  ngOnInit() {
    setInterval(() => {
      this.obj.changer += 1;
    }, 1000)
  }

  ngOnDestroy() {
    console.log('Name component ngOnDestroy')
  }

  ngOnChanges(abc) {
    //check this console for name before docheck
    console.log(this.name);
  }

  ngDoCheck() {
    //check this console after onChange
   
  //  console.log( this.name);

   // if (this._oldValue !== this.obj.changer) {
    //  this._oldValue = this.obj.changer;
     // console.log(this._oldValue)
      //disable this line to see the counter not moving
     // this._changeRef.detectChanges();
   // }
  }
}


