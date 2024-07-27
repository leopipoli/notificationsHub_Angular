import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CadastroService } from '../services/cadastro.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

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
    private snackBar: MatSnackBar
  ) {
    this.configuracaoForm = this.form.group({
      nomeAplicativo: ['', [Validators.required]],
      setupWeb: [false],
      setupEmail: [false],
      setupSMS: [false]
    });
  }

  ngOnInit(): void {
    debugger
    this.route.paramMap.subscribe(params => {
      this.idConfiguracao = params.get('idConfiguracao');
    });
  }

  salvar() {
    if (this.configuracaoForm.valid) {
    this.cadastroService.Post(this.configuracaoForm.value).subscribe(
      (idConfiguracao: number) => {
        debugger
        if(idConfiguracao){
          this.snackBar.open("Salvo com sucesso.", "Fechar")
        }
        else{
          this.snackBar.open("Erro ao salvar.", "Fechar")
        }
      },
      error => {
        console.error('Erro ao obter configuração', error);
      }
    )

      console.log('Formulário Enviado', this.configuracaoForm.value);
    }
  }
}
