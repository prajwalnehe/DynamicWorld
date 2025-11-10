import React from "react";
import {
  BusinessPartner01,
  BusinessPartner02,
  BusinessPartnerBenefits,
  BusinessPartnerCommission,
} from "../components/BussinessOpportunityPages";


const BussinessOpportunity = () => {
  return (
    <div>
      <BusinessPartner01 />
      <BusinessPartnerBenefits />
      <BusinessPartnerCommission />
      <BusinessPartner02 />
    </div>
  );
};

export default BussinessOpportunity;
