import { Component, Input, OnInit } from '@angular/core';
import { MainWindowComponent } from '../main-window/main-window.component';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name = "defaultName";
  @Input() amount: number = 0
  @Input() position = 0;
  manager: ManagerService;

  constructor(service: ManagerService) {
    this.manager = service;
   }

  ngOnInit(): void {
  }

  public onDeleteClicked(): void {
    this.manager.deletePerson(this.position);
  }

  public onAppendClicked(): void {
    this.name = this.name + "bla";
  }

  public onValueChanged(): void {
  }

  public getName(): string {
    return this.name;
  }

  public changeName(newName: string) {
    this.manager.renamePerson(this.position, newName);
    this.name = newName;
  }

  public updatePosition(p: number) {
    this.position = p;
  }

  public onAmountChanged():void {
    this.manager.changeContributionAmount(this.position, this.amount);
  }

}
