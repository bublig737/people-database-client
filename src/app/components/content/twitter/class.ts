import { Component, Input } from '@angular/core';
import * as M from 'materialize-css'
import { DataCard } from '../../../models/interfaces'


@Component({
  selector: 'twitter-content-component',
  templateUrl: '../template.html',
  styleUrls: ['../style.styl']
})
export class TwitterContentComponent {

  @Input() data: DataCard[]

}
