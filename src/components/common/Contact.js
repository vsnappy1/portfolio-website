import {useState} from "react";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [messageTitle, setMessageTitle] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let handleSubmit = async (e) => {
        if(message.length < 10){
            alert('Please enter message from 10 - 500 characters!');
            return false;
        }
        e.preventDefault();
        setIsLoading(true);
        try {
            let res = await fetch("https://rjdwb5dcae.execute-api.us-east-1.amazonaws.com/prod/ContactForm", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                messageTitle: messageTitle,
                message: message,
                phone: phoneNumber
              }),
            });
            await res.json();
            if (res.status === 200) {
                setName("");
                setEmail("");
                setPhoneNumber("");
                setMessageTitle("");
                setMessage("");
                setStatus("Success!");
                setIsLoading(false);
            } else {
                setStatus("Error!");
                setIsLoading(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="contact-area page-section scroll-content" id="contact">
            <div className="custom-container">
                <div className="contact-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-dollar-sign"></i> contact
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">Let's Work
                            <span>Together!</span></h1>
                    </div>
                    <h3 className="scroll-animation" data-animation="fade_from_bottom">contact@vishalkumar.us</h3>
                    <p id="required-msg">* Marked fields are required to fill.</p>

                    <form className="contact-form scroll-animation" data-animation="fade_from_bottom" onSubmit={handleSubmit}>
                        { (status === "Success!") ?
                            <div className="alert alert-success messenger-box-contact__msg" role="alert">
                                <strong>Success!</strong> Your message was sent successfully!
                            </div> :
                            (status === "Error!") &&
                                <div className="alert alert-error" role="alert">
                                    <strong>Failed!</strong> Your message failed to send!
                                </div>
                        }
                        
                        <div className="row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="full-name">full Name <sup>*</sup></label>
                                    <input type="text" name="full-name" id="full-name"
                                        placeholder="Your Full Name" value={name} minLength={3} maxLength={50} onChange={(e) => setName(e.target.value)} required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="email">Email <sup>*</sup></label>
                                    <input type="email" name="email" id="email"
                                        placeholder="Your email adress" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="phone-number">phone (Optional)</label>
                                    <input type="phone" name="phone-number" id="phone-number"
                                        placeholder="Your number phone" maxLength={10} pattern="[0-9]{10}" title="Enter 10-digit phone number!" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <label htmlFor="subject">subject <sup>*</sup></label>
                                    <input type="text" name="messageTitle" id="subject"
                                        placeholder="Your Subject" value={messageTitle} minLength={10} maxLength={100}  onChange={(e) => setMessageTitle(e.target.value)} required/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group">
                                    <label htmlFor="message">message <sup>*</sup></label>
                                    <textarea name="message" id="message"
                                        placeholder="Write your message here" value={message} maxLength="500" title="Enter 10 - 500 characters" onChange={(e) => setMessage(e.target.value)} required></textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="input-group submit-btn-wrap">
                                    <button className="theme-btn" name="submit" type="submit" id="submit-form" disabled={isLoading}>send
                                        message</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;