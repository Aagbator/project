import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipechart',
  templateUrl: './pipechart.component.html',
  styleUrls: ['./pipechart.component.scss']
})
export class PipechartComponent implements OnInit {

  constructor() { }

  colors = ['#7a9536', '#b9a0c5', '#2a4d7b', '#983a36', '#fe5c15'];
  data: {label: string, value: number}[] = [
    {
      label: 'Concept',
      value:5
    },
    {
      label: 'Shaping',
      value: 4
    },
    {
     label: 'Initiation',
      value: 5,
    },
    {
      label: 'Execution',
      value: 8,
    },
    {
      label: 'Closedown',
      value: 10
    }
  ];
  total =  this.data.reduce((a, b) => a + b.value, 0);

  ngOnInit(): void {
  }

  toggleWithGreeting(tooltip, greeting: string) {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({greeting});
    }
  }
}
