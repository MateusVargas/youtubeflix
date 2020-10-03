import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components'
import Logo from '../../assets/youtubeflix.png'

import './styles.css'

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    @media (min-width: 800px){
        padding-right: 12%;
        padding-left: 12%;
    }
`

const PageDefaultToLogin = ({children}) => {
    return(
        <>
            <nav className="menu-login">
                <img className="Logo" src={Logo} alt="image"/>
            </nav>

            <Main>
                {children}
            </Main>
            
            <Footer/>
        </>
    )
}

export default PageDefaultToLogin