import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

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
export class CadastroComponent {
  configuracaoForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.configuracaoForm = this.form.group({
      nomeAplicativo: ['', [Validators.required]],
      setupWeb: [false],
      setupEmail: [false],
      setupSMS: [false]
    });
  }

    salvar() {
     if (this.configuracaoForm.valid) {
       console.log('Formulário Enviado', this.configuracaoForm.value);
     }
   }
}
