import './style.scss'

const Skills = () => {

    return (
        <>
            <section id="minhas-skills">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                        <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4">
                            Minhas Skills
                        </h2>
                        <div className="cards-container">
                            <div className="row">
                        
                        <div className="col">
                        <div class="skill-card">
                            <i class='bx bxl-html5'></i>
                        </div>
                        </div>
                        <div className="col">
                        <div class="skill-card">
                            <i class='bx bxl-css3'></i>
                        </div>
                        </div>
                        <div className="col">
                        <div class="skill-card">
                            <i class='bx bxl-javascript'></i>
                        </div>
                        </div>
                        </div>

                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;