import { Component, OnInit } from '@angular/core';
import {FooterComponent} from '../footer/footer.component';
import {FeaturesSectionComponent} from '../features-section/features-section.component'


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
