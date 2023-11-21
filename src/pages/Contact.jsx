import { useState } from 'react';

export default function Contact(props) {
  let [nameInput, setName] = useState('');
  let [emailInput, setEmail] = useState('');
  let [messageInput, setMessage] = useState('');
  let [errorMessage, setError] = useState('');

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

  const nameBlur = (event) => {
    if (!event.target.value){
      setError('Name is required to leave a message!')
    } else{
      setError('')
    }
  };

  const emailBlur = (event) => {
    const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email= event.target.value;
    if (!regex.test(email)){
      setError('Please enter a valid email address!')
    } else{
      setError('')
    }
  };

  const messageBlur = (event) => {
    if (!event.target.value){
      setError('Please refrain from sending empty messages...')
    } else{
      setError('')
    }
  };

  return (
    <>
      <h2>Contact Me</h2>
      <form onSubmit={formHandler} className='container' >
        <div className='m-3 row'>
          <label className='p-2'>Name</label>
          <input className='p-2 custom-input' type='text' name='name' value={nameInput} onChange={nameChange} onBlur={nameBlur} />
        </div>
        <div className='m-3 row'>
          <label className='p-2'>Email</label>
          <input className='p-2 custom-input' type='text' name='email' value={emailInput} onChange={emailChange} onBlur={emailBlur}/>
        </div>
        <div className='m-3 row'>
          <label className='p-2'>Message</label>
          <textarea className='p-2 custom-input' placeholder="Please leave your message here!" name='message' value={messageInput} onChange={messageChange} onBlur={messageBlur}>
          </textarea>
        </div>
        { errorMessage ? (
          <p className='m-3 mt-5 alert alert-danger myAlert'> {errorMessage}</p>
        ) : ( <p></p>)
        }
        <div className='m-5'>
          <button className='p-2 custom-btn'>Submit</button>
        </div>
      </form>
    </>
  );
}
