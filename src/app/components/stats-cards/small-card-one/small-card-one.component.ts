import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-card-one',
  templateUrl: './small-card-one.component.html',
  styleUrls: ['../general.scss', './small-card-one.component.scss']
})
export class SmallCardOneComponent implements OnInit {

  @Input() data: {
    main: {
      title: string;
      value: number;
      text: string;
      textType: string;
      },
    sub1: {
      title: string;
      value: string;
      text?: string;
    }
    sub2: {
      title: string;
      value: string;
      text?: string;
    }
    icon?:string;
  };
  constructor() { }

  ngOnInit(): void {
  }

}
