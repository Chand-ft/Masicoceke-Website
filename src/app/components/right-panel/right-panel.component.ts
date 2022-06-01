import { Component, OnInit } from '@angular/core';
// import {DataService} from '../../data.service';


@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss'],
  // providers: [DataService]

})
export class RightPanelComponent implements OnInit {
  
  constructor() { }
  totalUserInputs: string = "";
  ngOnInit(): void {
  }
  
  parentFunction(data: any){
    console.log(data)
  }
  
  addToParentArray(userInputValues: string) {
    // this.items.push(userInputValues);
    console.log(userInputValues)
    this.totalUserInputs = userInputValues
  }
  currentItem = 'Television';


  // TODO for API
//   ngOnInit(): void {
//     this.retrivedData();
//  }
//   retrivedData() {
//    this.userService.getuser().subscribe((res: any) => {
   
//       this.userRetrived = res['results'];
//       console.log('hello',this.userRetrived)
//     })
// }
}
