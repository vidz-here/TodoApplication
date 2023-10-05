import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  editable = false;

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string){
    if(!description) return;
    this.editable = false;
    this.item.description = description;
  }
}
