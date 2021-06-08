import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeOrgImageComponent } from '../change-org-image/change-org-image.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  img = false;
  image: any = '';
  filename: any | '';
  constructor(public dialog: MatDialog) {
    this.image = localStorage.getItem("OrgImg");
    if(this.image == null){
      this.img = false;
    }else{
      this.img = true;
    }
    this.filename = localStorage.getItem("filename");
    this.filename = JSON.parse(this.filename);
   }

  ngOnInit(): void {
    
  }

  openModel() {
    if(true){
        const dialogRef = this.dialog.open(ChangeOrgImageComponent,{
          hasBackdrop: true,
          height: 'auto',
          width: '60%',
          panelClass: 'modal-css'
        });
        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            if(result!=''){
              this.image = localStorage.getItem("OrgImg");
              if(this.image!=' ' || this.image!= null){
                this.img = true;
              }
              this.filename = result;

              localStorage.setItem('filename',JSON.stringify(result));
            } 
          }
        });
      }
  }

}
