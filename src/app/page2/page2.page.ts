import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(
   private alertCntrl: AlertController
  ) { }

  ngOnInit() { 
  }

  CreatePrompt()
  {
this.alertCntrl.create({
  header: 'Submit review?',
  message: 'Do you satisfied to submit the review?',

  buttons:[
    {
      text:"No",
      handler:(data)=>{
        alert("user cancelled")
      }
    },
    {
      text:"Yes",
      handler:()=>{
        alert("Thankyou for review ");
      }
    }
  ]
}).then((promptElement)=>{
  promptElement.present();
})
  }

}