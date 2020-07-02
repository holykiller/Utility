import { async, TestBed } from '@angular/core/testing';
import { DownloadTool } from './download-tool';

describe('DownloadTool', () => {
  let service: DownloadTool;

  beforeEach(async(() => {
    TestBed.configureTestingModule({}).compileComponents();
  }));
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new DownloadTool();

    spyOn(console, 'log');
  });
  afterAll(() => {});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Create and download the file', () => {
    service.DownloadTextToFileAsJson(null, '');
    expect(console.log).toHaveBeenCalled();
    service.DownloadTextToFileAsJson('some text', null);
    expect(console.log).toHaveBeenCalled();

    spyOn(window.URL, 'createObjectURL');
    spyOn(window.URL, 'revokeObjectURL');
    service.DownloadTextToFileAsJson('some text', 'test');
    expect(window.URL.createObjectURL).toHaveBeenCalled();
    expect(window.URL.revokeObjectURL).toHaveBeenCalled();
  });
});
