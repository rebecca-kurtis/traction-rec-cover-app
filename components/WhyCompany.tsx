import React from "react";
import styles from "../styles/WhyCompany.module.scss";

interface WhyCompanyProps {}

export const WhyCompany: React.FC<WhyCompanyProps> = ({}) => {
  return (
    <div className={styles.whyCompanyContainer} id='why-company'>
      <h2 className={styles.whyContainerH2}>What I love about the Company</h2>
      <p>Here are some fact that I really like about the Company:</p>
      <div className={styles.pointContainerSpacer}></div>
      <div className={styles.pointContainer}>
        <h4 className={styles.whyContainerH4}>
          1. the Company helps people and businesses thrive
        </h4>
        <p>
          the Company&apos;s solutions aim to help businesses streamline their
          operations, improve productivity, and enhance their relationships with
          customers and employees.
        </p>
      </div>
      <div className={styles.pointContainerSpacer}></div>
      <div className={styles.pointContainer}>
        <h4 className={styles.whyContainerH4}>
          2. Care for design and user experience
        </h4>
        <p>
          the Company&apos;s products are designed with a user-centric approach
          and strive to provide an intuitive and seamless user experience. I
          LOVE the Company&apos;s clean and modern design!
        </p>
      </div>
      <div className={styles.pointContainerSpacer}></div>
      <div className={styles.pointContainer}>
        <h4 className={styles.whyContainerH4}>
          3. Strong team, compassionate people
        </h4>
        <p>
          Respect and trust between coworkers are values that are important to
          me. the Company has a strong team of people who are compassionate and
          supportive (and fun!) which makes the Company a special place to work.
        </p>
      </div>
    </div>
  );
};
