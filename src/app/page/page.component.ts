import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// Cundo se usan funciones globales
declare function customInitFunction() :any;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styles: [
  ]
})
export class PageComponent implements OnInit {

  constructor(private settingServices: SettingsService) { }

  async ngOnInit() {
    await customInitFunction();
  }

}
