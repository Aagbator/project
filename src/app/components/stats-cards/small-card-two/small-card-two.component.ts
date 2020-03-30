import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-small-card-two',
  templateUrl: './small-card-two.component.html',
  styleUrls: ['../general.scss', './small-card-two.component.scss']
})
export class SmallCardTwoComponent implements OnInit {

  @Input() data: {
    main: {
      title: string;
      value: string;
    },
    sub: {
      title: string;
      percent: number;
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
