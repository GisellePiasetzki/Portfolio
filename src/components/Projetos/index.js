/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
import './style.scss';
import { projetos } from '../../projetos';


export default function Projetos() {
    return (
        <section id="projetos" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">

                    <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                        Meus projetos
                    </h2>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Meus principais projetos
                    </p>
                </div>
                <div className="container">
                    <div className="row">

                            {projetos.map((projetos) => (
                                <div class="col">
                                <a
                                    href={projetos.link}
                                    className="sm:w-1/2 w-100 p-4" target="_blank">
                                    <div className="card card-margin mb-2">
                                    <div className="card-header no-border">
                                        <img
                                            alt="imagem-projeto"
                                            className="img-fluid"
                                            src={projetos.imagem}
                                        />
                                        <div className="card-body">
                                            <h2>
                                                {projetos.titulo}
                                            </h2>
                                            <p className="leading-relaxed">{projetos.descricao}</p>
                                        </div>
                                    </div>
                                    </div>
                                </a>
                                </div>
              
            ))}
   
                    </div>
                </div>
            </div>
      </section >
    );
}