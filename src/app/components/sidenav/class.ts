import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'
import { age } from '../../services/age'


@Component({
  selector: 'sidenav-component',
  templateUrl: './template.html',
  styleUrls: ['./style.styl']
})
export class SideNavComponent implements OnInit {

  fromAge: number[]
  beforeAge: number[]

  getFromAge(){

    this.fromAge = age
    return this.fromAge

  }

  getBeforeAge(){

    

  }

  ngOnInit() {

    document.addEventListener('DOMContentLoaded', function () {
      var select = document.querySelectorAll('select');
      var selectInstance = M.FormSelect.init(select, {});
      var sidenav = document.querySelectorAll('.sidenav');
      var sidenavInstance = M.Sidenav.init(sidenav, {});
    });

  }
}