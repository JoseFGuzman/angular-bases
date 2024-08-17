import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {

  @Input()
  public characterList : Character[] =[{
  name:"Trunks",
  power:10
 }];

 @Output()
 public onDeleteId: EventEmitter<string>= new EventEmitter();


 /* onDeleteCharacter(index:number):void{
  //TODO: emitir el ID del personaje
  this.onDeleteId.emit(index);
  console.log("ListComponent")
 } */

 deleteCharacterById(id?:string ):void{
  //TODO: emitir el ID del personaje
  if(!id) return

  this.onDeleteId.emit(id);

 }
}
