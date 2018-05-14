import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'
// import { DataCard } from '../../models'

@Component({
  selector: 'tabs-component',
  templateUrl: './template.html',
  styleUrls: ['./style.styl']
})
export class TabsComponent implements OnInit {

  tabs: {}[] = [ 
  {name: 'VK', id: '#vk'}, 
  {name: 'Facebook', id: '#facebook'}, 
  {name: 'Twitter', id: '#twitter'}, 
  {name: 'Instagram', id: '#instagram'}, 
  {name: 'Telegram', id: '#telegram'}, 
  {name: 'Linkedin', id: '#linkedin'}]

  ngOnInit(){
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.tabs');
      var instance = M.Tabs.init(elems, {});
    });
  }
  

  rtl: boolean = false;
  outlined: boolean = false;

  get dir() {
    return this.rtl ? "rtl" : null;
  }  // card: DataCard = {
    
  // name: 'Денис',

  // surname: 'Гетьман',

  // image: '../../resources/img/no-img.png',

  // born: '20',

  // city: 'Одесса',

  // work: 'Программист',

  // education: 'ПТУ'

  // }
  
 
}
