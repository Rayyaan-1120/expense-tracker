import {createGlobalStyle} from 'styled-components'


export const Globalstyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
}

body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto,'sans serif';
}

input{
    padding: .9rem;
    border:1px solid #fff;
    border-radius: .3rem;
    font-size: 1rem;
    color:#fff;
    width: 100%;
    outline: transparent;
    background-color: transparent;
    margin: 1rem auto;
}

svg{
    cursor: pointer;
}

@media (max-width:768px){
    .width{
        width: 100%;
    }
}
`