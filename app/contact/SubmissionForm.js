import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const SubmissionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [state, handleSubmit] = useForm("mpzgkpdo");

  if (state.succeeded) {
    setName('');
    setEmail('');
    setCategory('');
    return <p>Thanks for contacting!</p>;
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Do something with the form data
  //   console.log('Name:', name);
  //   console.log('Email:', email);
  //   console.log('Category:', category);

  //   // Reset form fields
  //   setName('');
  //   setEmail('');
  //   setCategory('');
  // };

  return (
    <div className="flex items-center justify-center w-auto h-2/3">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            className="inputForm text-md border-2 border-lColor bg-dColor rounded-xl px-3 py-2 w-full focus:drop-shadow-outGlow focus:border-lColor nocursor btn"
            type="text"
            id="name"
            placeholder='What should I call you?'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <input
            className="inputForm text-md border-2 border-lColor bg-dColor rounded-xl px-3 py-2 w-full focus:drop-shadow-outGlow focus:border-lColor nocursor btn"
            type="email"
            id="email"
            placeholder='Which email should I reply to?'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <select
            className="inputForm text-md text-lColor border-2 border-lColor bg-dColor rounded-xl px-3 py-2 w-full focus:drop-shadow-outGlow focus:border-lColor nocursor btn"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option className='text-lColor after:text-lrColor nocursor btn' value="">Which field would you want me to do?</option>
            <option className='text-lColor nocursor btn' value="IT">Information Technology</option>
            <option className='text-lColor nocursor btn' value="Photography">Photography</option>
            <option className='text-lColor nocursor btn' value="Design">Design</option>
          </select>
        </div>
        <button
          className="fixed submitButton text-md bg-lColor hover:bg-dColor text-dColor hover:text-lColor hover:drop-shadow-outGlow font-titleFont py-2 px-4 rounded-xl nocursor btn"
          type="submit"
          onClick={handleSubmit}
        >
          Let it goo ~
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;
