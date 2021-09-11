import {Component, Input} from '@angular/core';


export interface Projects {
  firstTitle: string,
  lastTitle: string,
  middleTitle: string,
}
export interface Products {
  firstTitle: string,
  lastTitle: string,
  middleTitle: string,
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'iSponsorAngular';

  projects: Projects[] = [
    {
      firstTitle: 'Project1',
      lastTitle: 'Project1 description',
      middleTitle: 'About Project1'
    },
    {
      firstTitle: 'Project2',
      lastTitle: 'Project2 description',
      middleTitle: 'About Project2'
    },
    {
      firstTitle: 'Project3',
      lastTitle: 'Project3 description',
      middleTitle: 'About Project3'
    },
    {
      firstTitle: 'Project4',
      lastTitle: 'Project4 description',
      middleTitle: 'About Project4'
    }
  ]

  products: Products[] = [
    {
      firstTitle: 'Product1',
      lastTitle: 'Product1 description',
      middleTitle: 'About Product1'
    },
    {
      firstTitle: 'Product2',
      lastTitle: 'Product2 description',
      middleTitle: 'About Product2'
    },
    {
      firstTitle: 'Product3',
      lastTitle: 'Product3 description',
      middleTitle: 'About Product3'
    },
    {
      firstTitle: 'Product4',
      lastTitle: 'Product4 description',
      middleTitle: 'About Product4'
    }
  ]




}
