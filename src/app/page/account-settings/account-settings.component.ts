import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  
  linkTheme = document.querySelector('#theme');
  links: any;
  constructor(private settingService: SettingsService) { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.settingService.checkCurrentTheme(this.links);
  }

  themaChange(thema: string) {
    this.settingService.themaChange(thema);
    this.settingService.checkCurrentTheme(this.links);
  }




}
