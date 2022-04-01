import { Injectable } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { PersonModel } from './person_model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  public persons: PersonModel[] = new Array<PersonModel>();

  constructor() { 
    this.persons[0] = new PersonModel("Bill", 2);
    this.persons[1] = new PersonModel("Bob", 4);
  }

  public addPerson(name: string): void {
    let i = this.persons.length;
    this.persons[i] = new PersonModel(name, 0);
  }

  public deletePerson(position: number):void {
    let i = this.persons.length;
    this.persons.splice(position, 1);
  }

  public deletePersonByName(toDelete: string) {
    this.persons.forEach((n, i) => {
      if (n.name == toDelete) {
        this.deletePerson(i);
      }
    });
  }

  public renamePerson(position: number, newName: string): void {
    this.persons[position].name = newName;
  }

  public changeContributionAmount(index: number, amount: number):void {
    this.persons[index].amount = amount;
  }

  public sumValues(): number {
    let sum = 0;
    this.persons.forEach(p => {
      sum += p.amount;
    });
    return sum;
  }

}
