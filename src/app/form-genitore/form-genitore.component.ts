import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompilazioniService } from '../compilazioni.service';
import { UtilsService } from '../utils.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-genitore',
  templateUrl: './form-genitore.component.html',
  styleUrls: ['./form-genitore.component.css'],
  providers: [ConfirmationService, MessageService],
})
export class FormGenitoreComponent implements OnInit {
  formGenitore: any;
  showLoading: boolean = false;

  sex = this.utils.sex;

  constructor(
    private compilazioni: CompilazioniService,
    private utils: UtilsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  initForm() {
    this.formGenitore = new FormGroup({
      nomeGenitore: new FormControl('', [Validators.required]),
      cognomeGenitore: new FormControl('', [Validators.required]),
      nascitaGenitore: new FormControl('', [Validators.required]),
      luogoNascitaGenitore: new FormControl('', [Validators.required]),
      provNascitaGenitore: new FormControl('', [Validators.required]),
      sessoGenitore: new FormControl('', [Validators.required]),
      indirizzoGenitore: new FormControl('', [Validators.required]),
      civicoGenitore: new FormControl('', [Validators.required]),
      capGenitore: new FormControl('', [Validators.required]),
      comuneGenitore: new FormControl('', [Validators.required]),
      provGenitore: new FormControl('', [Validators.required]),
      codfiscGenitore: new FormControl('', [Validators.required]),
      cittadinanzaGenitore: new FormControl('', [Validators.required]),
      nazGenitore: new FormControl('', [Validators.required]),
      emailGenitore: new FormControl('', [Validators.required]),
      telefonoGenitore: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  submit() {
    this.confirmationService.confirm({
      message: this.utils.confirmationMessage,
      accept: () => {
        this.showLoading = true;
        var submission = {
          ...this.compilazioni.datiTemporanei,
          ...this.formGenitore.value,
        };
        console.log(submission);
        this.compilazioni.addSubmission(submission).subscribe(
          (response) => {
            console.log(response);
            this.messageService.add({
              severity: 'success',
              summary: 'Operazione Eseguita',
              detail: 'Modulo inviato correttamente',
            });
          },
          (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Errore',
              detail: 'Si è verificato un errore',
            });
          },
          () => {
            this.showLoading = false;
          }
        );
      },
    });
  }
}
