import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/items';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[]=[];

  constructor() { }

  ngOnInit() {
    this.items=[
      {
        id:0,
        title:'manzana',
        price: 10.5,
        quantity:4,
        complete:false

      },
      {
        id:1,
        title:'pera',
        price: 13.5,
        quantity:6,
        complete:true

      },
    ]
  }

}