import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  //@Output() onFeatureSelected: EventEmitter<any> = new EventEmitter<any>(); //create an object based on the EventEmitter class
  //using Output to make listenable from parent component
  //feature is the string received from header.html
  // onSelect(feature: string) {
  //   this.onFeatureSelected.emit(feature);
  // }
  //after adding routing it has no longer need

  constructor(private dataStorageService: DataStorageService) {}
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
