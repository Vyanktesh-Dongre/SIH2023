import React, { useState } from 'react';
interface Document {
    name: string;
    file: File | null;
    type: string;
  }
const RegistrationForm = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [, setIdentification] = useState(null);
    const [defendantName, setDefendantName] = useState('');
    const [defendantAddress, setDefendantAddress] = useState('');
    const [defendantPhoneNumber, setDefendantPhoneNumber] = useState('');
    const [defendantEmail, setDefendantEmail] = useState('');
    const [defendantOccupation, setDefendantOccupation] = useState('');
    const [, setDefendantIdentificationProof] = useState(null);
    const [lawyername, setLawyerName] = useState('');
    const [lawyeraddress, setLawyerAddress] = useState('');
    const [lawyerphone, setLawyerPhone] = useState('');
    const [lawyeremail, setLawyerEmail] = useState('');
    const [lawyerid, setLawyerId] = useState('');
    const [, setLawyerIdentification] = useState(null);
    const [, setLawyerLicense] = useState(null);
    const [dlawyername, setDLawyerName] = useState('');
    const [dlawyeraddress, setDLawyerAddress] = useState('');
    const [dlawyerphone, setDLawyerPhone] = useState('');
    const [dlawyeremail, setDLawyerEmail] = useState('');
    const [dlawyerid, setDLawyerId] = useState('');
    const [, setDLawyerIdentification] = useState(null);
    const [, setDLawyerLicense] = useState(null);
    const [nature, setNature] = useState('Case Nature');
    const [statementOfFacts, setStatementOfFacts] = useState('');
    const [legalprovisions, setLegalProvisions] = useState('');
    const [legalargs, setLegalArgs] = useState('');
    const [, setOfficialDocEvidence] = useState(null);
    const [, setSupportingDocEvidence] = useState(null);
    const [courtname, setCourtName] = useState('Select Court');
    const [remedy, setRemedy] = useState('Select Remedy Sought');
    const [desiredoutcome, setDesiredOutcome] = useState('');
    const [documentName, setDocumentName] = useState('');
    const [documentUpload, setDocumentUpload] = useState(null);
    const [documentType, setDocumentType] = useState('Plaintiff'); 
    const [additionalDocuments, setAdditionalDocuments] = useState<Document[]>([]);
    const [partyType, setPartyType] = useState('Plaintiff');
    const [affidavits, setAffidavits] = useState(null);
    const [notices, setNotices] = useState(null);
    const [powerofattorney, setPowerofAttorney] = useState(null);
    const [casereg, setCaseReg] = useState(null);
    const [fileSizeError, setFileSizeError] = useState('');

    
    const handleSubmit = (e) => {
        console.log('Form Submitted');
    };
    const handleChange1 = (e) => {
        setNature(e.target.value);
    }
    const handleChange2 =(e)=>{
        setStatementOfFacts(e.target.value)
    }
    const handleChange3 =(e)=>{
        setLegalProvisions(e.target.value)
    }
    const handleChange4 =(e)=>{
        setLegalArgs(e.target.value)
    }
    const handleChange5 =  (e) =>{
        setCourtName(e.target.value)
    }
    const handleChange6 =  (e) =>{
        setRemedy(e.target.value)
    }
    const handleChange7 = (e) =>{
        setDesiredOutcome(e.target.value)
    }
    const handleFileUpload1 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
            setIdentification(file);
            setFileSizeError('');
          } else {
            setFileSizeError('File size exceeds the limit (25 MB)');
          }
     };
     const handleFileUpload2 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
            setDefendantIdentificationProof(file);
            setFileSizeError('');
          } else {
            setFileSizeError('File size exceeds the limit (25 MB)');
          }
     };
     const handleFileUpload3 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
          setLawyerIdentification(file);
          setFileSizeError('');
        } else {
          setFileSizeError('File size exceeds the limit (25 MB)');
        }
    };
    const handleFileUpload4 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
          setLawyerLicense(file);
          setFileSizeError('');
        } else {
          setFileSizeError('File size exceeds the limit (25 MB)');
        }
    };
    const handleFileUpload5 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
          setDLawyerIdentification(file);
          setFileSizeError('');
        } else {
          setFileSizeError('File size exceeds the limit (25 MB)');
        }
    };
    const handleFileUpload6 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
          setDLawyerLicense(file);
          setFileSizeError('');
        } else {
          setFileSizeError('File size exceeds the limit (25 MB)');
        }
    };
    const handleFileUpload7 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
            setOfficialDocEvidence(file);
            setFileSizeError('');
          } else {
            setFileSizeError('File size exceeds the limit (25 MB)');
          }
     };
     const handleFileUpload8 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
            setSupportingDocEvidence(file);
            setFileSizeError('');
          } else {
            setFileSizeError('File size exceeds the limit (25 MB)');
          }
     };
     const handleFileUpload9 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
            setAffidavits(file);
            setFileSizeError('');
          } else {
            setFileSizeError('File size exceeds the limit (25 MB)');
          }
     };
     const handleFileUpload10 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
            setNotices(file);
            setFileSizeError('');
          } else {
            setFileSizeError('File size exceeds the limit (25 MB)');
          }
     };
     const handleFileUpload11 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
            setPowerofAttorney(file);
            setFileSizeError('');
          } else {
            setFileSizeError('File size exceeds the limit (25 MB)');
          }
     };
     const handleFileUpload12 = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
            setCaseReg(file);
            setFileSizeError('');
          } else {
            setFileSizeError('File size exceeds the limit (25 MB)');
          }
     };
     const handleDocumentUpload = (e) => {
        const file = e.target.files[0];
        if (file && file.size <= 25000000) {
          setDocumentUpload(file);
          setFileSizeError('');
        } else {
          setFileSizeError('File size exceeds the limit (25 MB)');
        }
      };
    
      const handleDocumentTypeChange = (e) => {
        setDocumentType(e.target.value);
      };
    
      const handleAddDocument = () => {
        if (documentName && documentUpload && documentType) {
          setAdditionalDocuments([
            ...additionalDocuments,
            {
              name: documentName,
              file: documentUpload,
              type: documentType,
            },
          ]);
          setDocumentName('');
          setDocumentUpload(null);
          setDocumentType('Plaintiff');
        }
      };
    
      const handlePartyTypeChange = (e) => {
        setPartyType(e.target.value);
      };

    return (
        <div className='form-container'>

            <form onSubmit={handleSubmit}>
            <h1>Plaintiff / Petitoner Details</h1>

                <div className="input-container">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div id='PersonalDetails' className="input-container">
                    <label htmlFor="address">Residential Address:</label>
                    <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>

                <div className="input-container">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="input-container">
                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="input-container">
                    <label htmlFor="occupation">Occupation:</label>
                    <input type="text" id="occupation" name="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
                </div>

                <div className="input-container">
                    <label htmlFor="identification">Identification Proof:</label>
                    <input type="file" 
                        id="identification"
                        onChange={handleFileUpload1}
                        accept=".pdf,.jpg,.jpeg,.png"
                    />
                    {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                </div>

                <h2>Defendant / Respondant Details</h2>
                <div className="input-group">
                  <label htmlFor="defendantName">Name*</label>
                  <input
                    type="text"
                    id="defendantName"
                    value={defendantName}
                    onChange={(e) => setDefendantName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="defendantAddress">Residential Address*</label>
                  <input
                    type="text"
                    id="defendantAddress"
                    value={defendantAddress}
                    onChange={(e) => setDefendantAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="defendantPhoneNumber">Phone Number*</label>
                  <input
                    type="tel"
                    id="defendantPhoneNumber"
                    value={defendantPhoneNumber}
                    onChange={(e) => setDefendantPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="defendantEmail">Email Address*</label>
                  <input
                    type="email"
                    id="defendantEmail"
                    value={defendantEmail}
                    onChange={(e) => setDefendantEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="defendantOccupation">Occupation</label>
                  <input
                    type="text"
                    id="defendantOccupation"
                    value={defendantOccupation}
                    onChange={(e) => setDefendantOccupation(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="defendantIdentificationProof">Identification Proof</label>
                  <input
                    type="file"
                    id="defendantIdentificationProof"
                    onChange={handleFileUpload2}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                    <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                </div>

                <h1>Plaintiff Lawyer Details</h1>
                <div className="input-container"> 
                    <label htmlFor="name">Name</label> 
                    <input type="text" id="name" name="name" 
                    value={lawyername} 
                    onChange={(e) => setLawyerName(e.target.value)} />
                </div> 

                <div className="input-container"> 
                    <label htmlFor="residentialAddress">Residential Address</label> 
                    <input type="text" id="residentialAddress" name="residentialAddress"
                    value={lawyeraddress}
                    onChange={(e) => setLawyerAddress(e.target.value)} />
                </div> 

                <div className="input-container"> 
                    <label htmlFor="phoneNumber">Phone Number</label> 
                    <input type="text" id="phoneNumber" name="phoneNumber" 
                    value={lawyerphone} 
                    onChange={(e) => setLawyerPhone(e.target.value)} />
                </div> 

                <div className="input-container"> 
                    <label htmlFor="email">Email Address</label> 
                    <input type="email" id="email" name="email" 
                    value={lawyeremail} 
                    onChange={(e) => setLawyerEmail(e.target.value)} /> 
                </div> 

                <div className="input-container"> 
                    <label htmlFor="lawyerID">Lawyer ID</label> 
                    <input type="text" id="lawyerID" name="lawyerID" 
                    value={lawyerid} 
                    onChange={(e) => setLawyerId(e.target.value)} /> 
                </div>

                <div className="input-container">
                    <label htmlFor="generalID">General ID</label>
                    <input
                        type="file"
                        id="lawyerIdentification"
                        onChange={handleFileUpload3}
                        accept=".pdf,.jpg,.jpeg,.png"
                      /> 
                      {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                        <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                </div> 

                <div className="input-container"> 
                    <label htmlFor="licenseID">Lawyer License ID</label> 
                    <input 
                    type="file" 
                    id="lawyerlicense" 
                    onChange={handleFileUpload4} 
                    accept='.pdf,.jpg,.jpeg,.png'
                    /> 
                    {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                        <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                </div> 

                <h1>Defendent Lawyer Details</h1>
                <div className="input-container"> 
                    <label htmlFor="name">Name</label> 
                    <input type="text" id="name" name="name" 
                    value={dlawyername} 
                    onChange={(e) => setDLawyerName(e.target.value)} />
                </div> 

                <div className="input-container"> 
                    <label htmlFor="residentialAddress">Residential Address</label> 
                    <input type="text" id="residentialAddress" name="residentialAddress"
                    value={dlawyeraddress}
                    onChange={(e) => setDLawyerAddress(e.target.value)} />
                </div> 

                <div className="input-container"> 
                    <label htmlFor="phoneNumber">Phone Number</label> 
                    <input type="text" id="phoneNumber" name="phoneNumber" 
                    value={dlawyerphone} 
                    onChange={(e) => setDLawyerPhone(e.target.value)} />
                </div> 

                <div className="input-container"> 
                    <label htmlFor="email">Email Address</label> 
                    <input type="email" id="email" name="email" 
                    value={dlawyeremail} 
                    onChange={(e) => setDLawyerEmail(e.target.value)} /> 
                </div> 

                <div className="input-container"> 
                    <label htmlFor="lawyerID">Lawyer ID</label> 
                    <input type="text" id="lawyerID" name="lawyerID" 
                    value={dlawyerid} 
                    onChange={(e) => setDLawyerId(e.target.value)} /> 
                </div>

                <div className="input-container">
                  <label htmlFor="generalID">General ID</label>
                  <input
                    type="file"
                    id="lawyerIdentification"
                    onChange={handleFileUpload5}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                    <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p> 

                </div>

                <div className="input-container">
                  <label htmlFor="licenseID">Lawyer License ID</label>
                  <input
                    type="file"
                    id="lawyerlicense"
                    onChange={handleFileUpload6}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                    <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p> 

                </div>
                <h1>Case Details</h1>
      
                <div id='caseDetails' className="input-group">
                  <label htmlFor="nature">Nature of the case</label>
                  <div>
                    <select name="nature" id="nature" value={nature} onChange={handleChange1}>
                      <option value="Civil">Civil</option>
                      <option value="Criminal">Criminal</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Administrative">Administrative</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Employment">Employment</option>
                      <option value="Constitutional ">Constitutional </option>
                      <option value="Environmental ">Environmental </option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="statementOfFacts">Statement of Facts</label>
                  <div>
                    <textarea
                      id="statementOfFacts"
                      name="statementOfFacts"
                      value={statementOfFacts}
                      onChange={handleChange2}
                      rows={5}
                    ></textarea>
                  </div>
                </div>

                <h1>Documentary Evidence</h1>

                <div id ='documentaryEvidence'className="input-group">
                  <label htmlFor="supportingdoc">Supporting Documents</label>
                  <div>
                    <input
                      type="file"
                      id="supportingdocevidence"
                      onChange={handleFileUpload8}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                    <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="officialdoc">Official Documents</label>
                  <div>
                    <input
                      type="file"
                      id="officialdocevidence"
                      onChange={handleFileUpload7}
                      accept=".pdf,.jpg,.jpeg,.png"
                    />
                    {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                    <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                  </div>
                </div>
                <h1>Legal Grounds</h1>
                <div id='legalGrounds' className="input-group">
                    <label htmlFor="legalprovisions" >Legal Provisions</label>
                    <div>
                    <textarea
                      id="legalprovisions"
                      name="legalprovisions"
                      value={legalprovisions}
                      onChange={handleChange3}
                      rows={5}
                    ></textarea>
                  </div>
                </div>
                <div className="input-group">
                    <label htmlFor="legalarguments" >Legal Arguments</label>
                    <div>
                    <textarea
                      id="legalargs"
                      name="legalargs"
                      value={legalargs}
                      onChange={handleChange4}
                      rows={5}
                    ></textarea>
                  </div>
                </div>
                <h1>Jurisdiction and Relief Sought</h1>
                <div id='jurisdictionAndRelief' className="input-group">
                  <label htmlFor="courtdetails">Court Details</label>
                  <div>
                    <select name="courtdetails" id="courtdetails" value={courtname} onChange={handleChange5}>
                      <option value="Civil">Civil</option>
                      <option value="Criminal">Criminal</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Administrative">Administrative</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Employment">Employment</option>
                      <option value="Constitutional ">Constitutional </option>
                      <option value="Environmental ">Environmental </option>
                    </select>
                  </div>
                  <label htmlFor="remedy">Remedy Sought</label>
                  <div>
                    <select name="remedy" id="remedy" value={remedy} onChange={handleChange6}>
                      <option value="Civil">Civil</option>
                      <option value="Criminal">Criminal</option>
                      <option value="Family Law">Family Law</option>
                      <option value="Administrative">Administrative</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Employment">Employment</option>
                      <option value="Constitutional ">Constitutional </option>
                      <option value="Environmental ">Environmental </option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="outcomes">Desired Outcomes</label>
                  <div>
                    <textarea
                      id="desiredoutcome"
                      name="desiredoutcome"
                      value={desiredoutcome}
                      onChange={handleChange7}
                      rows={5}
                    ></textarea>
                  </div>
                </div>

                <h1>Fees and Stamps</h1>
                <div id='feesAndStamps' className="input-group">
                <label>Party Type</label>
                <div>
                    <label>
                    <input
                      type="radio"
                      value="Plaintiff"
                      checked={partyType === 'Plaintiff'}
                      onChange={() => setPartyType('Plaintiff')}
                    />
                    Plaintiff
                    </label>
                    <label>
                    <input
                      type="radio"
                      value="Defendant"
                      checked={partyType === 'Defendant'}
                      onChange={() => setPartyType('Defendant')}
                    />
                    Defendant
                    </label>
                    <label>
                    <input
                      type="radio"
                      value="Both"
                      checked={partyType === 'Both'}
                      onChange={() => setPartyType('Both')}
                    />
                    Both
                    </label>
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="documentName">Document Name</label>
                    <div>
                      <input
                        type="text"
                        id="documentName"
                        value={documentName}
                        onChange={(e) => setDocumentName(e.target.value)}
                      />
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="documentUpload">Upload Document</label>
                    <div>
                      <input
                        type="file"
                        id="documentUpload"
                        onChange={handleDocumentUpload}
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                      <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                    </div>
                </div>


                <div className="input-group">
                  <button type="button" onClick={handleAddDocument}>
                    Add Document
                  </button>
                </div>

                {/* Display additional documents */}
                {additionalDocuments.length > 0 && (
                  <div>
                    <h2>Additional Documents</h2>
                    <ul>
                      {additionalDocuments.map((doc, index) => (
                        <li key={index}>
                          {`${doc.name} - ${doc.type}`}
                        </li>
                         ))}
                    </ul>
                </div>
                )}
                <h1>Affidavits & Notices</h1>
                <div id='affidavitsAndNotices' className='input-group'>
                    <label htmlFor="affidavits">Affidavits</label>
                    <div>
                    <input
                        type="file"
                        id="affidavit"
                        onChange={handleFileUpload9}
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                      <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                    </div>
                </div> 
                <div className='input-group'>
                    <label htmlFor="notices">Notices</label>
                    <div>
                    <input
                        type="file"
                        id="notices"
                        onChange={handleFileUpload10}
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                      <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                    </div>
                </div>
                <h1>Power of Attorney</h1>
                <div id='powerofattorney' className='input-group'>
                    <label htmlFor="powerofattorney">Power of Attorney</label>
                    <div>
                    <input
                        type="file"
                        id="powerofattorney"
                        onChange={handleFileUpload11}
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                      <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                    </div>
                </div>
                <h1>Case Registration Form</h1>
                <div id='caseregs' className='input-group'>
                    <label htmlFor="casereg">Power of Attorney</label>
                    <div>
                    <input
                        type="file"
                        id="casereg"
                        onChange={handleFileUpload12}
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      {fileSizeError && <p style={{ color: 'red' }}>{fileSizeError}</p>}
                      <p style={{ fontSize: '0.8em', color: 'gray' }}>Max file size: 25 MB</p>
                    </div>
                </div>    
              <button type="submit">Submit</button>             
            </form>

    </div>  
    );   
};      
export default RegistrationForm;
