import './ContactForm.css';

function ContactForm() {
  return (
    <form className='contact-form'>
      <input
        type='text'
        id='name'
        placeholder='Enter name'
        className='input input-name'
      />

      <input
        type='email'
        id='email'
        placeholder='Enter email'
        className='input input-email'
      />
      <textarea
        id='message'
        rows='3'
        placeholder='Enter message'
        className='input input-text'
      ></textarea>
      <button type='submit' className='contact-submit-button'>
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
