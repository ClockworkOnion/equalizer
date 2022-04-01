import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
  manager: ManagerService;
  displaySum: number = 0;

  constructor(service: ManagerService) {
    this.manager = service;
    this.displaySum = service.sumValues();
   }

  ngOnInit(): void {
  }

  onNewPersonClick() {
    this.manager.addPerson("New Person");
  }

  onSumUpClick() {
    this.displaySum = this.manager.sumValues();
  }


}
