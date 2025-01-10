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
  // create pdf on client and server-side by using pdfmake package
//   client/server-side PDF printing in pure JavaScript. In-browser. Print PDFs directly in the browser or delegate them to your NodeJS backend. one of the best in business for PDF creation.

// setup

// >npm i pdfmake

// You can make this using this package-

// https://online-resume-builder.netlify.com/
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

generatePdf(){
  const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
  pdfMake.createPdf(documentDefinition).download();
  }

  test(){
    var dd = {
      content: [
      {
      layout: 'lightHorizontalLines', // optional
      table: {
      // headers are automatically repeated if the table spans over multiple pages
      // you can declare how many rows should be treated as headers
      headerRows: 1,
      widths: [ '*', 'auto', 100, '*' ],

      body: [
      [ 'First', 'Second', 'Third', 'The last one' ],
      [ 'Value 1', 'Value 2', 'Value 3', 'Value 4' ],
      [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4' ]
      ]
      }
      }
      ]
      };
      pdfMake.createPdf(dd).download();
  }
}
