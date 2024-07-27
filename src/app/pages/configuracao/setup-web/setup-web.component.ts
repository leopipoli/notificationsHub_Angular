import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatError, MatFormField, MatInput, MatInputModule, MatLabel } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SetupWebService } from '../services/setupWeb.service';
import { SetupWebModel } from '../models/setupWeb.model';

@Component({
  selector: 'app-setup-web',
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
  templateUrl: './setup-web.component.html',
  styleUrl: './setup-web.component.scss'
})
export class SetupWebComponent {
  setupWebForm!: FormGroup;
  idConfiguracao: string | null = null;

  constructor(
    private form: FormBuilder,
    private route: ActivatedRoute,
    private setupWebService: SetupWebService,
    private snackBar: MatSnackBar,
  ) { 
    this.setupWebForm = this.form.group({
      nomeDoSite: ['', Validators.required],
      enderecoDoSite: ['', Validators.required],
      imagemDoIcone: [''],
      textoMensagemPermissao: [''],
      textoBotaoPermitir: [''],
      textoBotaoNegar: [''],
      tituloNotificacaoBoasVindas: [''],
      textoMensagemBoasVindas: [''],
      habilitarLinkDestino: [false],
      enderecoLinkDestino: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idConfiguracao = params.get('idConfiguracao');
    });

    if(this.idConfiguracao != "null"){
      this.setupWebService.GetById(parseInt(this.idConfiguracao ?? "", 10)).subscribe(
        (setup: SetupWebModel) => {
          if(setup){
            this.setupWebForm.patchValue({
              textoMensagemBoasVindas: setup.textoMensagemBoasVindas,
              textoMensagemPermissao: setup.textoMensagemPermissao,
              nomeDoSite: setup.nomeDoSite,
              enderecoDoSite: setup.enderecoDoSite,
              imagemDoIcone: setup.imagemDoIcone,
              textoBotaoPermitir: setup.textoBotaoPermitir,
              textoBotaoNegar: setup.textoBotaoNegar,
              tituloNotificacaoBoasVindas: setup.tituloNotificacaoBoasVindas,
              habilitarLinkDestino: setup.habilitarLinkDestino,
              enderecoLinkDestino: setup.enderecoLinkDestino
            });
          }
          else{
            this.snackBar.open("Erro ao carregar dados.", "Fechar")
          }
        },
        error => {
          console.error('Erro na operação', error);
        }
      )
    }
  }

  salvar() {
    if (this.setupWebForm.valid) {
    if(this.idConfiguracao == "null"){
      this.setupWebService.Post(this.setupWebForm.value).subscribe(
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
