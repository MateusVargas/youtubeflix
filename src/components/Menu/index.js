import React, {useContext} from 'react'
import Logo from '../../assets/youtubeflix.png'
import './Menu.css'
import Button from '../Button'
import {Link} from 'react-router-dom'

import AuthContext from '../../contexts/auth'

const Menu = () => {

    const {signOut} = useContext(AuthContext)

    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="image"/>
            </Link>

            <button onClick={signOut}>Sair</button>

            <div>
            	<Button as={Link} className="LinkVideo" to='/cadastro/video'>Novo vídeo</Button>
            	<Button as={Link} className="LinkCategoria" to='/cadastro/categoria'>Nova categoria</Button>
        	</div>
        </nav>
    )
}

export default Menu