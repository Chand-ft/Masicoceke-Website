import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {


  userDataForm2:any = {};
  storeInputsInCom(){
    console.log(this.userDataForm2)
  }
  storeFormData(item:any){
    console.log(item)
  }
  test(){
    console.log(this.userDataForm2)}

  constructor() { }
  @Output() childStringData = new EventEmitter<string>();
  
  sendDataToParentCom(values: string) {
    this.childStringData.emit(values);
  }

  ngOnInit(): void {
  }

}
// [childVariable]="parentVariable"
