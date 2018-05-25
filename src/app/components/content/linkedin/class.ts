import { Component, Input } from '@angular/core';
import * as M from 'materialize-css'
import { DataCard } from '../../../models/classes'


@Component({
  selector: 'linkedin-content-component',
  templateUrl: '../template.html',
  styleUrls: ['../style.styl']
})
export class LinkedinContentComponent {

  @Input() data: DataCard[]

}
