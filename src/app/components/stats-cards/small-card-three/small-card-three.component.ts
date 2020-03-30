import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-small-card-three',
  templateUrl: './small-card-three.component.html',
  styleUrls: ['../general.scss', './small-card-three.component.scss']
})
export class SmallCardThreeComponent implements OnInit {

  @Input() data: {
    main: {
      title: string;
      text: string;
    },
    count1: number;
    count2: number;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
