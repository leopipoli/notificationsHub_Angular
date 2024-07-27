import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-setup-sms',
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
  templateUrl: './setup-sms.component.html',
  styleUrl: './setup-sms.component.scss'
})
export class SetupSmsComponent {
  setupSMSForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.setupSMSForm = this.fb.group({
      provedorSMS: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  salvar() {
    if (this.setupSMSForm.valid) {
      console.log('Formulário Enviado', this.setupSMSForm.value);
    }
  }
}