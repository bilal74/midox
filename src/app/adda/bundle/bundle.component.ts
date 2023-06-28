import { Component } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";  
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-bundle',
  templateUrl: './bundle.component.html',
  styleUrls: ['./bundle.component.scss']
})
export class BundleComponent {
  exportPdf(): void {

    const docDefinition:any = {
    
      content: [
        { text: "Tables", style: "header" },
        "Official documentation is in progress, this document is just a glimpse of what is possible with pdfmake and its layout engine.",
        {
          text:
            "A simple table (no headers, no width specified, no spans, no styling)",
          style: "subheader"
        },
        "The following table has nothing more than a body array",
        {
          style: "tableExample",
          table: {
            body: [
              ["Column 1", "Column 2", "Column 3"],
              ["One value goes here", "Another one here", "OK?"]
            ]
          }
        }
      ],

      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        },
        subheader: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 15]
        }
      }
    };

    pdfMake.createPdf(docDefinition).download("test.pdf");
  }
}
