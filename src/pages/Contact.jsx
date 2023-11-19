import { useState } from 'react';

export default function Contact(props) {
  let [nameInput, setName] = useState('');
  let [emailInput, setEmail] = useState('');
  let [messageInput, setMessage] = useState('');

  const formHandler = (event) => {
    event.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
  };

  const nameChange = (event) => {
    setName(event.target.value)
  };

  const emailChange = (event) => {
    setEmail(event.target.value)
  };
  const messageChange = (event) => {
    setMessage(event.target.value)
  };


  return (
    <>
      <h2>Contact Page</h2>
      <form onSubmit={formHandler} className='container' >
        <div className='m-3 row'>
          <label className='p-2'>Name</label>
          <input className='p-2 custom-input' type='text' name='name' value={nameInput} onChange={nameChange} />
        </div>
        <div className='m-3 row'>
          <label className='p-2'>Email</label>
          <input className='p-2 custom-input' type='text' name='email' value={emailInput} onChange={emailChange} />
        </div>
        <div className='m-3 row'>
          <label className='p-2'>Message</label>
          <textarea className='p-2 custom-input' placeholder="Please leave your message here!" name='message' value={messageInput} onChange={messageChange}>
          </textarea>
        </div>
        <div className='m-5'>
          <button className='p-2 custom-btn'>Submit</button>
        </div>
      </form>
    </>
  );
}
