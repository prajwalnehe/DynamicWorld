import React from 'react';
import DynamicForm from '../pages/DynamicForm';

const ContactUs3 = () => {
  return (
    <div className="w-full  px-2 md:px-6 lg:px-8 py-4 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch h-full ">
        <div className="bg-white rounded-xl shadow overflow-hidden h-[50vh] md:h-[80vh]">
          <div className="h-full">
            <iframe
              title="Dynamic World Map - Pune"
              src="https://maps.google.com/maps?q=Dynamic+World,+Office+No.+506,+5th+Floor,+Sterling+Centre,+MG+Road,+opposite+Aurora+Towers,+Camp,+Pune,+Maharashtra+411001&output=embed"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />
          </div>
        </div>

     
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 h-[60vh] md:h-[80vh] flex flex-col overflow-auto">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-red-600">We'd Love to Hear From You</h3>
            <p className="mt-2 text-sm text-gray-900">
              Please ensure all fields are completed accurately to help us assist you effectively.
            </p>
            <p className="mt-2 text-sm text-gray-900 font-medium">
              <span className="inline-flex items-center gap-2"><span className="text-gray-800">🔒</span> Your personal details is secure under privacy policy.</span>
            </p>
          </div>

        <DynamicForm/>
         

         
        </div> 
      </div>
    </div>
  );
};

export default ContactUs3;


