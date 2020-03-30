import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-big-card-two',
  templateUrl: './big-card-two.component.html',
  styleUrls: ['../general.scss', './big-card-two.component.scss']
})
export class BigCardTwoComponent implements OnInit {

  @Input() data: {
    main: {
      title: string;
      value: number;
    },
    progress: {
      title: string;
    },
    confirmed: number;
    unconfirmed: number;

    duration: number;
    badge1: number;
    badge2: number;
    status: string;
  };
  constructor() { }

  ngOnInit(): void {
  }

}
