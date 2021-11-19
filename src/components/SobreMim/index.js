/* eslint-disable react/jsx-no-target-blank */
import './style.scss'

const SobreMim = () => {

    return (
        <>
            <section id="sobre-mim">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4">Sobre mim</h2>
                    <p>Oii, meu nome é Giselle Piasetzki, estou em transição de carreira do Direito para a área da tecnologia. Atualmente desenvolvimento full-stack, mas desejo me aprimorar no front-end.</p>
                </div>
            </div>
            </section>
            <section class="social" id="social">
            <div className="container">
                <div className="row">
                    <div className="col">
                <a href="https://www.linkedin.com/in/gisellepiasetzki/" target="_blank" class="social-col">
               <div class="icon-img">
                  <i class='bx bxl-linkedin'></i>
               </div>
               <h3>Linkedin</h3>
            </a>
            </div>
            <div className="col">
            <a href="https://github.com/GisellePiasetzki" target="_blank" class="social-col">
               <div class="icon-img">
                  <i class='bx bxl-github'></i>
               </div>
               <h3>Github</h3>
            </a>
            </div>
            <div className="col">
            <a href="mailto:giselle.piasetzki@gmail.com" class="social-col">
               <div class="icon-img">
                  <i class='bx bx-envelope'></i>
               </div>
               <h3>E-mail</h3>
            </a>
            </div>

            </div>

            </div>
            </section>

        </>
    )

}

export default SobreMim;
