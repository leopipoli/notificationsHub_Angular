import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatError, MatFormField, MatInput, MatInputModule, MatLabel } from '@angular/material/input';

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

  constructor(private form: FormBuilder) { }

  ngOnInit() {
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

  salvar() {
    if (this.setupWebForm.valid) {
      console.log('Formulário Enviado', this.setupWebForm.value);
    }
  }
}
