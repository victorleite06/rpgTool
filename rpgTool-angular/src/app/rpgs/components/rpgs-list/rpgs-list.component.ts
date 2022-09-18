import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rpg } from '../../model/rpg';

@Component({
  selector: 'app-rpgs-list',
  templateUrl: './rpgs-list.component.html',
  styleUrls: ['./rpgs-list.component.css']
})
export class RpgsListComponent implements OnInit {

  @Input() rpgs: Rpg[] = []
  @Output() abrir = new EventEmitter(false)

  readonly displayedColumns = ['name', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  open(rpg: Rpg){
    this.abrir.emit(rpg)
  }

}
