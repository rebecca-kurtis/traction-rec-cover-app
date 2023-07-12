import React from "react";

interface WhyCompanyProps {}

export const WhyCompany: React.FC<WhyCompanyProps> = ({}) => {
  return (
    <div className="whyCompanyContainer" id='why-company'>
      <h2 className="whyContainerH2">What I love about the Company</h2>
      <p>Here are some fact that I really like about the Company:</p>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          1. the Company helps small businesses grow their business and thrive
        </h4>
        <p>
          the Company aim&apos;s to help businesses streamline their
          operations, improve productivity, and enhance relationships with
          customers and employees.
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          2. User experience is very important to the Company
        </h4>
        <p>
          the Company&apos;s products are designed with a user-centric approach
          and strive to provide an intuitive and seamless user experience. I
          LOVE the Company&apos;s clean and modern design!
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          3. Great and supportive team environment
        </h4>
        <p>
          Respect and trust between coworkers are values that are important to
          me. The Company has a strong team of people who are compassionate and
          supportive (and fun!) which makes the Company a special place to work.
        </p>
      </div>
    </div>
  );
};
