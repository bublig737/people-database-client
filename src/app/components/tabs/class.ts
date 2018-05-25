import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'
import { DataCard, DataBlock } from '../../models/classes';


@Component({
  selector: 'tabs-component',
  templateUrl: './template.html',
  styleUrls: ['./style.styl']
})
export class TabsComponent implements OnInit {


  

   facebookData: DataCard[] = [
    {
    name: 'george',
    surname: 'Hetman',
    born: '1997.08.19',
    city: 'Odessa',
    education: 'pty',
    work: 'programmer'
  },
    {
    name: 'roma',
    surname: 'Hetman',
    born: '1997.08.19',
    city: 'Odessa',
    education: 'pty',
    work: 'programmer'
  },
    {
    name: 'Denis',
    surname: 'Hetman',
    born: '1997.08.19',
    city: 'Odessa',
    education: 'pty',
    work: 'programmer'
  }
]
   vkData: DataCard[] = [
    {
    name: 'Artur',
    surname: 'Hetman',
    born: '1997.08.19',
    city: 'Odessa',
    education: 'pty',
    work: 'programmer'
  },
    {
    name: 'Argun',
    surname: 'Hetman',
    born: '1997.08.19',
    city: 'Odessa',
    education: 'pty',
    work: 'programmer'
  },
    {
    name: 'Denis',
    surname: 'Hetman',
    born: '1997.08.19',
    city: 'Odessa',
    education: 'pty',
    work: 'programmer'
  }
]

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
}
