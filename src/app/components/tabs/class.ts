import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'
import { DataCard, DataForm } from '../../models/interfaces';
import { LeftAPI } from '../../models/classes';
import {LeftSearcher} from '../../services/LeftAPI/searcher/leftsearcher'


@Component({
  selector: 'tabs-component',
  templateUrl: './template.html',
  styleUrls: ['./style.styl'],
  providers: [LeftSearcher]
})
export class TabsComponent implements OnInit {

  
constructor(private leftsearcher: LeftSearcher){}

  leftApi: LeftAPI

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

     this.leftApi = (<LeftSearcher>this.leftsearcher).getData()

  }
}
