import { Link } from 'react-router-dom'
import './styles.css'

export default function Header (){
    return (
        <header className='cabecalho'>
            <h1>Bem-vindo ao Dog API</h1>
            <nav>
                <ol>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/about">
                        <li>Sobre</li>
                    </Link>
                    <Link to="/rick-and-morty">
                        <li>Cachorros aleatorios!</li>
                    </Link>
                    
                </ol>
            </nav>
        </header>
       
    )
}