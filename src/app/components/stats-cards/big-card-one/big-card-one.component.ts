import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-big-card-one',
  templateUrl: './big-card-one.component.html',
  styleUrls: ['../general.scss', './big-card-one.component.scss']
})
export class BigCardOneComponent implements OnInit {

  @Input() data: {
    main: {
      title: string;
      title2: string;
    },
    sub1: {
      title: string;
      value: string;
    }
    sub2: {
      title: string;
      value: string;
    }

    sub3: {
      title: string;
      value: string;
    }
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
