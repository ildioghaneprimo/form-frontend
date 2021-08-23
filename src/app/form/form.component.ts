import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompilazioniService } from '../compilazioni.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  sex = this.utils.sex;

  formAtleta: any;

  constructor(
    private compilazioni: CompilazioniService,
    private utils: UtilsService,
    private router: Router
  ) {}

  initForm() {
    this.formAtleta = new FormGroup({
      nomeAtleta: new FormControl('', [Validators.required]),
      cognomeAtleta: new FormControl('', [Validators.required]),
      nascitaAtleta: new FormControl('', [Validators.required]),
      luogoNascitaAtleta: new FormControl('', [Validators.required]),
      provNascitaAtleta: new FormControl('', [Validators.required]),
      sessoAtleta: new FormControl('', [Validators.required]),
      indirizzoAtleta: new FormControl('', [Validators.required]),
      civicoAtleta: new FormControl('', [Validators.required]),
      capAtleta: new FormControl('', [Validators.required]),
      comuneAtleta: new FormControl('', [Validators.required]),
      provAtleta: new FormControl('', [Validators.required]),
      codfiscAtleta: new FormControl('', [Validators.required]),
      cittadinanzaAtleta: new FormControl('', [Validators.required]),
      nazAtleta: new FormControl('', [Validators.required]),
      scuolaAtleta: new FormControl('', [Validators.required]),
      classeAtleta: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.initForm();
  }

  submit() {
    console.log(this.formAtleta.value);
    this.compilazioni.datiTemporanei = this.formAtleta.value;
    this.router.navigate(['genitore']);
  }
}
