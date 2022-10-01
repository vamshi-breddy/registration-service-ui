import { Component, OnInit } from '@angular/core';
import { ExcelUploadService } from '../excel-upload.service';

@Component({
  selector: 'app-excel-upload',
  templateUrl: './excel-upload.component.html',
  styleUrls: ['./excel-upload.component.css']
})
export class ExcelUploadComponent implements OnInit {

  constructor(private service:ExcelUploadService) { }

  ngOnInit(): void {
  }

  file:any;

  selectFile(event:any){
    console.log(event+"]]]");
    this.file = event.target.files[0];
    console.log(this.file+"{{");
  }

  uploadFile(){
    let formData = new FormData();
    formData.append("file",this.file);

    this.service.uploadFile(formData).subscribe(
      (data)=>{
          console.log(data);
      },
      (error)=>{
        console.log(error);
      });

      alert("File uploaded and data saved");

  }

}
