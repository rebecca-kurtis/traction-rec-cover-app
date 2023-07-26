import React from "react";

interface WhyCompanyProps {}

export const WhyCompany: React.FC<WhyCompanyProps> = ({}) => {
  return (
    <div className="whyCompanyContainer" id='why-company'>
      <h2 className="whyContainerH2">What I love about the Company</h2>
      <p>Here are some fact that I really like about Traction Rec:</p>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          1. Traction Rec helps non-profits access technologies they may not be able to otherwise.
        </h4>
        <p>
        Traction Rec helps non-profits maximize member engagement. Using a CRM platform built for the non-profit organization, allows members to access programs, update their information, and connect with the organization directly. This allows the organization to put more effort and time into their programs and member initiatives.
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          2. Members are very important to Traction Rec
        </h4>
        <p>
          Traction Rec helps non-profits maximize member engagement. By using a CRM platform built for the non-profit organization, it allows members to access programs, update their information, and connect with the organization directly. This allows the organization to put more effort and time into their programs and member initiatives.  
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          3. Community is important to Traction Rec
        </h4>
        <p>
           Community is very important to Traction Rec. It&apos;s not about having a job, it&apos;s about empowering non-profit community centers and having a great time while doing it. Community is important to me, showing up for my coworkers and customers/users is something I take great pride in. I think we all benefit from a welcoming and inclusive environment and I always strive to make that happen however I can.
        </p>
      </div>
    </div>
  );
};
