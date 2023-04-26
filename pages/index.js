import NavBar from '@components/NavBar'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
      <div className="container">
      <div className="header">
      <title>Home</title>
      <NavBar />
    </div>
        <main>
        <Header />
        <div>
            <article class="text-center">
              <h1>No PAIN, no GAIN</h1>
              <div>
                <p>" If you GIVE UP, remember the REASON you started! "</p>
                <button><a class="nav-link" href="/Gallery">Discover More</a></button>
              </div>
            </article>
            <div class="news">
                <h2>Work Experience</h2>
                <article>
                  <h3>McDonald's - 2021 - 2022</h3>
                  <p>Increase communication experience and develop English at work together with co-worker.</p>
                  <p>Work as a team to create professionalism in work as well as listen to opinions from customers.</p>
                </article>
                <article>
                  <h3>CO-OP (APPLIED PROJECTS COURSE) - 2023 - Present</h3>
                  <p>Get to work as a team to plan and redesign a website for an Ontario business and get positive feedback along the way.</p>
                </article>
                

                <div class="ranks">
                  <article>
                  <img
                  src="https://media.istockphoto.com/id/1295900106/es/foto/cient%C3%ADficos-de-datos-programador-masculino-que-utiliza-el-ordenador-portátil-analizando-y.jpg?s=612x612&w=0&k=20&c=ihG1nb1xTqsl8l2_sOTjtuSiIPGb-JfJ0Zmc4WEc19k="
                  class="w-50 shadow-1-strong rounded mb-4"
                  alt=""
                  />
                    <div>
                      <span>01</span>
                      <h4>Web Development</h4>
                      <p>What would you like, I meet everyone's needs !</p>
                    </div>
                  </article>
                  <article>
                  <img
                  src="https://media.istockphoto.com/id/1069861272/es/foto/artista-digital-trabajando-en-casa.jpg?s=612x612&w=0&k=20&c=7wdjo4fzW06uU-P-OqcygpaHo8Bcrh8uNVxXKSmqk4w="
                  class="w-50 shadow-1-strong rounded mb-4"
                  alt=""
                  />
                    <div>
                      <span>02</span>
                      <h4>Graphic Design</h4>
                      <p>The creativity and dynamism of youth.</p>
                    </div>
                  </article>
                  <article>
                  <img
                  src="https://media.istockphoto.com/id/1191609321/es/foto/diseño-de-logotipos-de-bocetos-de-diseño-de-diseño.jpg?s=612x612&w=0&k=20&c=qldzuMu0qEjRlQ1NsGkRdHwXI-UCH4f-JduKNYHrU58="
                  class="w-50 shadow-1-strong rounded mb-4"
                  alt=""
                  />
                    <div>
                      <span>03</span>
                      <h4>Brading Design</h4>
                      <p>Design based on the client's brand, until you are satisfied.</p>
                    </div>
                  </article>
                </div>
            </div>
        </div>
        </main>
        <Footer />
      </div>
    )
  }