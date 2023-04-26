import NavBar from '@components/NavBar'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
      <div className="container">
      <div className="header">
      <title>About</title>
      <NavBar />
    </div>
        <main>
        <Header />
        <br></br>
            <div className="row">
                <div className="col">
                <img className="img-fluid" src="/Subinn.jpg" alt="image cap"/>
                </div>
                <div className="col">
                    <h2>Subin Nguyen</h2>
                    <p>I am an international student from Vietnam, 
                        with a passion for media design, so I studied and 
                        graduated in Interactive Media Design at Algonquin College. 
                        With a passion for succession theory, I consider it a part of 
                        my life and follow my intense passion and would love to have 
                        the opportunity to be a small part of your team. Do not hesitate 
                        to contact me if you are interested and want to discuss!
                    </p>
                    <a className="btn text-white btn-dark"  href="/Contact" role="button">Contact Me</a>
                </div>
            </div>
        </main>
        <Footer />
      </div>
    )
  }