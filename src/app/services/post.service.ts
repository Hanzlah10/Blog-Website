import { Injectable } from '@angular/core';
import {FieldValue, Firestore, collection, collectionData, doc, getDoc, increment, limit, orderBy, query, runTransaction, updateDoc, where } from '@angular/fire/firestore';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private fireStore: Firestore) { }

  loadFeatured(){
    const dataInstance = collection(this.fireStore,'posts');
    const q = query(dataInstance,where("isFeatured",'==',true),limit(4))
    return collectionData(q, {idField:'id'})
  }
  
  loadLatest(){
    const dataInstance = collection(this.fireStore,'posts');
    const q = query(dataInstance,orderBy('createdAt'))
    return collectionData(q, {idField:'id'})
  }

  loadCategoryPost(categoryId:any){
    const dataInstance = collection(this.fireStore,'posts');
    const q = query(dataInstance,where("category.categoryId", "==", categoryId));
    return collectionData(q, {idField:'id'})
  }

  loadPost(postId:string){ 
  const dataInstance = doc(this.fireStore,'posts',postId);
  return getDoc(dataInstance)
  }

  loadSimilarPost(postCategoryid:any){
    const dataInstance = collection(this.fireStore,'posts');
    const q = query(dataInstance,where("category.categoryId",'==',postCategoryid),limit(3))
    return collectionData(q, {idField:'id'})
    
  }
  // data:any
  // newdata:any
  // countViews(postId:any){
  //   const dataInstance = doc(this.fireStore,'posts',postId);
  //   getDoc(dataInstance).then((val)=>{
  //     this.data = val.data()
  //   })
  //   let count = this.data.views
  //   const newCount = count+=1
  //   this.data.views = newCount
  //   updateDoc(dataInstance,this.data)

  // }
  // views!:number
  // newViews!:number
 

  async countViews(postId:any){
    const dataInstance = doc(this.fireStore,'posts',postId);
  try {
    await runTransaction(this.fireStore, async (transaction) => {
      const sfDoc = await transaction.get(dataInstance);
      if (!sfDoc.exists()) {
        throw "Document does not exist!";
      }
  
      const newViews = sfDoc.data()['views'] + 1;
      transaction.update(dataInstance, { views: newViews });
    });
    // console.log("Transaction successfully committed!");
  } catch (e) {
    // console.log("Transaction failed: ", e);
  }
  
  }




  
}


