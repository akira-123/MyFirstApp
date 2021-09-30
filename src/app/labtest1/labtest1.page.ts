import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-labtest1',
  templateUrl: './labtest1.page.html',
  styleUrls: ['./labtest1.page.scss'],
})
export class Labtest1Page {

constructor(
  private router:Router
) {}
 btnClicked(){
   console.log("btn Clicked");
   this.router.navigateByUrl('page2')
   
 }

 

}
