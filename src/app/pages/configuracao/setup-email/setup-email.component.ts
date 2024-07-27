import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SetupEmailService } from '../services/setupEmail.service';
import { SetupEmailModel } from '../models/setupeEmail.model';

@Component({
  selector: 'app-setup-email',
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
    MatFormFieldModule],
  templateUrl: './setup-email.component.html',
  styleUrl: './setup-email.component.scss'
})
export class SetupEmailComponent {
  setupEmailForm!: FormGroup;
  idSetupEmail: number | null = null;
  idConfiguracao: string | null = null;

  constructor(
    private form: FormBuilder,
    private route: ActivatedRoute,
    private setupEmailService: SetupEmailService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idConfiguracao = params.get('idConfiguracao');
    });

    this.setupEmailForm = this.form.group({
      nomeServidorSMTP: ['', Validators.required],
      portaEnvio: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      nomeRemetente: ['', Validators.required],
      emailRemetente: ['', [Validators.required, Validators.email]]
    });
  }

  salvar() {
    if (this.setupEmailForm.valid) {
    if(this.idSetupEmail == null){
      let model = this.preencherModel();
      this.setupEmailService.Post(model).subscribe(
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
        if(this.idSetupEmail){
          this.snackBar.open("A edição de dados será disponibilizada no futuro.", "Fechar")
        }
      }
    }
  }

  preencherModel(){
    const setupModel: SetupEmailModel = {
      idConfiguracao: parseInt(this.idConfiguracao ?? "", 10),
      idSetupEmail: this.setupEmailForm.get('idSetupEmail')?.value,
      nomeServidorSMTP: this.setupEmailForm.get('nomeServidorSMTP')?.value,
      portaEnvio: this.setupEmailForm.get('portaEnvio')?.value,
      login: this.setupEmailForm.get('login')?.value,
      senha: this.setupEmailForm.get('senha')?.value,
      nomeRemetente: this.setupEmailForm.get('nomeRemetente')?.value,
      emailRemetente: this.setupEmailForm.get('emailRemetente')?.value,
    };

    return setupModel;
  }
}
