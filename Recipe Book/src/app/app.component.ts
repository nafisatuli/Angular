import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadFeature = 'recipe'; //initially store the feature which should be displayed

  onNavigate(feature: string) {
    this.loadFeature = feature;
  }
}
