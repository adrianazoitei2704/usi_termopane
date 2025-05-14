import { Component, HostListener, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

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
   profileForm = this.formBuilder.group(
    { 
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^07\d{8}$/)]],
      message: ['', Validators.required],
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
    } 
    emailjs.send('service_a8yp6qu','template_59arr0b',{...this.profileForm.value}, { publicKey: 'Ry10onoHzAIZpM_q5'})
    .then(
        () => {
          console.log('SENT');
        },
        (error) => {
          console.log('FAILED', (error as EmailJSResponseStatus).text);
        },
      );

      emailjs.send('service_a8yp6qu','template_atzx9l7',{...this.profileForm.value}, { publicKey: 'Ry10onoHzAIZpM_q5'})
    .then(
        () => {
          console.log('SENT');
        },
        (error) => {
          console.log('FAILED', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
