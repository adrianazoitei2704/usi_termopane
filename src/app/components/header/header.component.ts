import { Component, HostListener, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  scrolled = false;

  private formBuilder = inject(FormBuilder);
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^07\d{8}$/)]],
    agreeTerms: [false, Validators.requiredTrue]
  });


  @HostListener('window:scroll', [])
  onWindowScroll(sectionId: string): void {
    this.scrolled = window.pageYOffset > 50;
    const yOffset = -70; 
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Form submitted:', this.profileForm.value);
      // You can also reset form or close modal
    } else {
      this.profileForm.markAllAsTouched();
    }
  }
}
