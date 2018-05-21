import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'
import { age } from '../../shared/data/age'
import { VKService } from '../../services/API/vk'
import { HttpService } from '../../services/http'


@Component({
  selector: 'sidenav-component',
  templateUrl: './template.html',
  styleUrls: ['./style.styl'],
  providers: [VKService, HttpService]
})
export class SideNavComponent implements OnInit {

  constructor(private vkService: VKService){

  }

  age: number[] = age


  ngOnInit() {

    document.addEventListener('DOMContentLoaded', function () {
      var select = document.querySelectorAll('select');
      var selectInstance: any = M.FormSelect.init(select, {})
      var sidenav = document.querySelectorAll('.sidenav');
      var sidenavInstance = M.Sidenav.init(sidenav, {});
      // this.otAgeValue = M.FormSelect.getInstance(document.querySelector('.region-select-block'));
    });
  }


  submit() {

    console.log(
     this.vkService.getCountries(), 'Запрос на вк сервис'
    );
    // console.log(M.FormSelect.getInstance(document.querySelector('.country')).getSelectedValues());

  }
}






const selectValue = (selector: string): string[] => {

  console.log('hello from select value');

  return M.FormSelect.getInstance(document.querySelector(selector)).getSelectedValues()

}