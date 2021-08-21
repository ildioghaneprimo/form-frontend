import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompilazioniService } from '../compilazioni.service';

@Component({
  selector: 'app-form-genitore',
  templateUrl: './form-genitore.component.html',
  styleUrls: ['./form-genitore.component.css']
})
export class FormGenitoreComponent implements OnInit {

  formGenitore: any;

  sex = ['Maschio', 'Femmina', 'Non specifico']


  constructor(private compilazioni: CompilazioniService) { }

  initForm() {
    this.formGenitore = new FormGroup(
      {
        nomeGenitore: new FormControl("", [Validators.required]),
        cognomeGenitore: new FormControl("", [Validators.required]),
        nascitaGenitore: new FormControl("", [Validators.required]),
        luogoNascitaGenitore: new FormControl("", [Validators.required]),
        provNascitaGenitore: new FormControl("", [Validators.required]),
        sessoGenitore: new FormControl("", [Validators.required]),
        indirizzoGenitore: new FormControl("", [Validators.required]),
        civicoGenitore: new FormControl("", [Validators.required]),
        capGenitore: new FormControl("", [Validators.required]),
        comuneGenitore: new FormControl("", [Validators.required]),
        provGenitore: new FormControl("", [Validators.required]),
        codfiscGenitore: new FormControl("", [Validators.required]),
        cittadinanzaGenitore: new FormControl("", [Validators.required]),
        nazGenitore: new FormControl("", [Validators.required]),
        emailGenitore: new FormControl("", [Validators.required]),
        telefonoGenitore: new FormControl("", [Validators.required])
      }
    )
  }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    var submission = {...this.compilazioni.datiTemporanei, ...this.formGenitore.value};
    console.log(submission);
    this.compilazioni.addSubmission(submission).subscribe(
      (response)=>{
        console.log(response);
      }
    )
  }


}
