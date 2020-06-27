import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.scss'],
})
export class ReceipeItemComponent implements OnInit {
  @Input() recipe: Recipe; //Input allows us to bind this component from outside
  @Input() index: number;
  ngOnInit() {}
}
