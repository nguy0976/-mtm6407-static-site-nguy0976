import NavBar from '@components/NavBar'
import Header from '@components/Header'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Gallery() {
    return (
      <div className="container">
      <div className="header">
      <title>Gallery</title>
      <NavBar />
    </div>
        <main>
        <Header />
        <br></br>
        <div class="row">
            <h1 class="text-center">Welcome To My Gallery</h1>
            <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                src="https://media.istockphoto.com/id/1295900106/es/foto/cient%C3%ADficos-de-datos-programador-masculino-que-utiliza-el-ordenador-portátil-analizando-y.jpg?s=612x612&w=0&k=20&c=ihG1nb1xTqsl8l2_sOTjtuSiIPGb-JfJ0Zmc4WEc19k="
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
                />

                <img
                src="https://media.istockphoto.com/id/1191609321/es/foto/diseño-de-logotipos-de-bocetos-de-diseño-de-diseño.jpg?s=612x612&w=0&k=20&c=qldzuMu0qEjRlQ1NsGkRdHwXI-UCH4f-JduKNYHrU58="
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
                />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                src="https://media.istockphoto.com/id/834741464/es/foto/fotos-de-ocio.jpg?s=612x612&w=0&k=20&c=qXjzDP2gEt6uY-2LRgO1rnorcfLNN-Yrxs6GIS2Vjas="
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
                />

                <img
                src="https://media.istockphoto.com/id/1069861272/es/foto/artista-digital-trabajando-en-casa.jpg?s=612x612&w=0&k=20&c=7wdjo4fzW06uU-P-OqcygpaHo8Bcrh8uNVxXKSmqk4w="
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
                />
            </div>

            <div class="col-lg-4 mb-4 mb-lg-0">
                <img
                src="https://media.istockphoto.com/id/1302423375/es/foto/el-desarrollador-de-ux-de-primer-plano-y-el-diseñador-de-interfaz-de-usuario-utilizan-una.jpg?s=612x612&w=0&k=20&c=hV_fH0Y8uJL6B18TUg2XWjAJ-VASgYZxZpdgR-srYhg="
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
                />

                <img
                src="https://media.istockphoto.com/id/955148158/es/vector/hombre-guapo-está-trabajando-en-su-portátil-interior-de-la-oficina-moderna-con-los-iconos-de.jpg?s=612x612&w=0&k=20&c=mcOF--pc9RrMIe4C6T0GwKKnOtiYI_-xzBQGUcYeKAQ="
                class="w-100 shadow-1-strong rounded mb-4"
                alt=""
                />
            </div>
            </div>
        </main>
        <Footer />
      </div>
    )
  }