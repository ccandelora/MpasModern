import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import lindaProfile from '../../assets/images/linda-profile.jpg';
import chrisProfile from '../../assets/images/chris-profile.jpg';

const TeamComponent = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-gray-600">
            Meet the experienced professionals behind MPAS
          </p>
        </div>
        
        <div className="grid gap-12 md:grid-cols-2">
          {/* Team Member 1 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="flex flex-col items-center p-8">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/10">
                <img
                  src={lindaProfile}
                  alt="Deputy Chief Linda O'Brien"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Deputy Chief Linda O'Brien (ret)</h3>
              <p className="text-lg font-semibold text-gray-700 mb-6">Managing Partner</p>
              
              <div className="prose prose-gray max-w-none">
                <p className="mb-4">
                  Linda received a Bachelor of Science degree in Criminal Justice from Northeastern University. Her law enforcement expertise is supported by more than 43 years of service in private law enforcement. She is a graduate of the Bowmac Critical Incident Management Training, Command Leadership Program N.E.I.L.M, P.E.R.F.- S.M.I.P, the FBI Leeda Supervisor Program, and the FBI Leeda Command Level Leadership Institute, among many others.
                </p>
                
                <p className="mb-4">
                  She has come up through the ranks and ultimately served as Deputy Chief of Police for a major university police department in the Boston area over seeing a full complement of both sworn and non-sworn personnel. Linda ran many critical areas of the department as well as being responsible for federal and local matters of compliance. Some of Linda's extensive experience is in recruiting, interviewing, oversight of background investigations, grant writing, as a training manager, and in policy and procedure development.
                </p>
                
                <p className="mb-6">
                  Linda also has many years of experience as an Accreditation Manager and successfully acquired Certification and Accreditation status for her department. She has also trained others in this area and has been a resource to many public and private agencies striving to reach Certification and Accreditation status. Linda has also provided services to MPAC in assessing both public and private organizations.
                </p>
              </div>
              
              <Button asChild variant="outline" className="w-full mt-6">
                <a href="mailto:lobrien@mpas.boston">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Linda
                </a>
              </Button>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="flex flex-col items-center p-8">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/10">
                <img
                  src={chrisProfile}
                  alt="Officer Chris Bettencourt"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Officer Chris Bettencourt (ret)</h3>
              <p className="text-lg font-semibold text-gray-700 mb-6">Senior Partner</p>
              
              <div className="prose prose-gray max-w-none">
                <p className="mb-4">
                  Police Officer Christopher Bettencourt (ret.)
                </p>
                
                <p className="mb-4">
                  Chris received a Bachelor of Science degree in Criminal Justice from Western New England University and has communications, corrections, law enforcement, and physical security expertise supported by more than 35 years of service in the municipal and private sectors.
                </p>
                
                <p className="mb-4">
                  Chris has experience as an administrative police officer taking supervisory roles in the recruiting and hiring process, court prosecutor, community policing, crime prevention, and fleet management. As a security manager for a global pharmaceutical company, Chris oversaw a physical guard force of 80-plus employees at several locations.
                </p>
                
                <p className="mb-6">
                  Chris also has many years of experience as an accreditation manager and was instrumental in obtaining initial accreditation status and maintaining the status for three cycles for his department. Chris has served as a panel speaker for the Massachusetts Police Accreditation Commission's (MPAC) annual convention and is a recipient of the MPAC's Excellence in Police Administration award. Chris has also served as an accreditation assessor for MPAC. He has also served as an advisory board member of the Massachusetts Concerns of Police Survivors.
                </p>
              </div>
              
              <Button asChild variant="outline" className="w-full mt-6">
                <a href="mailto:cbettencourt@mpas.boston">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Chris
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = React.memo(TeamComponent);

export default Team; 