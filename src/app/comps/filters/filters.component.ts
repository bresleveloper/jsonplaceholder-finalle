import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-super-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {


  @Input() phOne:string
  @Input() phTwo:string
  @Input() phThree:string
  @Input() phFour:string

  @Input() filterOne:string
  @Input() filterTwo:string
  @Input() filterThree:string
  @Input() filterFour:string

  @Output() filterOneChange:EventEmitter<string> = new EventEmitter<string>()
  @Output() filterTwoChange:EventEmitter<string> = new EventEmitter<string>()
  @Output() filterThreeChange:EventEmitter<string> = new EventEmitter<string>()
  @Output() filterFourChange:EventEmitter<string> = new EventEmitter<string>()

}
