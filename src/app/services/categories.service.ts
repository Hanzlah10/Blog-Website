import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore : Firestore) { }

  loadData(){
    const dataInstance = collection(this.firestore,'collections')
    return collectionData(dataInstance, {idField:'id'})
   }
}
