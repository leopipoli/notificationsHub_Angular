import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CadastroService } from '../services/cadastro.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ConfiguracaoModel } from '../models/configuracao.model';

@Component({
  selector: 'app-cadastro',
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
    MatButtonModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit{
  configuracaoForm: FormGroup;
  idConfiguracao: string | null = null;

  constructor(
    private form: FormBuilder,
    private route: ActivatedRoute,
    private cadastroService: CadastroService,
    private snackBar: MatSnackBar,
  ) {
    this.configuracaoForm = this.form.group({
      nomeAplicativo: ['', [Validators.required]],
      setupWeb: [false],
      setupEmail: [false],
      setupSMS: [false]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idConfiguracao = params.get('idConfiguracao');
    });

    if(this.idConfiguracao != "null"){
      this.cadastroService.GetById(parseInt(this.idConfiguracao ?? "", 10)).subscribe(
        (config: ConfiguracaoModel) => {
          if(config){
            this.configuracaoForm.patchValue({
              nomeAplicativo: config.nomeAplicativo,
              setupWeb: config.setupWeb,
              setupEmail: config.setupEmail,
              setupSMS: config.setupSMS
            });
          }
          else{
            this.snackBar.open("Erro ao carregar dados.", "Fechar")
          }
        },
        error => {
          console.error('Erro na operação', error);
        }
      )}
    }

  salvar() {
    if (this.configuracaoForm.valid) {
    if(this.idConfiguracao == "null"){
      this.cadastroService.Post(this.configuracaoForm.value).subscribe(
        (idConfiguracao: number) => {
          if(idConfiguracao){
            this.snackBar.open("Salvo com sucesso.", "Fechar")
            window.location.reload();
          }
          else{
            this.snackBar.open("Erro ao salvar.", "Fechar")
          }
        },
        error => {
          console.error('Erro na operação', error);
        }
      )}
      else{
        if(this.idConfiguracao){
          this.snackBar.open("A edição de dados será disponibilizada no futuro.", "Fechar")
        }
      }
    }
  }
}
