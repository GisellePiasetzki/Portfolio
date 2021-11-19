/* eslint-disable jsx-a11y/alt-text */
import './style.scss';
import img from '../img/ilustra-giselle.png';


const Banner = () => {

    return (
        <>
            <section id="banner">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40" >
                    <div className="row">
                        <div className="col">
                            <div className="banner-conteúdo">
                                <h1> Hey, eu sou a Giselle Piasetzki </h1>
                                <p>Estudante de desenvolvimento full-stack</p>
                            </div>
                        </div>
                        <div className="col">
                                <img src={img} className="float"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;