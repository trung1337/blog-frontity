import React from 'react';
import { css } from 'frontity';

const PrivacyPolicy = () => {
  return (
    <div css={containerStyles}>
      <h1 css={titleStyles}>Privacy Policy</h1>
      <div css={contentStyles}>
        <p>
          Welcome to our website. This website provides information about football, animals, plants, and cars. We prioritize and are committed to protecting your privacy and the personal information you provide to us. This privacy policy explains how we collect, use, and protect your personal information when you access our website.
        </p>
        <h2>1. Collection of Personal Information</h2>
        <p>
          When you access our website, we may collect certain personal information from you, including your name, email address, and other contact information that you voluntarily provide through contact forms or any other means. We only collect personal information that you voluntarily provide and use it for the purpose you have provided.
        </p>
        <h2>2. Use of Personal Information</h2>
        <p>
          We use the personal information you provide to provide you with information, services, and content related to football, animals, plants, and cars.
        </p>
        <h2>3. Storage and Security of Personal Information</h2>
        <p>
          We take appropriate measures to securely store your personal information and protect it from unauthorized access, disclosure, or misuse. We use industry-standard security technologies and procedures to safeguard your personal information.
        </p>
        <h2>4. Sharing of Personal Information</h2>
        <p>
          We do not share your personal information with third parties unless required by law or with your explicit consent. We may share your personal information with trusted service providers who assist us in delivering our services and operating our website.
        </p>
        <h2>5. Retention of Personal Information</h2>
        <p>
          We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
        </p>
        <h2>6. Your Rights and Choices</h2>
        <p>
          You have the right to access, update, and correct your personal information. You can also request the deletion of your personal information or object to its processing. Please contact us using the information provided at the end of this privacy policy to exercise your rights or make any inquiries regarding your personal information.
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;

const containerStyles = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const titleStyles = css`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const contentStyles = css`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

// Add additional CSS styles as needed