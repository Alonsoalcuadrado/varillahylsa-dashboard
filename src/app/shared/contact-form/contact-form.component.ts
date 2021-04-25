import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {

  public mainContactEmail: string = 'ventas@varillahylsa.com';
  public mainSubject: string = 'Contacto con cliente nuevo';

  contactForm = this.fb.group({
    completeName: [null, Validators.required],
    email: [null, Validators.email],
    phone: [null, Validators.required],
    company: [null],
    message: [null]
  });

  constructor(private fb: FormBuilder) { }

  onSubmit(): void {
    const completeName = this.contactForm.get('completeName')?.value;
    const email = this.contactForm.get('email')?.value;
    const phone = this.contactForm.get('phone')?.value;
    const company = this.contactForm.get('company')?.value;
    const message = this.contactForm.get('message')?.value;

    let companyMessage: string = '';
    // console.log(this.contactForm.get('email')?.value);
    if (company) {
      companyMessage = `soy%20de%20la%20empresa%20${company}%20`;
    }

    window.location.href = `mailto:${this.mainContactEmail}?subject=${this.mainSubject}&body=Hola,%20mi%20nombre%20es%20${completeName}%20${companyMessage}y%20estoy%20interesado%20en%20obtener%20información%20de%20sus%20productos.%0Ales%20comparto%20mis%20datos%20de%20contacto,%20gracias.%0A%0A
    ${email}%0A
    ${phone}`;
  }

}
