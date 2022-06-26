import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import './about.scss'

function About() {
    
    return ( 
        <div className="body">
            <Header/>
            <main>
                <div className="container the__dev">
                    <div className="dev__pic">
                        <img src="https://github.com/caiohaag.png" alt="Caio Haag" />
                    </div>
                    <div className="dev__infos">
                        <h2>Caio Haag</h2>
                        <span className='dev__title'>Desenvolvedor front-end</span>

                        <h3>Principais competências</h3>
                        <ul className="languages">
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JAVASCRIPT</li>
                            <li>REACT JS</li>
                            <li>GIT</li>
                            <li>SEO</li>
                        </ul>
                        <h3>Experiências</h3>
                        <ul className='xp-list'>
                            <li className='xp'>2 anos como desenvolvedor front-end.</li>
                            <li className="xp">8 anos como empresário no ramo de eventos.</li>
                            <li className="xp">8 anos no setor de comunicação visual.</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
     );
}

export default About;