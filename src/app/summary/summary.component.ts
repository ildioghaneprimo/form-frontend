import { Component, OnInit } from '@angular/core';
import { CompilazioniService } from '../compilazioni.service';
const moment = require('moment');

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
}
