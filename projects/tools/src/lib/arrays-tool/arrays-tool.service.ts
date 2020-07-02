import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArraysToolService {
  constructor() {}
  //Move element
  moveElementInArray(array: any[], element: any, newPos: number): void {
    var index = array.indexOf(element);
    // Item non-existent?
    if (index == -1 || newPos >= array.length) {
      console.log('Out of index or element is not in the array');
      return;
    }
    // Swap elements
    if (newPos < index) {
      array.splice(newPos, 2, array[index], array[newPos]);
    } else {
      array.splice(index, 2, array[newPos], array[index]);
    }
  }
  //Move element at the given index to the left
  moveElementAtIndexLeft(array: any[], index: number) {
    this.moveElementInArray(array, array[index], index - 1);
  }
  //Move element at the given index to the right
  moveElementAtIndexRight(array: any[], index: number) {
    this.moveElementInArray(array, array[index], index + 1);
  }
  //Move to the left (example: if it was at 1 the it will move to the 0)
  moveElementLeft(array: any[], element: any): void {
    let curIndex = array.indexOf(element);
    let newPos = curIndex - 1;
    this.moveElementInArray(array, element, newPos);
  }
  //Move to the right (example: if it was at 1 the it will move to the 2)
  moveElementRight(array: any[], element: any): void {
    let curIndex = array.indexOf(element);
    let newPos = curIndex + 1;
    this.moveElementInArray(array, element, newPos);
  }

  //Remove the element from the array
  removeFromArray(array: any[], element: any): any[] {
    return array.filter((currentElement) => currentElement !== element);
  }
  //Combine two arrays
  combine(array: any[], other: any[]): any[] {
    return [...array, ...other];
  }
  //shuffle the array content
  shuffle(array: any[]): any[] {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
