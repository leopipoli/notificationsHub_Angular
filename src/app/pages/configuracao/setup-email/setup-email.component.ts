import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

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

  constructor(private form: FormBuilder) { }

  ngOnInit() {
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
      console.log('Formulário Enviado', this.setupEmailForm.value);
    }
  }
}
