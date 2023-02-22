import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent {

  senderName:string = "" 
  emailAddress:string = ""
  messageInput:string = ""

  sendEmail(): void {
    (document.getElementById("comfirmation-model-body") as HTMLDivElement).textContent = "Sending the email to taylorldelbridge@gmail.com . . .";
    this.senderName=  (document.getElementById("name-input") as HTMLInputElement).value;
    this.emailAddress=  (document.getElementById("email-input") as HTMLInputElement).value;
    this.messageInput=  (document.getElementById("message-input") as HTMLTextAreaElement).value;

    var templateParams = {
      from_name: this.senderName,
      email_id: this.emailAddress,
      message: this.messageInput,
    }
     if(this.messageInput.trim() =="" || this.emailAddress.trim() == "" ){
      (document.getElementById("comfirmation-model-body") as HTMLDivElement).textContent = "The email could not be sent for some reason.";
      return;
     }

    emailjs.send("service_z8k0wio","template_1jbmn1e",templateParams, 'qu4uifiLachtG6kl2')
    .then(function(response){
      console.log('SUCCESS!', response.status, response.text);
      (document.getElementById("name-input") as HTMLInputElement).value = "";
      (document.getElementById("email-input") as HTMLInputElement).value ="";
      (document.getElementById("message-input") as HTMLTextAreaElement).value ="";
      (document.getElementById("comfirmation-model-body") as HTMLDivElement).textContent = "The email was sent";
    }, function(error) {
       console.log('FAILED...', error);
       (document.getElementById("comfirmation-model-body") as HTMLDivElement).textContent = "The email could not be sent for some reason. Well here's my email: ndelbridge@fiverings.dev";
    });

    

  }
  
}
