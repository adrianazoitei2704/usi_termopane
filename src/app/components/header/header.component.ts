import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';  
import { CommonModule } from '@angular/common'; 
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

declare var bootstrap: any;
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {


  scrolled = false;
  showmodal = "";
  @ViewChild('contactModal') contactModal!: ElementRef;
  @ViewChild('successToast') successToast!: ElementRef;
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
  descarca(catalog: string) {
    const link = document.createElement('a');
    if(catalog === 'hpl'){
      link.href = 'assets/Cataloage/2020-Grad-Export_PVC-HPL_DE-ENG124pg.pdf'; 
      link.download = 'Catalog_PVC-HPL.pdf';      
      link.target = '_blank';
    }
    if(catalog === 'alu'){
      link.href = 'assets/Cataloage/2020-Grad-Export_ALU_DE-ENG131pg.pdf'; 
      link.download = 'Catalog_ALUMINIU.pdf';      
      link.target = '_blank';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }
  onSubmit(): void {
    if (this.profileForm.valid) {
       emailjs.send('service_zoeg11c','template_59arr0b',{...this.profileForm.value}, { publicKey: 'Ry10onoHzAIZpM_q5'})
    .then(
        () => {
          console.log('SENT');
        },
        (error) => {
          console.log('FAILED', (error as EmailJSResponseStatus).text);
        },
      );

      emailjs.send('service_zoeg11c','template_atzx9l7',{...this.profileForm.value}, { publicKey: 'Ry10onoHzAIZpM_q5'})
    .then(
        () => {
          console.log('SENT');
        },
        (error) => {
          console.log('FAILED', (error as EmailJSResponseStatus).text);
        },
      );
      
      console.log('Form submitted:', this.profileForm.value);
      // You can also reset form or close modal
      this.profileForm.reset();
      const modalInstance = bootstrap.Modal.getInstance(this.contactModal.nativeElement);
      modalInstance.hide();
      const toast = bootstrap.Modal.getInstance(this.successToast.nativeElement);
      toast.show();
    } 
    
  }
}
