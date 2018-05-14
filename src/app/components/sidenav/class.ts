import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'


@Component({
  selector: 'sidenav-component',
  templateUrl: './template.html',
  styleUrls: ['./style.styl']
})
export class SideNavComponent implements OnInit {

  ngOnInit() {

    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {});
    });

  }
}