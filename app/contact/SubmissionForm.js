import { useState } from 'react';
import { useForm, ValidationError } from "@formspree/react";

const SubmissionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const [state, handleSubmit] = useForm("xbjvqgov");
  const [formState, submit] = useForm("process.env.xjvqjyrb");

  return (
    <div className="flex items-center justify-center w-auto h-2/3">
      <form onSubmit={handleSubmit} action="https://formspree.io/f/xbjvqgov" method="POST">
        <div className="mb-4">
          <input
            className="inputForm text-md border-2 border-lColor bg-dColor rounded-xl px-3 py-2 w-full focus:drop-shadow-outGlow focus:border-lColor nocursor btn"
            type="text"
            id="name"
            name="name"
            placeholder='What should I call you?'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>
        <div className="mb-4">
          <input
            className="inputForm text-md border-2 border-lColor bg-dColor rounded-xl px-3 py-2 w-full focus:drop-shadow-outGlow focus:border-lColor nocursor btn"
            type="email"
            id="email"
            name='email'
            placeholder='Which email should I reply to?'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <select
            className="inputForm text-md text-lColor border-2 border-lColor bg-dColor rounded-xl px-3 py-2 w-full focus:drop-shadow-outGlow focus:border-lColor nocursor btn"
            id="category"
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option className='text-lColor after:text-lrColor nocursor btn' value="">Which field would you want me to do?</option>
            <option className='text-lColor nocursor btn' value="IT">Information Technology</option>
            <option className='text-lColor nocursor btn' value="Photography">Photography</option>
            <option className='text-lColor nocursor btn' value="Design">Design</option>
          </select>
          <ValidationError prefix="Category" field="category" errors={state.errors} />
        </div>
        <button
          className="fixed submitButton text-md bg-lColor hover:bg-dColor text-dColor hover:text-lColor hover:drop-shadow-outGlow font-titleFont py-2 px-4 rounded-xl nocursor btn"
          type="submit"
          disabled={state.submitting}
        >
          Let it goo ~
        </button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
};

export default SubmissionForm;
