import React from 'react';
import { clients } from '@/data';

const ClientLogosComponent = () => {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <p className="text-center text-foreground font-medium mb-6">Trusted by Police Departments Across Massachusetts</p>
        <div className="flex flex-wrap justify-center gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="text-primary font-bold">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientLogos = React.memo(ClientLogosComponent);

export default ClientLogos;
