import { useState, useRef } from "react";
const SideNav = () =>{
    const [currentstate, setCurrentState] = useState('personalDetails')

    const handleSectionChange = (section)=>{
        setCurrentState(section);
        scrollToSection(section);
    };
    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const renderNavigationLinks = () => (
        <div className="side-navigation">
          <h2>Sections</h2>
          <ul>
            <li onClick={() => handleSectionChange('personalDetails')}>Personal Details</li>
            <li onClick={() => handleSectionChange('caseDetails')}>Case Details</li>
            <li onClick={() => handleSectionChange('documentaryEvidence')}>Documentary Evidence</li>
            <li onClick={() => handleSectionChange('legalGrounds')}>Legal Grounds</li>
            <li onClick={() => handleSectionChange('jurisdictionAndRelief')}>Jurisdiction</li>
            <li onClick={() => handleSectionChange('feesAndStamps')}>Fees and Stamps</li>
            <li onClick={() => handleSectionChange('affidavitsAndNotices')}>Affidavits & Notices</li>
            <li onClick={() => handleSectionChange('powerofattorney')}>Power Of Attorney</li>
            <li onClick={() => handleSectionChange('caseregs')}>Case Registration</li>
          </ul>
        </div>
      );
      return (
        <div className="form-container">
      {renderNavigationLinks()}
    </div>
      );
};
export default SideNav;