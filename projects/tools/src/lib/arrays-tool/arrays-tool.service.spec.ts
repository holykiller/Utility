import { TestBed } from '@angular/core/testing';

import { ArraysToolService } from './arrays-tool.service';

describe('ArraysToolService', () => {
  let service: ArraysToolService;
  let numbers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArraysToolService);
    numbers = [1, 2, 3, 4, 5];
    spyOn(console, 'log');
  });

  it('should move element from its current position to a new index', () => {
    //move from index 2 (3) to index 1 so it should be [1,3,2,4,5]
    service.moveElementInArray(numbers, numbers[2], 1);
    expect(numbers[1]).toBe(3);

    service.moveElementInArray(numbers, 100, 1);
    expect(console.log).toHaveBeenCalled();
  });

  it('should move element left', () => {
    //move from index 2 (3) to index 1 so it should be [1,3,2,4,5]
    service.moveElementLeft(numbers, numbers[2]);
    expect(numbers[1]).toBe(3);
  });

  it('should move element right', () => {
    //move from index 2 (3) to index 1 so it should be [1,3,2,4,5]
    service.moveElementRight(numbers, numbers[2]);
    expect(numbers[3]).toBe(3);
  });

  it('should move element left from the given index', () => {
    //move from index 2 (3) to index 1 so it should be [1,3,2,4,5]
    service.moveElementAtIndexLeft(numbers, 2);
    expect(numbers[1]).toBe(3);
  });

  it('should move element right from the given index', () => {
    //move from index 2 (3) to index 1 so it should be [1,3,2,4,5]
    service.moveElementAtIndexRight(numbers, 2);
    expect(numbers[3]).toBe(3);
  });

  it('should remove the given element from the array', () => {
    const original = [1, 'two', 3, 4, 5];
    //move from index 2 (3) to index 1 so it should be [1,3,2,4,5]
    const newOne = service.removeFromArray(original, original[0]);
    expect(newOne[0]).toBe('two');
  });

  it('should shuffle the array order', () => {
    let original = [1, 2, 3, 4, 5];
    let doubleArray = service.combine(original, original);
    let originalText = doubleArray.toString();
    console.info('original : ' + originalText);

    let shuffled = service.shuffle(doubleArray);
    let shuffledText = shuffled.toString();
    expect(originalText).not.toEqual(shuffledText);
    console.info('shuffled : ' + shuffledText);
  });
  it('should combine two arrays', () => {
    let original = [1, 2, 3, 4, 5];
    let doubleArray = service.combine(original, original);
    console.info('original');
    console.info(doubleArray);
    expect(doubleArray.length).toBe(original.length * 2);
  });
});
