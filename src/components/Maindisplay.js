import React from 'react'
import styled from 'styled-components'
import Carddiv from './card'
import Chartdiv from './chartdiv'
import Transactionsdiv from './transactionsdiv'

function Maindisplay() {
    return (
        <Display>
            <div style={{width:"35%"}} className="width">
            <Chartdiv />
            <Carddiv />
            </div>
            <div className="width" style={{width:"35%",marginTop:"2rem",marginRight:'2rem',background:"#212529",borderRadius:".2rem"}}>
             <Transactionsdiv />
            </div>
        </Display>
    )
}

const Display = styled.div`
min-height: 100vh;
width: 80%;
background: #04040a; 
color: #fff;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width:768px){
    flex-direction: column;
    justify-content: space-around;
    width:100%;

    .width{
     width:100% ;
    }
}
`

export default Maindisplay
