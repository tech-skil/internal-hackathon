import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CareerForm = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    interest: '',
    careerGoal: '',
    expertise: '',
    skills: [],
    industry: '',
    experience: '',
    education: '',
    certifications: ''
  });

  const navigate = useNavigate();

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleChange = (e) => {
    if (e.target.name === 'skills') {
      const skills = Array.from(e.target.selectedOptions, option => option.value);
      setFormData({ ...formData, skills });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleNext = () => {
    if (userType) {
      setStep(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { userType, ...formData });
    navigate('/quiz', { state: { userType, ...formData } });
  };

  const renderUserTypeSelection = () => (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Select your category:
      </label>
      <div className="flex justify-center space-x-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="userType"
            value="student"
            checked={userType === 'student'}
            onChange={handleUserTypeChange}
          />
          <span className="ml-2">Student</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="userType"
            value="itProfessional"
            checked={userType === 'itProfessional'}
            onChange={handleUserTypeChange}
          />
          <span className="ml-2">IT Professional</span>
        </label>
        <label className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio"
            name="userType"
            value="nonITProfessional"
            checked={userType === 'nonITProfessional'}
            onChange={handleUserTypeChange}
          />
          <span className="ml-2">Non IT Professional</span>
        </label>
      </div>
    </div>
  );

  const renderFormField = (name, label, type = 'text', options = null) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      {type === 'select' ? (
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id={name}
          type={type}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder={`Enter your ${label.toLowerCase()}`}
        />
      )}
    </div>
  );

  const renderStudentFields = () => (
    <>
      {renderFormField('interest', 'Interest')}
      {renderFormField('careerGoal', 'Career Goal')}
      {renderFormField('education', 'Current Education Level', 'select', [
        'High School', 'Bachelor\'s', 'Master\'s', 'PhD'
      ])}
    </>
  );

  const renderITProfessionalFields = () => (
    <>
      {renderFormField('interest', 'Interest')}
      {renderFormField('expertise', 'Expertise')}
      {renderFormField('experience', 'Years of Experience', 'number')}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
          Skills (select multiple)
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="skills"
          name="skills"
          multiple
          value={formData.skills}
          onChange={handleChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="react">React</option>
          <option value="nodejs">Node.js</option>
          <option value="java">Java</option>
          <option value="csharp">C#</option>
          <option value="devops">DevOps</option>
          <option value="cloud">Cloud Computing</option>
        </select>
      </div>
    </>
  );

  const renderNonITProfessionalFields = () => (
    <>
      {renderFormField('interest', 'Interest')}
      {renderFormField('industry', 'Industry', 'select', [
        'Healthcare', 'Finance', 'Education', 'Manufacturing', 'Retail', 'Others'
      ])}
      {renderFormField('expertise', 'Area of Expertise')}
      {renderFormField('experience', 'Years of Experience', 'number')}
      {renderFormField('education', 'Highest Education Level', 'select', [
        'High School', 'Bachelor\'s', 'Master\'s', 'PhD'
      ])}
      {renderFormField('certifications', 'Relevant Certifications')}
    </>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {step === 1 && (
          <>
            {renderUserTypeSelection()}
            <div className="flex items-center justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {userType === 'student' && renderStudentFields()}
            {userType === 'itProfessional' && renderITProfessionalFields()}
            {userType === 'nonITProfessional' && renderNonITProfessionalFields()}
            <div className="flex items-center justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default CareerForm;