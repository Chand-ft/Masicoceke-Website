import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {

  userDataForm3:any = {
  };
  storeInputsInCom(){
    console.log(this.userDataForm3)
  }
    
  constructor() { }
  @Output() childStringData = new EventEmitter<string>();
  
  sendDataToParentCom(values: string) {
    this.childStringData.emit(values);
  }

  ngOnInit(): void {
  }

}
