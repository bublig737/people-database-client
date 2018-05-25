import { Component, Input } from '@angular/core';
import * as M from 'materialize-css'
import { DataCard } from '../../../models/classes'


@Component({
  selector: 'vk-content-component',
  templateUrl: '../template.html',
  styleUrls: ['../style.styl']
})

export class VKContentComponent {

 @Input() data: DataCard[]

}
