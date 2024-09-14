import './styles.css';

export default function Home() {
    return (
        <div className='home-page'>
            <header>
                <h1>Bem-vindo à Página dos Cachorros!</h1>
                <nav>
                    <ul>
                        <li><a href="#about">Sobre Nós</a></li>
                        <li><a href="#gallery">Galeria de Fotos</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="welcome">
                    <h2>Os Cachorros mais aleatórios do mundo!</h2>
                    <img src="https://tudosobrecachorro.wordpress.com/wp-content/uploads/2014/09/cachorro-fofo-009.jpg" alt="Imagem de um cachorro fofo" className="dog-image" />
                    <span>Para continuar, favor inserir um número do seu cartão de crédito</span>
                    <button className="continue-button">Continuar</button>
                </section>
                <section id="about">
                    <h2>Sobre Nós</h2>
                    <p>Somos apaixonados por cachorros e dedicamos este site para compartilhar informações, fotos e histórias sobre nossos amigos peludos. Aqui você encontrará tudo o que precisa saber sobre cuidados, raças, treinamento e muito mais!</p>
                </section>
                <section id="gallery">
                    <h2>Galeria de Fotos</h2>
                    <div className="gallery">
                        <img src="https://www.mundoecologia.com.br/wp-content/uploads/2019/12/Cachorros-Mais-Fofos-do-Mundo-2.jpg" alt="Cachorro 1" />
                        <img src="https://2.bp.blogspot.com/-csifJ69D_wU/Uq4SJczC2VI/AAAAAAAB-PU/hMTaDtF5GXI/s1600/c%25C3%25A3es+fofos+5.jpg" alt="Cachorro 2" />
                        <img src="https://i2.wp.com/petcaramelo.com/wp-content/uploads/2018/06/chow-chow-cachorro-da-lingua-roxa.jpg?fit=680%2C598&ssl=1" alt="Cachorro 3" />
                    </div>
                </section>
                <section id="blog">
                    <h2>Blog</h2>
                    <article>
                        <h3>Como cuidar do seu cachorro</h3>
                        <p>Cuidar de um cachorro envolve muito amor e dedicação. Aqui estão algumas dicas para garantir que seu amigo peludo esteja sempre feliz e saudável...</p>
                        <a href="#">Leia mais</a>
                    </article>
                    <article>
                        <h3>As raças mais populares</h3>
                        <p>Existem muitas raças de cachorros, cada uma com suas características únicas. Descubra quais são as raças mais populares e suas peculiaridades...</p>
                        <a href="#">Leia mais</a>
                    </article>
                </section>
                <section id="contact">
                    <h2>Contato</h2>
                    <p>Tem alguma dúvida ou quer compartilhar uma história? Entre em contato conosco!</p>
                    <form>
                        <label for="name">Nome:</label>
                        <input type="text" id="name" name="name" required />
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label for="message">Mensagem:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </section>
            </main>
            <footer>
                <p>© 2024 Página dos Cachorros. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

