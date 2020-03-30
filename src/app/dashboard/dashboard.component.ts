import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  card1 = {
    main: {
      title: 'Projects',
      value: 12,
      text: 'Projects',
      textType: 'b'
    },
    sub1: {
      title: 'Completed',
      value: '04',
    },
    sub2: {
      title: 'In Flight',
      value: '08'
    },
    icon: 'briefcase'
  };
  card2 = {
    main: {
      title: 'Budgets',
      value: '$100m',
    },
    sub: {
      title: '$50m Spent',
      value: 50,
    }
  };
  card3 = {
    main: {
      title: 'Resource',
      value: 150,
      text: 'FTEs Required',
      textType: 'm'
    },
    sub1: {
      title: 'Assigned',
      value: '80',
      text: 'FTEs'
    },
    sub2: {
      title: 'Unassigned',
      value: '70',
      text: 'FTEs'

    },
    icon: 'bullseye'
  };
  card4 = {
    main: {
      title: 'Risks',
      text: '40 Open',
    },
    count1: 27,
    count2: 13
  };
  card5 = {
    main: {
      title: 'Issues',
      text: '23 Open',
    },
    count1: 12,
    count2: 11
  };

  card6 = {
    main: {
      title: 'Delivery Status',
      value: 5,
      text: 'Project Missed Milestone',
      textType: 's'
    },
    sub1: {
      title: 'Project Start',
      value: '10',
    },
    sub2: {
      title: 'Project End',
      value: '3'
    },
    icon: 'rocket'
  };

  bigCard = {
    main: {
      title: 'Projects',
      title2: 'Benefits'
    },
    sub1: {
      title: 'Approved',
      value: '10',
    },
    sub2: {
      title: 'Awaiting Approval',
      value: '3'
    },
    sub3: {
      title: 'Approval',
      value: '4'
    }
  };

  projects = [
  {
    main: {
      title: 'Project A',
      value: 12,
    },
    progress: {
      title: '$50k'
    },
    status: 'pending',
    confirmed: 10,
    unconfirmed: 15,
    duration: 10,
    badge1: 2,
    badge2: 5,
  },
    {
      main: {
        title: 'Project B',
        value: 80,
      },
      progress: {
        title: '$1.5m'
      },
      status: 'success',
      confirmed: 10,
      unconfirmed: 15,
      duration: 6,
      badge1: 1,
      badge2: 4,
    },
    {
      main: {
        title: 'Project C',
        value: 75,
      },
      progress: {
        title: '$2.5m'
      },
      status: 'failed',
      confirmed: 12,
      unconfirmed: 6,
      duration: 36,
      badge1: 8,
      badge2: 6,
    },
    {
      main: {
        title: 'Project D',
        value: 55,
      },
      progress: {
        title: '$2.5m'
      },
      status: 'failed',
      confirmed: 15,
      unconfirmed: 2,
      duration: 15,
      badge1: 9,
      badge2: 8,
    },
    {
      main: {
        title: 'Project E',
        value: 90,
      },
      progress: {
        title: '$11m'
      },
      status: 'pending',
      confirmed: 25,
      unconfirmed: 0,
      duration: 8,
      badge1: 4,
      badge2: 3,
    }
  ];


  constructor() {
  }

  ngOnInit(): void {
  }

}
