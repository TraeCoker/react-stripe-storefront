
const ContactForm = () => {
  return (
    <section className="section-contact">
        <div className="row">
          <div className="contact">
            <div className="contact__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">
                    Contact us!
                  </h2>
                </div>

                <div className="form__group">
                  <input type="text" className="form__input" placeholder="Full Name" id="name" required />
                  <label htmlFor="name" className="form__label">Full Name</label>
                </div>

                <div className="form__group">
                  <input type="email" className="form__input" placeholder="Email address" id="email" required />
                  <label htmlFor="email" className="form__label">Email Address</label>
                </div>

                <div className="form__group">
                  <input type="text" className="form__input" placeholder="Subject" id="subject" required />
                  <label htmlFor="subject" className="form__label">Subject</label>
                </div>

                <div className="form__group">
                  <textarea  className="form__input" placeholder="Message" id="message" required />
                  <label htmlFor="message" className="form__label">Message</label>
                </div>

                <div className="form__group">
                  <button className="btn btn--secondary">Send &rarr;</button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
    </section>
  )
}

export default ContactForm
