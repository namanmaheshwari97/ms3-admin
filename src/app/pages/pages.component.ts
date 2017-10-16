import { Component, OnInit } from '@angular/core';
import {PAGES_MENU_ITEMS} from './pages-menu.constant';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  public menu = PAGES_MENU_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
