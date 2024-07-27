import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SetupSmsService } from '../services/setupSms.service';
import { SetupSmsModel } from '../models/setupSms.model';

@Component({
  selector: 'app-setup-Sms',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatError,
    MatFormField,    
    MatLabel,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './setup-Sms.component.html',
  styleUrl: './setup-Sms.component.scss'
})
export class SetupSmsComponent {
  setupSmsForm!: FormGroup;
  idConfiguracao: string | null = null;
  idSetupSms: number | null = null;

  constructor(
    private fb: FormBuilder,
    private form: FormBuilder,
    private route: ActivatedRoute,
    private setupSmsService: SetupSmsService,
    private snackBar: MatSnackBar,
  ) { 
    this.setupSmsForm = this.fb.group({
      provedorSms: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idConfiguracao = params.get('idConfiguracao');
    });

    if(this.idConfiguracao != "null"){
      this.setupSmsService.GetById(parseInt(this.idConfiguracao ?? "", 10)).subscribe(
        (setup: SetupSmsModel) => {
          if(setup){
            this.idSetupSms = setup.idSetupSMS ?? null;
            this.setupSmsForm.patchValue({
              provedorSms: setup.provedorSMS,
              login: setup.login,
              senha: setup.senha
            });
          }
          else{
            this.snackBar.open("Não foram localizadas configurações para essa seção.", "Fechar")
          }
        },
        error => {
          console.error('Erro na operação', error);
        }
      )
    }
  }

  salvar() {
    if (this.setupSmsForm.valid) {
    if(this.idSetupSms == null){
      let model = this.preencherModel();
      debugger

      this.setupSmsService.Post(model).subscribe(
        (idConfiguracao: number) => {
          if(idConfiguracao){
            this.snackBar.open("Salvo com sucesso.", "Fechar")
          }
          else{
            this.snackBar.open("Erro ao salvar.", "Fechar")
          }
        },
        error => {
          console.error('Erro na operação', error);
          this.snackBar.open("Erro ao salvar.", "Fechar")
        }
      )}
      else{
        if(this.idSetupSms){
          this.snackBar.open("A edição de dados será disponibilizada no futuro.", "Fechar")
        }
      }
    }
  }

  preencherModel(){
    const setupModel: SetupSmsModel = {
      idConfiguracao: parseInt(this.idConfiguracao ?? "", 10),
      provedorSMS: this.setupSmsForm.get('provedorSms')?.value ?? '',
      login: this.setupSmsForm.get('login')?.value ?? '',
      senha: this.setupSmsForm.get('senha')?.value ?? ''
    };

    return setupModel;
  }
}