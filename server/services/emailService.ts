interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  department: string;
  interest?: string;
  message?: string;
}

/**
 * Sends an email notification for contact form submissions
 * In a production environment, this would use a real email service like nodemailer
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  // In a real implementation, you would send an email using a service like Nodemailer
  // For this example, we'll just log the data to the console
  
  console.log('New contact form submission received:');
  console.log('-----------------------------------');
  console.log(`Name: ${formData.firstName} ${formData.lastName}`);
  console.log(`Email: ${formData.email}`);
  console.log(`Phone: ${formData.phone || 'Not provided'}`);
  console.log(`Department: ${formData.department}`);
  console.log(`Interest: ${formData.interest || 'Not specified'}`);
  console.log(`Message: ${formData.message || 'No message provided'}`);
  console.log('-----------------------------------');
  
  // In a real implementation, you might return a Promise from an email service
  return Promise.resolve();
};

/**
 * Example of how to implement with a real email service like Nodemailer
 * Uncomment and configure to use in production
 */
/*
import nodemailer from 'nodemailer';

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  // Create reusable transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.example.com',
    port: Number(process.env.EMAIL_PORT) || 587,
    secure: Boolean(process.env.EMAIL_SECURE) || false,
    auth: {
      user: process.env.EMAIL_USER || 'user@example.com',
      pass: process.env.EMAIL_PASS || 'password',
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'info@mpas.boston',
    to: process.env.EMAIL_TO || 'contact@mpas.boston',
    subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
      <p><strong>Department/Agency:</strong> ${formData.department}</p>
      <p><strong>Interested In:</strong> ${formData.interest || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message || 'No message provided'}</p>
    `
  };

  // Send email
  return transporter.sendMail(mailOptions);
};
*/
