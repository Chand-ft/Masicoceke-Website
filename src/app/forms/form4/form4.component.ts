import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})
export class Form4Component implements OnInit {

  userDataForm4:any = {
  };
  storeInputsInCom(){
    console.log(this.userDataForm4)
    
  }

    
  constructor() { }
  @Output() childStringData = new EventEmitter<string>();
  
  sendDataToParentCom() {
    this.childStringData.emit(this.userDataForm4);
  }
  // sendDataToParentCom(){
  //   this.childStringData.emit(userDataForm4)
  // }

  ngOnInit(): void {
  }

}
