import { Component, VERSION } from '@angular/core';

import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Imran' + VERSION.major;

  dragDropData: any = [];
  // Drag and Drop
  drop(event: CdkDragDrop<string[]>) {
    console.log(event.item.data);
    // const previousIndex = event.previousContainer.data.findIndex(item => console.log(item));
    const previousIndex = event.previousContainer.data.findIndex(
      (item) => item === event.item.data
    );
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        previousIndex,
        // event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        previousIndex,
        // event.previousIndex,
        event.currentIndex
      );
    }
  }

  // Default Data
  dragData: any = [
    {
      id: 'box-1',
      title: 'Box 1',
    },
    {
      id: 'box-2',
      title: 'Box 2',
    },
    {
      id: 'box-3',
      title: 'Box 3',
    },
  ];
}
