import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Dimensions, ImageCroppedEvent } from 'ngx-image-cropper';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-change-org-image',
  templateUrl: './change-org-image.component.html',
  styleUrls: ['./change-org-image.component.scss']
})
export class ChangeOrgImageComponent implements OnInit {
  preview:boolean = false;
  imageSrc!: string;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  fileName: string ='';
  constructor(public dialogRef: MatDialogRef<ChangeOrgImageComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close(this.fileName);
  }


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    let type = event.target.files[0].type; 
    this.fileName = event.target.files[0].name;
    let Type = type.split("/", 2); 
    if(Type[0]=="image"){
      this.preview = true;
    } else {
      alert("Please Upload Only JPEG,PNG,TIFF formats.");
    }
    
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
    this.showCropper = true;
  }

  loadImageFailed() {
    this.preview = false;
  }

  cropperReady() {
    //pass
  }

  reUpload() {
    this.preview = false;
  }

  saveCroppedImage() {
    localStorage.setItem("OrgImg",this.croppedImage);
    this.closeDialog();
  }
}
