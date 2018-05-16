import { Component, Input } from '@angular/core';
import * as M from 'materialize-css'
import { DataCard } from '../../../models'


@Component({
  selector: 'facebook-content-component',
  templateUrl: '../template.html',
  styleUrls: ['../style.styl']
})

export class FacebookContentComponent {

  @Input() data: DataCard[]
  
}
