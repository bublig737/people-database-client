import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './template.html',
  styleUrls: ['./style.styl']
})
export class AppComponent {
  title = 'app';
  waterfall = true;
  expansionRatio: number;

  tabs = [
    {
      name: 'bb',
      content: 'First tab'
    },
    {
      name: 'bbbbbbbb',
      content: 'Second tab'        
    },
    {
      name: 'bbbbbbbb',
      content: 'Third tab'
    },
    {
      name: 'bbbbbbb',
      content: 'Fourth tab'        
    },
    {
      name: 'bbbbbbbb',
      content: 'Fourth tab'        
    },
    {
      name: 'bbbbbbbb',
      content: 'Fourth tab'        
    }
  ];
  active = 0;

  activate(index: number) {
    this.active = index;
  }

  updateExpansionRatio(ratio: number) {
      this.expansionRatio = ratio;
  }
}
