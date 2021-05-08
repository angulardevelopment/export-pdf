import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  columns = [
    { title: "ID", dataKey: "id" },
    { title: "Name", dataKey: "name" },
    { title: "Country", dataKey: "country" },
  ];
  rows = [
    { "id": 1, "name": "Shaw", "country": "Tanzania" },
    { "id": 2, "name": "Nelson", "country": "Kazakhstan" }
  ];

  columns2 = ["ID", "Name", "Age", "City"];
  cols = [
    { key: 'ID',key2: 'Name',  key3: 'Age',     key4: 'City',  },
];
  rows2 = [
    [1, "Jonathan", 25, "Gothenburg"],
    [2, "Simon", 23, "Gothenburg"],
  ];
  constructor() { }

  ngOnInit(): void {
  }
  generateReporttbl() {



    // var elem = document.getElementById("tbl");  //here u can pass table heml element

    // var res = (doc as any).autoTableHtmlToJson(elem);



    // let first = doc.autoTable.previous;
    //after first table print this second table
    // doc.autoTable(columns.slice(0, 2), rows, {
    //   startY: first.finalY + 10,
    //   showHeader: "firstPage"
    // });
        //      doc.autoTable(columns, data, {startY: 30});
    //      let first = doc.autoTable.previous;
    //      doc.autoTable(columns.slice(0, 2), data, {
    //          startY: first.finalY + 10,
    //          showHeader: 'firstPage',
    //          margin: {right: 107}
    //      });
    //2+5-3
    // Reset page to the same as before previous table
    //  doc.setPage(doc.internal.getCurrentPageInfo().pageNumber);          //check
    // doc.text("hi");
    //  doc.autoTable(columns.slice(0, 2), rows, {
    //      startY: first.finalY + 10,
    //      showHeader: 'firstPage',
    //      margin: {left: 107}
    //  });

    //  for (var j = 0; j < 6; j++) {
    //      doc.autoTable(columns, rows, {
    //          startY: doc.autoTable.previous.finalY + 10,
    //          pageBreak: 'avoid',
    //      });
    //  }

    // var string = doc.output("datauristring"); //returns the data uri string
    // var iframe =
    //   "<iframe width='100%' height='100%' src='" + string + "'></iframe>";
    // let x = window.open();
    // x.document.open();
    // x.document.write(iframe);
    // x.document.close();
    // // doc.output('save', 'filename.pdf'); //Try to save PDF as a file (not works on ie before 10, and some mobile devices)
    // doc.output('datauri');              //opens the data uri in current window
    // doc.output('dataurlnewwindow');     //opens the data uri in new window
    //  doc.save('table.pdf');
    // }

    // pdfproperties() {

    //      // Reset page to the same as before previous table
    //      doc.setPage(1 + doc.internal.getCurrentPageInfo().pageNumber - doc.autoTable.previous.pageCount);          //check
    //      doc.autoTable(columns.slice(0, 2), data, {
    //          startY: first.finalY + 10,
    //          showHeader: 'firstPage',
    //          margin: {left: 107}
    //      });
    //      for (var j = 0; j < 6; j++) {
    //          doc.autoTable(columns, data, {
    //              startY: doc.autoTable.previous.finalY + 10,
    //              pageBreak: 'avoid',
    //          });
    //      }
    //      doc.save('sd.pdf');
    // var columns = ["ID", "Name", "Age", "City"];
    //  var data = [
    //      [1, "Jonathan", 25, "Gothenburg"],
    // [2, "Simon", 23, "Gothenburg"],
    //     [3, "Hanna", 21, "Stockholm"]
    //  ];
    //  var doc = new jsPDF();
    //  doc.autoTable(columns, data, {
    //      tableWidth: 'wrap',
    //      styles: {cellPadding: 0.5, fontSize: 8}
    //  });
    //  doc.save('sd.pdf');
    //     var columns = ["ID", "Name", "Age", "City"];
    //      var data = [
    //          [1, "Jonathan", 25, "Gothenburg"],
    //         [2, "Simon", 23, "Gothenburg"],
    //         [3, "Hanna", 21, "Stockholm"]
    //      ];
    //      var doc = new jsPDF('l');
    //      var columnsLong = columns.concat([
    //          "Title with\nlinebreak","Long text column"
    //      ]);
    //      doc.text(7, 15, "Overflow 'ellipsize' (default)");
    //      doc.autoTable(columnsLong, data, {
    //          startY: 20,
    //          margin: {horizontal: 7},
    //          styles: {columnWidth: 'wrap'},
    //          columnStyles: {text: {columnWidth: 'auto'}}
    //      });
    //      doc.text("Overflow 'hidden'", 7, doc.autoTable.previous.finalY + 10);
    //      doc.autoTable(columnsLong, data, {
    //          startY: doc.autoTable.previous.finalY + 15,
    //          margin: {horizontal: 7},
    //          styles: {overflow: 'hidden', columnWidth: 'wrap'},
    //          columnStyles: {text: {columnWidth: 'auto'}}
    //      });
    //      doc.text("Overflow 'linebreak'", 7, doc.autoTable.previous.finalY  + 10);
    //      doc.autoTable(columnsLong, data, {
    //          startY: doc.autoTable.previous.finalY + 15,
    //          margin: {horizontal: 7},
    //          bodyStyles: {valign: 'top'},
    //          styles: {overflow: 'linebreak', columnWidth: 'wrap'},
    //          columnStyles: {text: {columnWidth: 'auto'}}
    //      });
    //      doc.save('sd.pdf');
    //  };
    //   var doc = new jsPDF();
    //   doc.text("From HTML", 14, 16);
    //   var elem = document.getElementById("basic-table");
    //   var res = doc.autoTableHtmlToJson(elem);
    //   doc.autoTable(res.columns, res.data, {startY: 20});
    //   return doc;
    //   var doc = new jsPDF('p', 'pt');
    // var w = doc.getStringUnitWidth('Text') * 12; // Where 12 is the chosen font size

    // var doc = new jsPDF('p', 'pt');
    // var dim = doc.getTextDimensions('Text');

    // let finalY  = pdf.autoTable.previous.finalY ;
    // pdf.text('Notes:'+this.ty,55,finalY-120 );
    // let finalY = pdf.autoTable.previous.finalY; // The y position on the page
    // pdf.text(1000,20+finalY, 'Total items:'+dat.rows.length)
    // pdf.text('Notes:'+this.ty,50,20+finalY);
    // doc.rect(data.settings.margin.left, row.y, data.table.width, 20, 'F');   //'S'(with border)
    //       var doc = new jsPDF();
    //       doc.text("From HTML", 14, 16);
    //       var elem = document.getElementById("sun");
    //       var res = doc.autoTableHtmlToJson(elem);
    //       doc.autoTable(res.columns, res.data, {startY: 20});
    //       doc.save('costchangesitem.pdf');
    //       var doc = new jsPDF();
    // var source = window.document.getElementById("ty");
    //     doc.fromHTML(source, 0.5,0.5, {
    //       'width': 500
    //       })
    // doc.save("Test.pdf");
    //3
    // var doc = new jsPDF();
    // var specialElementHandlers = {
    //    '#ignorePDF': function(element, renderer){
    //     return true;
    //  }
    // };
    // var source = window.document.getElementById("ty");
    //  doc.fromHTML(source, 0.5,0.5, {
    //    'width': 500,
    //    'elementHandlers': specialElementHandlers
    // })
    // doc.save("Test.pdf");
    //4
    // var imgData = '';
    // var doc = new jsPDF();
    // doc.setFontSize(40)
    // doc.text(35, 25, 'Paranyan loves jsPDF')
    // doc.addImage(imgData, 'JPEG', 15, 40, 180, 160)
    // }
    //     }

    //   doc.ellipse(40, 20, 10, 5);
    // doc.setFillColor(0,0,255);
    // doc.ellipse(80, 20, 10, 5, 'F');
    // doc.setLineWidth(1);
    // doc.setDrawColor(0);
    // doc.setFillColor(255,0,0);
    // doc.circle(120, 20, 5, 'FD');
    //    doc.setLineWidth(1.5);
    // doc.line(20, 35, 60, 35);
    // doc.setDrawColor(255,0,0); // draw red lines
    //   doc.setDrawColor(0);
    // doc.setFillColor(255,0,0);
    // doc.rect(120, 20, 10, 10, 'FD');
    // // Black square with rounded corners
    // doc.setDrawColor(0);
    // doc.setFillColor(255, 255, 255);
    // doc.roundedRect(140, 20, 10, 10, 3, 3, 'FD');
    /*
     * Let's demonstrate string splitting with the first page of Shakespeare's Romeo and Juliet!
     * We'll use a 8.5 x 11 inch sheet, measuring everything in inches.
     */
    // var pageWidth = 8.5,
    // 	lineHeight = 1.2,
    // 	margin = 0.5,
    // 	maxLineWidth = pageWidth - margin * 2,
    // 	fontSize = 24,
    // 	ptsPerInch = 72,
    // 	oneLineHeight = fontSize * lineHeight / ptsPerInch,
    // 	text = 'Two households, both alike in dignity,\n' +
    // 		'In fair Verona, where we lay our scene,\n' +
    // 		'From ancient grudge break to new mutiny,\n' +
    // 		'Where civil blood makes civil hands unclean.\n' +
    // 		'From forth the fatal loins of these two foes\n' +
    // 		'A pair of star-cross\'d lovers take their life;\n' +
    // 		'Whole misadventured piteous overthrows\n' +
    // 		'Do with their death bury their parents\' strife.\n' +
    // 		'The fearful passage of their death-mark\'d love,\n' +
    // 		'And the continuance of their parents\' rage,\n' +
    // 		// Notice that the following will be wrapped to two lines automatically!
    // 		'Which, but their children\'s end, nought could remove, Is now the two hours\' traffic of our stage;\n' +
    // 		'The which if you with patient ears attend,\n' +
    // 		'What here shall miss, our toil shall strive to mend.',
    // 	doc = new jsPDF({
    // 		unit: 'in',
    // 		lineHeight: lineHeight
    // 	}).setProperties({ title: 'String Splitting' });
    // // splitTextToSize takes your string and turns it in to an array of strings,
    // // each of which can be displayed within the specified maxLineWidth.
    // var textLines = doc
    // 	.setFont('helvetica', 'neue')
    // 	.setFontSize(fontSize)
    // 	.splitTextToSize(text, maxLineWidth);
    // // doc.text can now add those lines easily; otherwise, it would have run text off the screen!
    // doc.text(textLines, margin, margin + 2 * oneLineHeight);
    // // You can also calculate the height of the text very simply:
    // var textHeight = textLines.length * fontSize * lineHeight / ptsPerInch;
    // doc
    // 	.setFontStyle('bold')
    // 	.text('Text Height: ' + textHeight + ' inches', margin, margin + oneLineHeight);
    //  <div id="ty">
    //     ASDSADASDASDSA
    //     <div>
    //       <p id="ignorePDF">don't print this to pdf</p>
    //       <p><font size="3" color="red">print this to pdf</font></p>
    //     </div>
    //   </div>
    //   var faker = window.faker;
    // var base64Img = null;
    // var examples = {};
    // // Default - shows what a default table looks like
    // examples.auto = function () {
    //     var doc = new jsPDF();
    //     doc.autoTable(getColumns(), getData());
    //     return doc;
    // };
    // // Minimal - shows how compact tables can be drawn
    // examples.minimal = function () {
    //     var doc = new jsPDF();
    //     doc.autoTable(getColumns(), getData(), {
    //         tableWidth: 'wrap',
    //         styles: {cellPadding: 0.5, fontSize: 8}
    //     });
    //     return doc;
    // };
    // // Long data - shows how the overflow features looks and can be used
    // examples.long = function () {
    //     var doc = new jsPDF('l');
    //     var columnsLong = getColumns().concat([
    //         {title: "Title with\nlinebreak", dataKey: "text2"},
    //         {title: "Long text column", dataKey: "text"},
    //     ]);
    //     doc.text(7, 15, "Overflow 'ellipsize' (default)");
    //     doc.autoTable(columnsLong, getData(), {
    //         startY: 20,
    //         margin: {horizontal: 7},
    //         styles: {columnWidth: 'wrap'},
    //         columnStyles: {text: {columnWidth: 'auto'}}
    //     });
    //     doc.text("Overflow 'hidden'", 7, doc.autoTable.previous.finalY + 10);
    //     doc.autoTable(columnsLong, getData(), {
    //         startY: doc.autoTable.previous.finalY + 15,
    //         margin: {horizontal: 7},
    //         styles: {overflow: 'hidden', columnWidth: 'wrap'},
    //         columnStyles: {text: {columnWidth: 'auto'}}
    //     });
    //     doc.text("Overflow 'linebreak'", 7, doc.autoTable.previous.finalY  + 10);
    //     doc.autoTable(columnsLong, getData(3), {
    //         startY: doc.autoTable.previous.finalY + 15,
    //         margin: {horizontal: 7},
    //         bodyStyles: {valign: 'top'},
    //         styles: {overflow: 'linebreak', columnWidth: 'wrap'},
    //         columnStyles: {text: {columnWidth: 'auto'}}
    //     });
    //     return doc;
    // };
    // // Content - shows how tables can be integrated with any other pdf content
    // examples.content = function () {
    //     var doc = new jsPDF();
    //     doc.setFontSize(18);
    //     doc.text('A story about a person', 14, 22);
    //     doc.setFontSize(11);
    //     doc.setTextColor(100);
    //     var pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth();
    //     var text = doc.splitTextToSize(shuffleSentence(faker.lorem.words(55)) + '.', pageWidth - 35, {});
    //     doc.text(text, 14, 30);
    //     var cols = getColumns();
    //     cols.splice(0, 2);
    //     doc.autoTable(cols, getData(40), {startY: 50, showHeader: 'firstPage'});
    //     doc.text(text, 14, doc.autoTable.previous.finalY + 10);
    //     return doc;
    // };
    // // Multiple - shows how multiple tables can be drawn both horizontally and vertically
    // examples.multiple = function () {
    //     var doc = new jsPDF();
    //     doc.setFontSize(22);
    //     doc.text("Multiple tables", 14, 20);
    //     doc.setFontSize(12);
    //     doc.autoTable(getColumns(), getData(10), {startY: 30});
    //     let first = doc.autoTable.previous;
    //     doc.autoTable(getColumns().slice(0, 2), getData(30), {
    //         startY: first.finalY + 10,
    //         showHeader: 'firstPage',
    //         margin: {right: 107}
    //     });
    //     // Reset page to the same as before previous table
    //     doc.setPage(1 + doc.internal.getCurrentPageInfo().pageNumber - doc.autoTable.previous.pageCount);
    //     doc.autoTable(getColumns().slice(0, 2), getData(30), {
    //         startY: first.finalY + 10,
    //         showHeader: 'firstPage',
    //         margin: {left: 107}
    //     });
    //     for (var j = 0; j < 6; j++) {
    //         doc.autoTable(getColumns(), getData(9), {
    //             startY: doc.autoTable.previous.finalY + 10,
    //             pageBreak: 'avoid',
    //         });
    //     }
    //     return doc;
    // };
    // // From html - shows how pdf tables can be be drawn from html tables
    // examples.html = function () {
    //     var doc = new jsPDF();
    //     doc.text("From HTML", 14, 16);
    //     var elem = document.getElementById("basic-table");
    //     var res = doc.autoTableHtmlToJson(elem);
    //     doc.autoTable(res.columns, res.data, {startY: 20});
    //     return doc;
    // };
    // // Header and footers - shows how header and footers can be drawn
    // examples['header-footer'] = function () {
    //     var doc = new jsPDF();
    //     var totalPagesExp = "{total_pages_count_string}";
    //     var pageContent = function (data) {
    //         // HEADER
    //         doc.setFontSize(20);
    //         doc.setTextColor(40);
    //         doc.setFontStyle('normal');
    //         if (base64Img) {
    //             doc.addImage(base64Img, 'JPEG', data.settings.margin.left, 15, 10, 10);
    //         }
    //         doc.text("Report", data.settings.margin.left + 15, 22);
    //         // FOOTER
    //         var str = "Page " + data.pageCount;
    //         // Total page number plugin only available in jspdf v1.0+
    //         if (typeof doc.putTotalPages === 'function') {
    //             str = str + " of " + totalPagesExp;
    //         }
    //         doc.setFontSize(10);
    //         var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    //         doc.text(str, data.settings.margin.left, pageHeight  - 10);
    //     };
    //     doc.autoTable(getColumns(), getData(40), {
    //         addPageContent: pageContent,
    //         margin: {top: 30}
    //     });
    //     // Total page number plugin only available in jspdf v1.0+
    //     if (typeof doc.putTotalPages === 'function') {
    //         doc.putTotalPages(totalPagesExp);
    //     }
    //     return doc;
    // };
    // // Minimal - shows how compact tables can be drawn
    // examples.defaults = function () {
    //     // Global defaults
    //     jsPDF.autoTableSetDefaults({
    //         columnStyles: {id: {fontStyle: 'bold'}},
    //         headerStyles: {fillColor: 0},
    //     });
    //     var doc = new jsPDF();
    //     // Document defaults
    //     doc.autoTableSetDefaults({
    //         headerStyles: {fillColor: [155, 89, 182]}, // Purple
    //         margin: {top: 25},
    //         addPageContent: function(data) {
    //             doc.setFontSize(20);
    //             doc.text('Document specific header', data.settings.margin.left, 20);
    //         }
    //     });
    //     doc.autoTable(getColumns(), getData());
    //     doc.addPage();
    //     doc.autoTable(getColumns(), getData(), {
    //         // Will override document and global headerStyles
    //         headerStyles: {fillColor: [231, 76, 60]} // Red
    //     });
    //     // Reset defaults
    //     doc.autoTableSetDefaults(null);
    //     jsPDF.autoTableSetDefaults(null);
    //     return doc;
    // };
    // // Horizontal - shows how tables can be drawn with horizontal headers
    // examples.horizontal = function () {
    //     var doc = new jsPDF();
    //     doc.autoTable(getColumns().splice(1, 4), getData(), {
    //         showHeader: 'never',
    //         columnStyles: {
    //             name: {fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold'}
    //         }
    //     });
    //     return doc;
    // };
    // // Custom style - shows how custom styles can be applied to tables
    // examples.spans = function () {
    //     var doc = new jsPDF('p', 'pt');
    //     doc.setFontSize(12);
    //     doc.setTextColor(0);
    //     doc.setFontStyle('bold');
    //     doc.text('Col and row span', 40, 50);
    //     var data = getData(80);
    //     data.sort(function (a, b) {
    //         return parseFloat(b.expenses) - parseFloat(a.expenses);
    //     });
    //     doc.autoTable(getColumns(), data, {
    //         theme: 'grid',
    //         startY: 60,
    //         drawRow: function (row, data) {
    //             // Colspan
    //             doc.setFontStyle('bold');
    //             doc.setFontSize(10);
    //             if (row.index === 0) {
    //                 doc.setTextColor(200, 0, 0);
    //                 doc.rect(data.settings.margin.left, row.y, data.table.width, 20, 'S');
    //                 doc.autoTableText("Priority Group", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
    //                     halign: 'center',
    //                     valign: 'middle'
    //                 });
    //                 data.cursor.y += 20;
    //             } else if (row.index === 5) {
    //                 doc.rect(data.settings.margin.left, row.y, data.table.width, 20, 'S');
    //                 doc.autoTableText("Other Groups", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
    //                     halign: 'center',
    //                     valign: 'middle'
    //                 });
    //                 data.cursor.y += 20;
    //             }
    //             if (row.index % 5 === 0) {
    //                 var posY = row.y + row.height * 6 + data.settings.margin.bottom;
    //                 var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    //                 if (posY > pageHeight) {
    //                     data.addPage();
    //                 }
    //             }
    //         },
    //         drawCell: function (cell, data) {
    //             // Rowspan
    //             if (data.column.dataKey === 'id') {
    //                 if (data.row.index % 5 === 0) {
    //                     doc.rect(cell.x, cell.y, data.table.width, cell.height * 5, 'S');
    //                     doc.autoTableText(data.row.index / 5 + 1 + '', cell.x + cell.width / 2, cell.y + cell.height * 5 / 2, {
    //                         halign: 'center',
    //                         valign: 'middle'
    //                     });
    //                 }
    //                 return false;
    //             }
    //         }
    //     });
    //     return doc;
    // };
    // // Themes - shows how the different themes looks
    // examples.themes = function () {
    //     var doc = new jsPDF();
    //     doc.setFontSize(12);
    //     doc.setFontStyle('bold');
    //     doc.text('Theme "striped"', 14, 16);
    //     doc.autoTable(getColumns(), getData(), {startY: 20});
    //     doc.text('Theme "grid"', 14, doc.autoTable.previous.finalY + 10);
    //     doc.autoTable(getColumns(), getData(), {startY: doc.autoTable.previous.finalY + 14, theme: 'grid'});
    //     doc.text('Theme "plain"', 14, doc.autoTable.previous.finalY + 10);
    //     doc.autoTable(getColumns(), getData(), {startY: doc.autoTable.previous.finalY + 14, theme: 'plain'});
    //     return doc;
    // };
    // // Custom style - shows how custom styles can be applied to tables
    // examples.custom = function () {
    //     var doc = new jsPDF();
    //     doc.autoTable(getColumns().slice(1, 5), getData(20), {
    //         tableLineColor: [189, 195, 199],
    //         tableLineWidth: 0.75,
    //         styles: {
    //             font: 'courier',
    //             lineColor: [44, 62, 80],
    //             lineWidth: 0.75
    //         },
    //         headerStyles: {
    //             fillColor: [44, 62, 80],
    //             fontSize: 15
    //         },
    //         bodyStyles: {
    //             fillColor: [52, 73, 94],
    //             textColor: 240
    //         },
    //         alternateRowStyles: {
    //             fillColor: [74, 96, 117]
    //         },
    //         columnStyles: {
    //             email: {
    //                 fontStyle: 'bold'
    //             }
    //         },
    //         /*parsedInput: function (cell, data) {
    //             if (data.column.dataKey === 'expenses') {
    //                 cell.styles.halign = 'right';
    //                 if (cell.raw > 600) {
    //                     cell.styles.textColor = [255, 100, 100];
    //                     cell.styles.fontStyle = 'bolditalic';
    //                 }
    //                 cell.text = '$' + cell.text;
    //             } else if (data.column.dataKey === 'name') {
    //                 cell.text = cell.raw.split(' ')[0]; // only first name
    //             }
    //         }*/
    //     });
    //     return doc;
    // };
    // /*
    //  |--------------------------------------------------------------------------
    //  | Below is some helper functions for the examples
    //  |--------------------------------------------------------------------------
    //  */
    // // Returns a new array each time to avoid pointer issues
    // var getColumns = function () {
    //     return [
    //         {title: "ID", dataKey: "id"},
    //         {title: "Name", dataKey: "name"},
    //         {title: "Email", dataKey: "email"},
    //         {title: "City", dataKey: "city"},
    //         {title: "Expenses", dataKey: "expenses"}
    //     ];
    // };
    // // Uses the faker.js library to get random data.
    // function getData(rowCount) {
    //     rowCount = rowCount || 4;
    //     //var sentence = "Minima quis totam nobis nihil et molestiae architecto accusantium qui necessitatibus sit ducimus cupiditate qui ullam et aspernatur esse et dolores ut voluptatem odit quasi ea sit ad sint voluptatem est dignissimos voluptatem vel adipisci facere consequuntur et reprehenderit cum unde debitis ab cumque sint quo ut officiis rerum aut quia quia expedita ut consectetur animiqui voluptas suscipit Monsequatur";
    //     var sentence = faker.lorem.words(20);
    //     var data = [];
    //     for (var j = 1; j <= rowCount; j++) {
    //         data.push({
    //             id: j,
    //             name: faker.name.findName(),
    //             email: faker.internet.email(),
    //             country: faker.address.country(),
    //             city: faker.address.city(),
    //             expenses: faker.finance.amount(),
    //             text: shuffleSentence(sentence),
    //             text2: faker.lorem.words(1)
    //         });
    //     }
    //     return data;
    // }
    // function shuffleSentence(words) {
    //     if (typeof words === 'string') return words;
    //     words = words || faker.lorem.words(8);
    //     var str = faker.helpers.shuffle(words).join(' ').trim();
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    // }
    // imgToBase64('document.jpg', function(base64) {
    //     base64Img = base64;
    // });
    // // You could either use a function similar to this or pre convert an image with for example http://dopiaza.org/tools/datauri
    // // https://stackoverflow.com/a/20285053/827047
    // function imgToBase64(src, callback) {
    //     var outputFormat = src.substr(-3) === 'png' ? 'image/png' : 'image/jpeg';
    //     var img = new Image();
    //     img.crossOrigin = 'Anonymous';
    //     img.onload = function() {
    //         var canvas = document.createElement('CANVAS');
    //         var ctx = canvas.getContext('2d');
    //         var dataURL;
    //         canvas.height = this.naturalHeight;
    //         canvas.width = this.naturalWidth;
    //         ctx.drawImage(this, 0, 0);
    //         dataURL = canvas.toDataURL(outputFormat);
    //         callback(dataURL);
    //     };
    //     img.src = src;
    //     if (img.complete || img.complete === undefined) {
    //         img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    //         img.src = src;
    //     }
    // }

  }

  samplepdf() {



    //  var columns = ["ID", "Name", "Country"];
    //   var rows = [
    //       [1, "Shaw", "Tanzania"],
    //       [2, "Nelson", "Kazakhstan"],
    //       [3, "Garcia", "Madagascar"],
    //   ];

    //   // Only pt supported (not mm or in)
    //   var pdf = new jsPDF('p', 'pt');

    //    var name = prompt('What is your name?');
    // var multiplier = parseInt(prompt('Enter a number:'));

    // var doc = new jsPDF();
    // doc.setFontSize(22);
    // doc.text(20, 20, 'Questions');
    // doc.setFontSize(16);
    // doc.text(20, 30, 'This belongs to: ' + name);

    // for(var i = 1; i <= 12; i ++) {
    // 	doc.text(20, 30 + (i * 10), i + ' x ' + multiplier + ' = ___');
    // }

    // doc.addPage();
    // doc.setFontSize(22);
    // doc.text(20, 20, 'Answers');
    // doc.setFontSize(16);

    // for(var i = 1; i <= 12; i ++) {
    // 	doc.text(20, 30 + (i * 10), i + ' x ' + multiplier + ' = ' + (i * multiplier));
    // }

    // // You wouldn't normally call this - this is just to make the
    // // demo not look broken as we've disabled auto update.
    // if (jsPDFEditor !== undefined) {
    // 	jsPDFEditor.update(true);
    // }

    //  doc.save('Test.pdf');

    // var doc = new jsPDF();//{unit: 'px'}

    // doc.setFontSize(12);
    // doc.text(10, 105, 'ComboBox:');

    // var d = new ComboBox();
    // d.T = "ChoiceField1";
    // d.TI = 1;
    // d.Rect = [50, 100, 30, 10];
    // d.Opt = "[(a)(b)(c)]";
    // d.V = '(b)';
    // d.DV = '(b)';
    // doc.addField(d);

    // doc.text(10, 115, 'ListBox:');
    // var d2 = new ListBox();
    // d2.edit = false;
    // d2.T = "ChoiceField2";
    // d2.TI = 2;
    // d2.Rect = [50, 110, 30, 10];
    // d2.Opt = "[(c)(a)(d)(f)(b)(s)]";
    // d2.V = '(s)';
    // d2.BG = [0, 1, 1];
    // doc.addField(d2);

    // doc.text(10, 125, 'CheckBox:');
    // var checkBox = new CheckBox();
    // checkBox.T = "CheckBox1";
    // checkBox.Rect = [50, 120, 30, 10];
    // doc.addField(checkBox);

    // doc.text(10, 135, 'PushButton:');
    // var pushButton = new PushButton();
    // pushButton.T = "PushButton1";
    // pushButton.Rect = [50, 130, 30, 10];
    // pushButton.BG = [1, 0, 0];
    // doc.addField(pushButton);

    // doc.text(10, 145, 'TextField:');
    // var textField = new TextField();
    // textField.Rect = [50, 140, 30, 10];
    // textField.multiline = true;
    // textField.V = "The quick brown fox ate the lazy mouse The quick brown fox ate the lazy mouse The quick brown fox ate the lazy mouse";//
    // textField.T = "TestTextBox";
    // //textField.Q = 2; // Text-Alignment
    // doc.addField(textField);

    // doc.text(10, 155, 'Password:');
    // var passwordField = new PasswordField();
    // passwordField.Rect = [50, 150, 30, 10];
    // doc.addField(passwordField);

    // doc.text(50, 165, 'RadioGroup:');
    // var radioGroup = new RadioButton();
    // radioGroup.V = "/Test";
    // radioGroup.Subtype = "Form";

    // doc.addField(radioGroup);

    // var radioButton1 = radioGroup.createOption("Test");
    // radioButton1.Rect = [50, 170, 30, 10];
    // radioButton1.AS = "/Test";

    // var radioButton2 = radioGroup.createOption("Test2");
    // radioButton2.Rect = [50, 180, 30, 10];

    // var radioButton3 = radioGroup.createOption("Test3");
    // radioButton3.Rect = [50, 190, 20, 10];

    // radioGroup.setAppearance(AcroForm.Appearance.RadioButton.Cross);
    // doc.save('Test.pdf');
    // Set the document to automatically print via JS
    // doc.autoPrint()
  }

  simple() {
    // var doc = new jsPDF(orientation, unit, format, compress)
    // orientation - The default value for orientation is "portrait". We can set it to "landscape" if we want a different page orientation.  ("l","p")
    // unit - We can tell jsPDF in which units we want to work. Use one of the following: "pt" (points), "mm" (default), "cm", "in".
    // format - It's default page format. It can be "a3", "a4" (default), "a5", "letter", "legal".

    const doc = new jspdf.jsPDF();
    doc.text("Hello world!", 10, 10);

    // to add page number
    (doc as any).page = 0;

    autoTable(doc, {
      head: (this.cols),
      body: this.rows2,
      styles: { fillColor: [100, 255, 255] },
      //  columnStyles: {id: {fillColor: 255}},  //here id is column name
      //or
      //     columnStyles: {
      // id: {fillColor: [41, 128, 185],
      //                textColor: 255,
      //               fontStyle: 'bold'}} ,
      //or
      columnStyles: {
        1: { cellWidth: 'auto',  overflow: 'linebreak' },  //here u can replace auto with any value like 100, 200 // columnWidth ->cellWidth

      },

      margin: { horizontal: 10, top: 40, bottom: 40, right: 107 },
      startY: 370,
      // overflowColumns: false,
      headStyles: { fillColor: [12, 234, 227] },  //headerStyles -> headStyles
      bodyStyles:
      {
          lineColor: [0, 0, 0]

      },
      didDrawPage: function (data) {  // addPageContent -> didDrawPage
        (doc as any).page++;
        doc.text(`${(doc as any).page}`, 40, 30);
        doc.text('This is centred text.', 105, 80, { align: 'right' });  //'center'
        doc.text('10 degrees rotated', 20, 140, null ,10);
        doc.setFontSize(25);
        doc.setTextColor(255, 0, 0);
                // console.log(doc.internal.getNumberOfPages(), 'doc.internal.getNumberOfPages()');
        // console.log(doc.autoTable.previous.finalY, 'doc.autoTable.previous.finalY // The y position on the page');
        // console.log(doc.internal.pages, 'doc.internal.pages');
        // console.log(doc.internal.getCurrentPageInfo().pageNumber, 'doc.internal.getCurrentPageInfo().pageNumber //get total number of pages');
        // console.log(data.settings.margin.left, 'data.settings.margin.left');
        // console.log(doc.internal.pageSize.height, 'pdf.internal.pageSize.height');
        // console.log(doc.internal.pageSize.width, 'doc.internal.pageSize.width ');
            // console.log(doc.autoTable.previous, "doc.autoTable.previous");
    // console.log(
    //   doc.autoTable.previous.pageCount,
    //   "doc.autoTable.previous.pageCount"
    // );
        // doc.addImage(imgData, 'JPEG', 0, 0, width, height);
        // doc.triangle(100, 100, 110, 100, 120, 130, 'FD');
        //  doc.getFontList();
        // -doc.setFont("helvetica");
        // -doc.setFontType("bold");
        //doc.addPage(width?, height?);
        // -doc.setPage(pageNumber);
      },
      didParseCell : function(cell) {
      console.log(cell, cell.row.index, cell.cell.styles.textColor, cell.column.index, cell.row.raw )
      cell.cell.styles.textColor = '#000000';
      cell.cell.styles.fillColor = '#ef3952';
      cell.cell.styles.fontStyle = 'bold';
      cell.cell.styles.halign='center';
      cell.cell.styles.valign='middle';
      cell.cell.styles.fontSize= 15;
      // let hex = cell.raw.color;
      // if (hex) {
      //   let rgb = this.hexToRgb(hex);
        // cell.styles.fillColor = rgb;
        // cell.text = cell.raw.code;
      // }
    },
      // drawCell: function (data) {
          // const rows = data.table.rows;
          // if (data) {
          //     //   pdf.setFillColor(255, 0, 0);
          //     doc.setTextColor(654, 0, 0);
          // }
      // }

    // drawHeaderRow: function(row, data) {
    //                      row.height = 46;
    //                     },

    // drawRow: function (row, data) {
    //              // Colspan
    //              doc.setFontStyle('bold');
    //              doc.setFontSize(10);
    //              if (row.index === 0) {
    //                  doc.setTextColor(200, 0, 0);
    //                  doc.rect(data.settings.margin.left, row.y, data.table.width, 20, 'S');
    //                  doc.autoTableText("Priority Group", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
    //                      halign: 'center',
    //                       valign: 'middle'
    //                  });
    //                  data.cursor.y += 20;
    //              } else if (row.index === 5) {
    //                  doc.rect(data.settings.margin.left, row.y, data.table.width, 20, 'S');
    //                  doc.autoTableText("Other Groups", data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
    //                      halign: 'center',
    //                      valign: 'middle'
    //                  });
    //                  data.cursor.y += 20;
    //              }
    //              if (row.index % 5 === 0) {
    //                  var posY = row.y + row.height * 6 + data.settings.margin.bottom;
    //                  if (posY > doc.internal.pageSize.height) {
    //                      data.addPage();
    //                  }
    //              }
    //          },
    //  drawRow: function (row, data) {
    //                                 console.log(row.raw[0].innerHTML);
    //                                 // Colspan
    //                                 pdf.setFontStyle('bold');
    //                                 pdf.setFontSize(10);
    //                                 if (row.index == 0 ) {
    //                                     pdf.setTextColor(200, 0, 0);
    //                                     pdf.rect(data.settings.margin.left, row.y, data.table.width, 20, 'F');
    //                                     pdf.autoTableText(row.raw[0].innerHTML, data.settings.margin.left + data.table.width / 2, row.y + row.height / 2, {
    //                                         halign: 'center',
    //                                          valign: 'middle'
    //                                     });
    //                                     data.cursor.y += 20;
    //                                 }},
    });
    doc.save("a4.pdf");
  }

  hexToRgb(hex) {
    var bigint = parseInt(hex.replace("#", ""), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return [r, g, b];
  }

}
