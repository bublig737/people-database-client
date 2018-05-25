import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'

import { age } from '../../shared/data/age'
import { getSelectData } from '../../shared/functions'
import { DataForm } from '../../models/interfaces';

import { VKService } from '../../services/API/vk'
import { HttpService } from '../../services/http'


@Component({
  selector: 'sidenav-component',
  templateUrl: './template.html',
  styleUrls: ['./style.styl'],
  providers: [VKService, HttpService]
})
export class SideNavComponent implements OnInit {

  name: string
  surname: string
  sex: number = 0
  id: string

  isIdSearch: boolean = false

  constructor(private vkService: VKService) {}

  ngOnInit() {

    document.addEventListener('DOMContentLoaded', function () {

      var select = document.querySelectorAll('select');
      var selectInstance: any = M.FormSelect.init(select, {})
      var sidenav = document.querySelectorAll('.sidenav');
      var sidenavInstance = M.Sidenav.init(sidenav, {});

    });
  }

  submit() {

    let dataform: DataForm

    if (this.id) {

      dataform = {

        id: this.id

      }
    }

    else {

      dataform = {

        name: this.name,
        surname: this.surname,
        sex: this.sex,
        age_from: getSelectData('.age_from'),
        age_to: getSelectData('.age_to'),
        country: getSelectData('.country'),
        city: getSelectData('.city')

      }
    }

    console.log('Данные, полученные с формы:', dataform)

  }
}
