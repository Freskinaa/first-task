import React, { useState } from 'react';
import './contact.scss';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Emri: ${name}\nEmail: ${email}`);
    setName(''); 
    setEmail(''); 
  };

  return (
    <div className='page'>
      <div className='container'>
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit} className='contact-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input 
              type='text' 
              id='name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder='Enter your name'
              required 
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input 
              type='email' 
              id='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder='Enter your email'
              required 
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
