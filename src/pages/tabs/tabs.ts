import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {Breath} from "../breath/breath";
import {GamePage} from "../game/game";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = Breath;
  tab3Root =  AboutPage;
  tab4Root = GamePage;
  tab5Root = ContactPage;

  constructor() {

  }
}
