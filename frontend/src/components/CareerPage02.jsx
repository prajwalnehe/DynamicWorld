import React, { useState } from 'react'
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react'

const CareerPage02 = () => {
  const [openJob, setOpenJob] = useState(null)

  const offices = [
    {
      city: 'Pune',
      phone: '(+91) 982 040 1375',
      address: 'Office No. 506, Sterling Centre, Opp. Aurora Tower, M6 Road, Camp, Pune 411001'
    },
    {
      city: 'Mumbai',
      phone: '(+91) 773 884 6286',
      address: 'Shop No 4, Neelkanth Apartment, Opp. Ganpatrao, Near Hirasen Women College Corner, Shahupuri (W), Mumbai 400078'
    },
    {
      city: 'Indore',
      phone: '(+91) 788 773 8826',
      address: 'Office No 617, Gham Plaza, AB Road, Near Industry House, Old Palasia, Indore 452006'
    }
  ]

  const jobs = [
    {
      id: 1,
      title: 'Graphic Design Intern',
      location: 'Pune',
      duration: '3 Months',
      stipend: '5000/Month',
      about: 'Are you a creative individual with a passion for graphic design? Dynamic World is offering an exciting opportunity for a Graphic Design Intern to join our team. This internship will provide hands-on experience in graphic design, branding, and marketing while contributing to our mission of empowering learners worldwide.',
      responsibilities: [
        'Design Creation: Produce visually appealing graphics for various platforms, including digital and print media.',
        'Collaboration: Work closely with our marketing team to design promotional materials, social media content, and educational resources.',
        'Brand Consistency: Ensure that all design materials align with Dynamic World\'s branding guidelines and messaging.',
        'Creative Ideation: Participate in brainstorming sessions and contribute fresh design ideas.',
        'Feedback Incorporation: Actively seek and incorporate feedback to refine design work.'
      ],
      qualifications: [
        'Strong proficiency in graphic design software such as Adobe Creative Suite (Photoshop, Illustrator, InDesign, etc.).',
        'Creativity and a strong eye for design aesthetics.',
        'Ability to work both independently and collaboratively within a team.',
        'Pursuing or recently completed a degree in Graphic Design, Visual Arts, or a related field.',
        'Portfolio showcasing graphic design work (include link or attachments).'
      ],
      whatYouGain: [
        'Real-world experience in graphic design for educational and marketing purposes.',
        'Exposure to the dynamic field of education and consultancy.',
        'Opportunities for mentorship and professional development.',
        'The chance to contribute to meaningful projects with a global impact.'
      ],
      howToApply: 'Interested candidates are invited to submit the following documents to hire@dynamicworld.in:',
      applyDocuments: [
        'Resume/CV',
        'Cover Letter (explaining your interest in the position and relevant skills)',
        'Portfolio showcasing graphic design work'
      ],
      deadline: '20-Jan-2024'
    },
    {
      id: 2,
      title: 'Content Writing Intern',
      location: 'Pune',
      duration: '3 Months',
      stipend: '₹5,000',
      about: 'Are you passionate about education and skilled in crafting compelling written content? If so, we invite you to join Dynamic World as a Content Writing Intern. This internship offers an exciting opportunity to gain hands-on experience in content creation, marketing, and educational consultancy while contributing to our mission of empowering learners worldwide.',
      responsibilities: [
        'Content Creation: Generate high-quality, engaging written content for our website, blog, social media, and marketing materials.',
        'Research: Conduct research to stay updated on education trends, best practices, and industry news.',
        'Editing and Proofreading: Review and edit content to ensure accuracy, clarity, and adherence to style guidelines.',
        'Collaboration: Work closely with our marketing and educational consultants to develop content that aligns with our mission and objectives.',
        'Content Optimization: Assist in optimizing content for SEO and user engagement.'
      ],
      qualifications: [
        'A strong passion for education and writing.',
        'Exceptional writing, editing, and proofreading skills.',
        'Detail-oriented with a commitment to producing high-quality work.',
        'Ability to work independently and as part of a team.',
        'Familiarity with SEO principles (preferred but not required).',
        'Pursuing or recently completed a degree in English, Communications, Journalism, or related field.'
      ],
      whatYouGain: [
        'Real-world experience in content creation for an educational consultancy.',
        'Exposure to the dynamic field of education and consultancy.',
        'Opportunities for mentorship and professional development.',
        'A chance to make a meaningful impact in the education sector.'
      ],
      howToApply: 'Interested candidates are invited to submit the following documents to hire@dynamicworld:',
      applyDocuments: [
        'Resume/CV',
        'Cover Letter (explaining your interest in the position and relevant skills)',
        'Writing Sample (e.g., blog post, article, or essay)'
      ],
      deadline: '20-Jan-2024'
    },
    {
      id: 3,
      title: 'Junior Digital Marketing Specialist',
      location: 'Pune',
      stipend: '5000/Month',
      about: 'Dynamic World is a leading educational consulting company dedicated to empowering students, parents, and educational institutions in the ever-evolving world of education. Our mission is to make the educational journey smoother and more rewarding by providing expert guidance and tailored solutions.',
      positionOverview: 'Dynamic World is seeking a highly motivated and creative Junior Digital Marketing Specialist to join our marketing team. This role offers an excellent opportunity to kickstart your career in digital marketing while contributing to our mission of empowering learners worldwide.',
      responsibilities: [
        'Content Creation: Develop and manage engaging content for our website, blog, social media, and marketing materials.',
        'Social Media Management: Manage and grow our social media presence across various platforms.',
        'Email Marketing: Create and execute email marketing campaigns to engage our audience.',
        'SEO and SEM: Assist in optimizing content for search engines and manage paid advertising campaigns.',
        'Analytics and Reporting: Monitor and analyze digital marketing performance, providing insights and recommendations for improvement.',
        'Collaboration: Work closely with the marketing team to develop and execute marketing strategies.'
      ],
      qualifications: [
        'A passion for digital marketing and a strong desire to learn and grow in the field.',
        'Strong written and verbal communication skills.',
        'Familiarity with digital marketing tools and platforms (Google Analytics, social media management tools, email marketing platforms, etc.).',
        'Basic understanding of SEO and SEM principles.',
        'Ability to work both independently and as part of a team.',
        'Relevant coursework or prior experience in digital marketing (preferred but not required).'
      ],
      whatYouGain: [
        'Valuable hands-on experience in digital marketing.',
        'Exposure to the dynamic field of education and consultancy.',
        'Opportunities for mentorship and professional development.',
        'The chance to contribute to meaningful projects with a global impact.'
      ],
      howToApply: 'Interested candidates are invited to submit the following documents to hire@dynamicworld.in:',
      applyDocuments: [
        'Resume/CV',
        'Cover Letter (explaining your interest in the position and relevant skills)'
      ],
      deadline: '20-Jan-2024'
    }
  ]

  const toggleJob = (jobId) => {
    setOpenJob(openJob === jobId ? null : jobId)
  }

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Office Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {offices.map((office, index) => (
            <div 
              key={index}
              className="bg-gray-700 text-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">{office.city}</h3>
              <p className="text-center text-blue-200 mb-3">{office.phone}</p>
              <div className="flex justify-center mb-3">
                <a 
                  href={`tel:${office.phone}`}
                  className="inline-block bg-white/20 hover:bg-white/30 text-white py-1.5 px-6 text-sm rounded transition-colors border border-white/30"
                >
                  Call Now
                </a>
              </div>
              <p className="text-sm text-gray-300 text-center">{office.address}</p>
            </div>
          ))}
        </div>

        {/* Job Opportunities Section */}
        <div>
          <h2 className="text-3xl font-bold text-red-600 mb-2">
            List of job opportunities
          </h2>
          <p className="text-gray-600 mb-8">
            Join our dynamic team and unlock your potential. We are looking for passionate individuals to fill the following positions.
          </p>

          {/* Job Accordion */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <div key={job.id} className="border-b border-gray-300 pb-4">
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full flex items-center justify-between py-2 hover:opacity-80 transition-opacity"
                >
                  <h3 className="text-lg font-semibold text-black">{job.title}</h3>
                  {openJob === job.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </button>
                
                {openJob === job.id && (
                  <div className="mt-4">
                    {job.location && (
                      <p className="text-gray-700 mb-2"><strong>Location:</strong> {job.location}</p>
                    )}
                    {job.duration && (
                      <p className="text-gray-700 mb-2"><strong>Duration:</strong> {job.duration}</p>
                    )}
                    {job.stipend && (
                      <p className="text-gray-700 mb-4"><strong>Stipend:</strong> {job.stipend}</p>
                    )}
                    
                    {job.about && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">About the Internship:</h4>
                        <p className="text-gray-700">{job.about}</p>
                      </div>
                    )}
                    
                    {job.description && (
                      <p className="text-gray-700 mb-6">{job.description}</p>
                    )}
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    {job.qualifications && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Qualifications:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {job.qualifications.map((qual, idx) => (
                            <li key={idx}>{qual}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.requirements && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.whatYouGain && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What You'll Gain:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                          {job.whatYouGain.map((gain, idx) => (
                            <li key={idx}>{gain}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.howToApply && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">How to Apply:</h4>
                        <p className="text-gray-700 mb-2">{job.howToApply}</p>
                        {job.applyDocuments && (
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {job.applyDocuments.map((doc, idx) => (
                              <li key={idx}>{doc}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {job.deadline && (
                      <p className="text-gray-700 mb-4"><strong>Application Deadline:</strong> {job.deadline}</p>
                    )}

                    <p className="text-gray-600 italic text-sm">
                      Dynamic World is an equal opportunity employer. We encourage candidates of all backgrounds to apply.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareerPage02