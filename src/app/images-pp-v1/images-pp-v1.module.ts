import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropImageComponent } from './components/crop-image/crop-image.component';
import { CompressImageComponent } from './components/compress-image/compress-image.component';
import { UploadImagesComponent } from './components/upload-images/upload-images.component';



@NgModule({
  declarations: [CropImageComponent, CompressImageComponent, UploadImagesComponent],
  imports: [
    CommonModule
  ]
})
export class ImagesPpV1Module { }
