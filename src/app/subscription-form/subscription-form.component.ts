import { Component } from '@angular/core';
import { Sub } from '../models/sub';
import { SubcribersService } from '../services/subcribers.service';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent {

  constructor(private subService: SubcribersService) {
    
  }
docData:any
isSuccess = false
donthideForm = false
  onSubmit(formData: any){
    const subData :Sub ={
      name: formData.name,
      email :formData.email
    }

    this.subService.addSub(subData)
    this.isSuccess = true
    
  //  this.docData = this.subService.checksSubs(subData.email).subscribe((val=>{
  //   if(val.length == 0){
  //      console.log("Added")
  //      this.isSuccess = true
  //      this.donthideForm= true
  //   }
  //   else{
  //     console.log("already exits")
  //   }
  //  }))
  }
}
