import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    const localTheme: any = localStorage.getItem('thema') || "./assets/css/colors/default-dark.css"; 
    this.linkTheme?.setAttribute('href', localTheme);
  }


  themaChange(thema: string) {

    const url = `./assets/css/colors/${thema}.css`
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('thema', url);

  }

  checkCurrentTheme(links: any) {
    links.forEach((ele:any) => {
      ele.classList.remove('working');
      const btnTheme = ele.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme?.getAttribute('href');

      if(btnThemeUrl === currentTheme){
        ele.classList.add('working')
      }

    });
  }
}
