import { Request, Response } from 'express';
import { z } from 'zod';
import { sendContactEmail } from '../services/emailService';

// Contact form validation schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  phone: z.string().optional(),
  department: z.string().min(2, { message: 'Department/Agency is required' }),
  interest: z.string().optional(),
  message: z.string().optional(),
});

export const handleContactForm = async (req: Request, res: Response) => {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(req.body);
    
    // Send email notification
    await sendContactEmail(validatedData);
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Return validation errors
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: error.errors
      });
    }

    // Log server error
    console.error('Contact form error:', error);
    
    // Return generic error
    return res.status(500).json({
      success: false,
      message: 'There was a problem processing your request. Please try again.'
    });
  }
};
