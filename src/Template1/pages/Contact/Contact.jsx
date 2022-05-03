import './Contact.css';
import Map from '../../components/Map/Map';
import PageHeading from '../../components/PageHeading/PageHeading';
import ContactForm from '../../components/ContactForm/ContactForm';

function Contact() {
    return (
        <div className="contact-container">
            <PageHeading pageHeading="contact" />
            <p className="contact-page-head">Get in touch</p>
            <Map />
            <div className="contact-form-wrapper">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;
