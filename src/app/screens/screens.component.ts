import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';
import {image} from '../screens/image'
import {OwlModule} from 'ngx-owl-carousel'


@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {

  constructor() { }

  homeSlider={items:1, dots:true, nav:true, autoplay:true, mouseDrag: false, touchDrag: true, pullDrag: true,
              }

  // images:image[]=[{src:"../../assets/marka1", id:'1'},
  //                 {src:"../../assets/marka2", id:"2"},
  //                 {src:"../../assets/marka3", id:"3"},
  //                 {src:"../../assets/marka4", id:"4"},
  //                 {src:"../../assets/marka5", id:"5"},
  //                 {src:"../../assets/marka6", id:"6"}]

  ngOnInit(): void {}

  // customOptions: OwlOptions = {
  //   center:true,      
  //   items:1,
  //   autoplay:true,
  //   autoWidth:true,
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  
  }

  
  


