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
      <form onSubmit={formHandler}>
        <div>
          <label>Name
            <input type='text' name='name' value={nameInput} onChange={nameChange} />
          </label>
        </div>
        <div>
          <label>Email
            <input type='text' name='email' value={emailInput} onChange={emailChange} />
          </label>
        </div>
        <div>
          <label>Message</label>
          <textarea placeholder="Please leave your message here!" name = 'message' value={messageInput} onChange={messageChange}>
          </textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
