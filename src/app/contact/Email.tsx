import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Toast, ToastProvider, ToastViewport } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';

const Email: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const toast = useToast();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs.sendForm(
        process.env.EMAILJS_SERVICE_ID || 'service_kgsfubg',
        process.env.EMAILJS_TEMPLATE_ID || 'template_ofm6cnc',
        form.current,
        {publicKey: process.env.EMAILJS_PUBLIC_KEY || '82G2kc4aCnqBmcQit' }
      ).then(
        () => {
          toast.toast({
            title: 'Email sent',
            description: 'Your email has been sent successfully',
          })
          form.current?.reset();
        },
        (error) => {
          console.error('Failed to send email. Error:', error);
          toast.toast({
            title: 'Error',
            description: 'An error occurred while sending the email. Please try again later.',
          })

        }
      );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='text-white flex flex-col w-full'>

      <label htmlFor='email'>Email</label>
      <input className='text-black mb-1' type="email" name="email" id='email' required placeholder='Emaili' />
      <label htmlFor='subject'>Subject</label>
      <input className='text-black mb-1' type="text" name="subject" id='subject' required placeholder='Subject' />
      <label htmlFor='message' >Message</label>
      <textarea  className='text-black mb-2' name="message" id='message' required />
      <div className='flex justify-center'>
        <Button><input type="submit" value="Send" /></Button>
      </div>

    </form>
    
  );
};

export default Email;
