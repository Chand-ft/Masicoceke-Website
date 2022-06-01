import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.scss']
})
export class Form5Component implements OnInit {
  @Input() item = ''; // decorate the property with 
  constructor() { }

  ngOnInit(): void {
  }

}
