import { Directive, Input, Output, EventEmitter, OnInit, HostListener, ElementRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';

@Directive({
  selector: '[debounceDistinct]'
})
export class DebounceDistinctDirective 
  implements OnInit, OnDestroy {



  @Input() debounceDistinct:string
  @Output() debounceDistinctChange:EventEmitter<string> = 
    new EventEmitter<string>()

  private el:HTMLInputElement
  private _sub:Subscription

  constructor(ref:ElementRef) {
    this.el = ref.nativeElement
  }

  ngOnInit(): void {
    this._sub = fromEvent(this.el, 'input').pipe(
      map(ev => (ev.target as HTMLInputElement).value),
      debounceTime(600),
      distinctUntilChanged(),
      tap(val => console.log('debounceDistinct', val))
    ).subscribe(val => 
      this.debounceDistinctChange.emit(val)
    )
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe()
  }

}
