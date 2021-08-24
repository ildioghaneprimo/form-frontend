import { Component, OnInit } from '@angular/core';
import { CompilazioniService } from '../compilazioni.service';
const moment = require('moment');
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';
import domtoimage from 'dom-to-image';
const { jsPDF } = require('jspdf');

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent implements OnInit {
  showLoading: boolean = false;

  compilazioni: any[] = [];
  selectedComp: any;
  showInfo: boolean = false;
  hidden: boolean = true;

  constructor(private compilazioniService: CompilazioniService) {}

  getAll() {
    this.showLoading = true;
    this.compilazioniService.getAll().subscribe((response: any) => {
      this.compilazioni = response;
      console.log(this.compilazioni);
      this.showLoading = false;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  info(compilazione: any) {
    this.selectedComp = compilazione;
    this.showInfo = true;
  }

  formatDate(dateOriginal: any) {
    return moment(dateOriginal).format('DD/MM/YYYY');
  }

  saveFile() {
    var node = document.getElementById('datiAtleta');

    var img: HTMLImageElement;
    var filename;
    var newImage: string;
    var selectedComp = this.selectedComp;

    if (node != null)
      domtoimage
        .toPng(node, { bgcolor: '#fff' })

        .then(function (dataUrl) {
          img = new Image();
          img.src = dataUrl;
          newImage = img.src;

          img.onload = function () {
            var pdfWidth = img.width;
            var pdfHeight = img.height;

            var doc;

            if (pdfWidth > pdfHeight) {
              doc = new jsPDF('l', 'px', [pdfWidth, pdfHeight]);
            } else {
              doc = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
            }

            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();

            doc.addImage(newImage, 'PNG', 10, 10, width, height);
            filename =
              selectedComp.nomeAtleta +
              '_' +
              selectedComp.cognomeAtleta +
              '.pdf';
            doc.save(filename);
          };
        })
        .catch(function (error) {
          // Error Handling
        });
  }
}
