import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-details',
  templateUrl: './receipe-details.component.html',
  styleUrls: ['./receipe-details.component.scss'],
})
export class ReceipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
}
