import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-percent-bar',
  templateUrl: './percent-bar.component.html',
  styleUrls: ['./percent-bar.component.scss']
})
export class PercentBarComponent implements OnInit {

  @Input() value: number;
  constructor() { }

  ngOnInit(): void {
    // this.value = 50;
  }

}
