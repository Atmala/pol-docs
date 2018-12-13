import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'poldoc-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() caption: string;
  constructor() { }

  ngOnInit() {
  }

}
