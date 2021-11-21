import React from 'react'
import styled from 'styled-components'
import Sidebar from './sidebar'
import Maindisplay from './Maindisplay'

function Mainpage() {
    return (
        <Main>
            <Sidebar />
            <Maindisplay />
        </Main>
    )
}

const Main = styled.div`
width: 100%;
display: flex;
align-items: center;
min-height: 100vh;

@media (max-width:768px){
    flex-direction: column;
}
`

export default Mainpage
