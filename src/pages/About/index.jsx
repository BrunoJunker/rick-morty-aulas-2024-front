import './styles.css';

export default function About() {
    return (
        <div className='about-page'>
            <header>
                <h1>Sobre Nós</h1>
            </header>
            <main>
                <section id="introduction">
                    <h2>Só os melhores cachorros!</h2>
                    <p>Bem-vindo à nossa página dedicada aos melhores cachorros do mundo! Aqui você encontrará informações sobre diversas raças, dicas de cuidados e muito mais.</p>
                </section>
                <section id="breeds">
                    <h2>Raças Populares</h2>
                    <ul>
                        <li>Labrador Retriever</li>
                        <li>Golden Retriever</li>
                        <li>Bulldog Francês</li>
                        <li>Pastor Alemão</li>
                        <li>Poodle</li>
                    </ul>
                </section>
                <section id="gallery">
                    <h2>Galeria de Fotos</h2>
                    <div className="gallery">
                        <img src="https://petmeupet.com.br/wp-content/uploads/2022/07/golden-retriever-pet-meu-pet-home.jpg" alt="Cachorro 1" />
                        <img src="https://petmeupet.com.br/wp-content/uploads/2022/07/golden-retriever-pet-meu-pet-home.jpg" alt="Cachorro 2" />
                        <img src="https://petmeupet.com.br/wp-content/uploads/2022/07/golden-retriever-pet-meu-pet-home.jpg" alt="Cachorro 3" />
                    </div>
                </section>
                <section id="tips">
                    <h2>Dicas de Cuidados</h2>
                    <p>Mantenha seu cachorro saudável com essas dicas:</p>
                    <ul>
                        <li>Alimentação balanceada</li>
                        <li>Exercícios diários</li>
                        <li>Visitas regulares ao veterinário</li>
                        <li>Higiene adequada</li>
                    </ul>
                </section>
                <section id="testimonials">
                    <h2>Depoimentos</h2>
                    <div className="testimonial">
                        <p>"Meu Labrador é muito mais feliz depois que comecei a seguir as dicas deste site!" - João</p>
                    </div>
                    <div className="testimonial">
                        <p>"Adorei a seção de raças, me ajudou a escolher o cachorro perfeito para minha família." - Maria</p>
                    </div>
                </section>
                <section id="cta">
                    <span>Para continuar, favor inserir um número do seu cartão de crédito</span>
                    <button className="continue-button">Continuar</button>
                </section>
            </main>
            <footer>
                <p>© 2024 Página dos Cachorros. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
