import { TestBed } from '@angular/core/testing';

import { ImagesPpHolderService } from './images-pp-holder.service';

describe('ImagesPpHolderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesPpHolderService = TestBed.get(ImagesPpHolderService);
    expect(service).toBeTruthy();
  });
});
