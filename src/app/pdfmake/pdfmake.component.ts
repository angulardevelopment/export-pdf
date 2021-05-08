import { Component, OnInit } from '@angular/core';


    import * as pdfMake from 'pdfmake/build/pdfmake.js';
    import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdfmake',
  templateUrl: './pdfmake.component.html',
  styleUrls: ['./pdfmake.component.scss']
})
export class PdfmakeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generate() {
          var dd = {
        content: [
          'First paragraph',
          'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
        ]
      }
      pdfMake.createPdf(dd).open();
    }



}
