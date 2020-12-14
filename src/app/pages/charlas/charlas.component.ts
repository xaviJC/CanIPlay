import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-charlas',
  templateUrl: './charlas.component.html',
  styleUrls: ['./charlas.component.css']
})

export class CharlasComponent implements OnInit {
  faPlus = faPlus;
  faCalendarDay = faCalendarDay;
  faUsers = faUsers;
  faLink = faLink;
  constructor() { }

  ngOnInit(): void {
  }

}
