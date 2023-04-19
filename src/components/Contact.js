// import { useState } from 'react';

import Tech from './socialIcons';
import ContactInfo from './ContactInfo';
import Message from './message';


const Contact = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [subject, setSubject] = useState('');
  // const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Code to handle form submission
  // };

  return (
    <div className="container mx-auto py-8 px-4" id='contact'>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Social Profiles</h2>

              <Tech/>



</div></div>
          <div className="flex items-center justify-center mt-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
             

              <ContactInfo/>
            </div>
          </div>
        </div>
        {/* <div className="md:w-1/2 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg">
  <h2 className="text-2xl font-semibold mb-4">Leave a Message</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border border-gray-400 p-2 w-full rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="border border-gray-400 p-2 w-full rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
        Subject
      </label>
      <input
        type="text"
        id="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Enter your subject"
        className="border border-gray-400 p-2 w-full rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
        Message
      </label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        className="border border-gray-400 p-2 w-full h-48 rounded-lg transition duration-500 ease-in-out hover:border-blue-500"
        required  ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </div>  </form>
</div> */}

<Message/>

                </div>
                </div>
                );
                };
                
                export default Contact;