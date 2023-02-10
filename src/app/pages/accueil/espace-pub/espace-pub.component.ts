import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-espace-pub',
  templateUrl: './espace-pub.component.html',
  styleUrls: ['./espace-pub.component.css']
})
export class EspacePubComponent {

  customOptions: OwlOptions = {
    loop: true,
    dots: true,
    items: 1,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
  }

}
