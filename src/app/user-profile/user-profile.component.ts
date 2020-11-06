import { Component, OnInit } from '@angular/core';

export interface Vers{
  value: string;
  viewValue: string;
}
export interface FieldNo{
  value:string;
  viewValue:string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})


export class UserProfileComponent implements OnInit {
 apiProjectName:string;
 version:string;
 noOfFields:string;
 cachingRequired:string;
 noOfDownstream:string;
 complexity:string;
 design:string;
 build:string;
 devTest:string;
 citTest:string;
 isDisplay=false;
  constructor() { }

  ngOnInit() {
  }

  Versions: Vers[] = [
    {value: 'V1', viewValue: 'V1'},
    {value: 'V2', viewValue: 'V2'},
    {value: 'v3', viewValue: 'V3'},
    
  ];
  
  FieldNos: FieldNo[] = [
  {value: 'Less than 10', viewValue: 'Less than 10 fields'},
  {value: '10 to 25', viewValue: 'Between 10 to 25 fields'},
  {value: 'More than 25', viewValue: 'More than 25 fields'},
                                        
  ]; 
  
  

  gettingData(project:string,fieldno:string,cachingReq:string,noofdownstream:string){
this.noOfDownstream=noofdownstream;
this.cachingRequired=cachingReq;
    this.apiProjectName=project;
    this.noOfFields=fieldno;
    console.log("hi");
    console.log(this.apiProjectName);
    // alert(this.apiProjectName +  fieldno + cachingReq + noofdownstream );
   this.complexity =this.calculateComplexity(fieldno,cachingReq,noofdownstream);
// alert(this.complexity +"alert2");
this.calculateEffort(this.complexity);
this.isDisplay=!this.isDisplay;




  }

  calculateEffort(complex:string){
    if(complex=== "Low"){
      this.design="20";
      this.build="48";
      this.devTest="16";
      this.citTest="40";

    }
    else if (complex=== "Medium"){
      this.design="32";
      this.build="72";
      this.devTest="24";
      this.citTest="56";

    } 
   else if (complex=== "High"){
    this.design="54";
    this.build="96";
    this.devTest="32";
    this.citTest="72";
   }
   else if (complex=== "Very High"){
    this.design="72";
    this.build="128";
    this.devTest="48";
    this.citTest="96";
   }



  }
calculateComplexity( fieldno:string,cachingReq:string,noofdownstream:string){
if (fieldno==="Less than 10" && cachingReq ==="No"&& noofdownstream ==="Less than 2") 
{
  // alert("returned alert3")
  return "Low";
 
}

else if (fieldno ==="Less than 10" && cachingReq === "Yes" && noofdownstream === "Less than 2") {
  return "Medium";
} 

else if (fieldno === "10 to 25" && cachingReq ==="No"&& noofdownstream === "Between 2 and 4") {
  // alert("returned alert4")
  return "High";
} 




}
}
