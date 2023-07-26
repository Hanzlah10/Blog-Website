import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, getDoc, query, where } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcribersService {

  constructor(private fireStore: Firestore) { }

  addSub(subData:any){
    const dataInstance = collection(this.fireStore,'subscribers')
    addDoc(dataInstance,subData).then(()=>{
      // this.toastr.success("Subcribed")
    })
  }


  checksSubs(email:any):Observable<any>{
    const dataInstance = collection(this.fireStore,'subscribers')
    const q = query(dataInstance, where('email', '==',email))
    console.log(q)
    return collectionData (q)
  }
}
