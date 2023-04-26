import NavBar from '@components/NavBar'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact () {
    return (
    <div>
      <div className="container">
      <div className="header">
      <title>Contact</title>
      <NavBar />
    </div>
      <div class="contact-form-wrapper d-flex justify-content-center">
        <form action="#" class="contact-form">
          <h5 class="title">Contact Me</h5>
          <p class="description">Feel free to contact us if you need any assistance, any help or another question.
          </p>
          <div>
            <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
          </div>
          <div>
            <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
          </div>
          <div>
            <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
          </div>
          <div class="submit-button-wrapper">
            <input type="submit" value="Send"/>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  </div>
  );
}
  
  