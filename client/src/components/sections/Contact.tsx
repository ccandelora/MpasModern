import React from 'react';
import { contactInfo } from '@/data';
import { Facebook, Linkedin, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactComponent = () => {
  return (
    <section id="contact" className="py-16 md:py-24" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
            <h2 id="contact-heading" className="text-primary text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-12">
              Have questions about our services or ready to start your accreditation journey? Reach out to our team of experts today using the details below.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mb-12">
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-3 mr-4 text-white flex-shrink-0" aria-hidden="true">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Office Location</h3>
                  <address className="not-italic text-gray-600">
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
                <div className="bg-primary-600 rounded-full p-3 mr-4 text-white flex-shrink-0" aria-hidden="true">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <p className="text-gray-600"><a href={`tel:${contactInfo.phone.replace(/\D/g,'')}`} className="hover:text-primary hover:underline focus:outline-none focus:underline">{contactInfo.phone}</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-3 mr-4 text-white flex-shrink-0" aria-hidden="true">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-gray-600"><a href={`mailto:${contactInfo.email}`} className="hover:text-primary hover:underline focus:outline-none focus:underline">{contactInfo.email}</a></p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-600 rounded-full p-3 mr-4 text-white flex-shrink-0" aria-hidden="true">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Hours</h3>
                  <p className="text-gray-600">
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
            
            <div className="flex space-x-4 justify-center" aria-label="Social media links">
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
      </div>
    </section>
  );
};

const Contact = React.memo(ContactComponent);

export default Contact;
