import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-text-fields',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    InputTextModule,
    TextareaModule,
    SelectModule,
    DatePickerModule,
    InputNumberModule,
    ButtonModule,
  ],
  templateUrl: './text-fields.html',
  styleUrl: './text-fields.scss'
})
export default class TextFields {
  currentStep = signal(1);
  totalSteps = 3;

  stepLabels = [
    'البيانات الشخصية',
    'بيانات العنوان',
    'المراجعة والتأكيد'
  ];

  form: FormGroup;

  cityOptions = [
    { label: 'الرياض', value: 'riyadh' },
    { label: 'جدة', value: 'jeddah' },
    { label: 'مكة المكرمة', value: 'makkah' },
    { label: 'المدينة المنورة', value: 'madinah' },
    { label: 'الدمام', value: 'dammam' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      // Row 1
      opt1: [''],
      req1: ['', Validators.required],
      // Row 2
      opt2: [''],
      req2: ['', Validators.required],
      // Row 3 - with values
      opt3: ['نص'],
      req3: ['نص', Validators.required],
      // Row 4 - with values
      opt4: ['نص'],
      req4: ['نص', Validators.required],
      // Row 5 - with helper text
      opt5: [''],
      req5: ['', Validators.required],
      // Row 6 - with helper text
      opt6: [''],
      req6: ['', Validators.required],
      // Row 7
      opt7: [{ value: '', disabled: true }],
      req7: [{ value: '', disabled: true }],
    });
  }

  nextStep(): void {
    if (this.currentStep() < this.totalSteps) {
      this.currentStep.update(v => v + 1);
    }
  }

  prevStep(): void {
    if (this.currentStep() > 1) {
      this.currentStep.update(v => v - 1);
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.form.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.form.get(fieldName);
    if (!field || !field.errors) return '';

    if (field.errors['required']) return 'هذا الحقل مطلوب';
    if (field.errors['email']) return 'البريد الإلكتروني غير صالح';
    if (field.errors['minlength']) return `الحد الأدنى ${field.errors['minlength'].requiredLength} أحرف`;
    if (field.errors['pattern']) return 'صيغة غير صالحة';

    return 'خطأ في الإدخال';
  }
}

export { TextFields };
