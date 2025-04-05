import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { apiRequest } from '@/lib/queryClient';
import { contactInfo, contactFormFields } from '@/data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

// Contact form schema
const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: 'First name is required' }),
  lastName: z.string().min(2, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  phone: z.string().optional(),
  department: z.string().min(2, { message: 'Department/Agency is required' }),
  interest: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      interest: '',
      message: '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h2 id="contact-heading" className="text-primary text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about our services or ready to start your accreditation journey? Reach out to our team of experts today.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-3 mr-4 text-white" aria-hidden="true">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Office Location</h3>
                  <address className="not-italic">
                    {contactInfo.address.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < contactInfo.address.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-3 mr-4 text-white" aria-hidden="true">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p><a href={`tel:${contactInfo.phone.replace(/\D/g,'')}`} className="hover:underline focus:outline-none focus:underline">{contactInfo.phone}</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-3 mr-4 text-white" aria-hidden="true">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p><a href={`mailto:${contactInfo.email}`} className="hover:underline focus:outline-none focus:underline">{contactInfo.email}</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-3 mr-4 text-white" aria-hidden="true">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Hours</h3>
                  <p>
                    {contactInfo.hours.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < contactInfo.hours.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4" aria-label="Social media links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary/80 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-primary" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary/80 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary/80 transition duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 id="form-heading" className="text-2xl font-semibold text-primary mb-6">Request Information</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" aria-labelledby="form-heading">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactFormFields.map((field) => {
                      if (field.type === 'textarea') {
                        return (
                          <div key={field.id} className={field.half ? 'md:col-span-1' : 'md:col-span-2'}>
                            <FormField
                              control={form.control}
                              name={field.id as keyof ContactFormValues}
                              render={({ field: formField }) => (
                                <FormItem>
                                  <FormLabel htmlFor={field.id}>{field.label}{field.required && ' *'}</FormLabel>
                                  <FormControl>
                                    <Textarea 
                                      id={field.id}
                                      placeholder={`Enter ${field.label.toLowerCase()}`}
                                      rows={4}
                                      {...formField}
                                      aria-required={field.required}
                                      aria-invalid={!!form.formState.errors[field.id as keyof ContactFormValues]}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        );
                      } else if (field.type === 'select') {
                        return (
                          <div key={field.id} className={field.half ? 'md:col-span-1' : 'md:col-span-2'}>
                            <FormField
                              control={form.control}
                              name={field.id as keyof ContactFormValues}
                              render={({ field: formField }) => (
                                <FormItem>
                                  <FormLabel htmlFor={field.id}>{field.label}{field.required && ' *'}</FormLabel>
                                  <FormControl>
                                    <Select 
                                      onValueChange={formField.onChange} 
                                      defaultValue={formField.value}
                                      aria-required={field.required}
                                      aria-invalid={!!form.formState.errors[field.id as keyof ContactFormValues]}
                                    >
                                      <SelectTrigger id={field.id}>
                                        <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                                      </SelectTrigger>
                                      <SelectContent>
                                        {field.options?.map((option) => (
                                          <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div key={field.id} className={field.half ? 'md:col-span-1' : 'md:col-span-2'}>
                            <FormField
                              control={form.control}
                              name={field.id as keyof ContactFormValues}
                              render={({ field: formField }) => (
                                <FormItem>
                                  <FormLabel htmlFor={field.id}>{field.label}{field.required && ' *'}</FormLabel>
                                  <FormControl>
                                    <Input
                                      id={field.id}
                                      type={field.type}
                                      placeholder={`Enter ${field.label.toLowerCase()}`}
                                      {...formField}
                                      aria-required={field.required}
                                      aria-invalid={!!form.formState.errors[field.id as keyof ContactFormValues]}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        );
                      }
                    })}
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = React.memo(ContactComponent);

export default Contact;
