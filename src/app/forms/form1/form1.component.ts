import { Component, OnInit , Output, EventEmitter} from '@angular/core';

interface sizeOptions {
  value: string;
  viewValue: string;
}
interface brandOptions {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {


  sizes: sizeOptions[] = [
    {value: 'small', viewValue: 'Small'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'large', viewValue: 'Large'},
  ];
  brands: brandOptions[] = [
    {value: 'Omo', viewValue: 'Omo'},
    {value: 'Stay soft', viewValue: 'Stay soft'},
    {value: 'Ariel', viewValue: 'Ariel'},
  ];

  userDataForm1:any = {
  };
  
  storeInputsInCom(){
    console.log(this.userDataForm1)
  }
  
  @Output() childStringData = new EventEmitter<string>();
  
  sendDataToParentCom(values: string) {
    this.childStringData.emit(values);
  }


  ngOnInit(): void {

  }
  
}


// TODO @Output() childStringData = new EventEmitter<string>();
// constructor(private dataService: FormsDataService) { }

// TODO sendDataToParentCom(value: string) {
  //   this.childStringData.emit(value);
  // }


  // size:"", 
  // quantity:"", 
  // brand:"",
  // name:"",
  //   surname:"",
  //   age:"",
  //   phoneNumber:"",
  //   houseNumber:"",
  //   street:"",
  //   town:"",
  //   areaCode:"",
  //   cardNumber:"",
  //   expiryDate:"",
  //   cvc:"",