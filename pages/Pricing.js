import NavBar from '@components/NavBar'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Pricing() {
    return (
      <div className="container">
      <div className="header">
      <title>About</title>
      <NavBar />
    </div>
        <main>
        <Header />
        <div>
        <div class="container-fluid">
            <br></br>
            <div className='text-center'>
            <h1>Pricing</h1>
            <p>We always appreciate the quality of the products we bring to our customers, in addition, price is also a priority and put on the top of our working criteria. Your support and trust is the goal for us to strive and develop.</p>
            </div>
            <div class="container p-5">
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4">
                <div class="card card1 h-100">
                    <div class="card-body">
                    <br></br>
                    <h5 class="card-title">Web Development</h5>
                    <small class='text-muted'>Group</small>
                    <br></br>
                    <span class="h2">$120</span>/project
                    <br></br>
                    <div class="d-grid my-3">
                        <button class="btn btn-outline-dark btn-block">Select</button>
                    </div>
                    <ul>
                        <li>Particularly</li>
                        <li>Meticulous in each product</li>
                        <li>Creativity at work</li>   
                        <br></br>     
                    </ul>
                    </div>                  
                </div>
                </div>
                <div class="col-lg-4 col-md-12 mb-4">
                <div class="card card2 h-100">
                    <div class="card-body">
                    <br></br>
                    <h5 class="card-title">Digital Graphic Design</h5>
                    <small class='text-muted'>Personal</small>
                    <br></br>
                    <span class="h2">$80</span>/project
                    <br></br>
                    <div class="d-grid my-3">
                        <button class="btn btn-outline-dark btn-block">Select</button>
                    </div>
                    <ul>
                        <li>Particularly</li>
                        <li>Meticulous in each product</li>
                        <li>Creativity at work</li>  
                        <br></br>
                    </ul>
                    </div>
                </div>
                </div>
                <div class="col-lg-4 col-md-12 mb-4">
                <div class="card card3 h-100">
                    <div class="card-body">
                    <br></br>
                    <h5 class="card-title">Brading Design</h5>
                    <small class='text-muted'>Small Business</small>
                    <br></br>
                    <span class="h2">$90</span>/project
                    <br></br>
                    <div class="d-grid my-3">
                        <button class="btn btn-outline-dark btn-block">Select</button>
                    </div>
                    <ul>
                        <li>Particularly</li>
                        <li>Meticulous in each product</li>
                        <li>Creativity at work</li>  
                        <br></br>
                    </ul>
                    </div>
                </div>
                </div>
            </div>    
            </div>
            </div>
            </div>
        </main>
        <Footer />
      </div>
    )
  }