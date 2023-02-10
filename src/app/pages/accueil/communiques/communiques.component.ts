import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-communiques',
  templateUrl: './communiques.component.html',
  styleUrls: ['./communiques.component.css']
})
export class CommuniquesComponent {

  customOptions: OwlOptions = {
    autoWidth:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  }

}
