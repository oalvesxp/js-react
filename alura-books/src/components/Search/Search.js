import styled from "styled-components"
import Input from "../Input/Input.js"
import { useState } from "react"

const SearchContainer = styled.section`
    background: rgb(11,18,48);
    background: linear-gradient(90deg, rgba(3,11,45,1) 0%, rgba(18,69,124,1) 50%, rgba(73,137,193,1) 100%);
    text-align: center;
    padding: 60px 0;
    height: 270px;
    width: 100%;
`
const Title = styled.h2`
    color: #FFF;
    font-size: 2rem;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.h3`
    color: #FFF;
    font-size: 1.2rem;
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
`



function Search() {
    const [filled, setFilled ] = useState('')
    
    return (
        <SearchContainer>
            <Title>Buscar livros</Title>
            <Subtitle>Encontre o livro que você está procurando em nossa estante</Subtitle>
            <Input
                placeholder="Escreva aqui..."
                onBlur={ event => setFilled(event.target.value)}
            />

            <p>{ filled }</p>
        </SearchContainer>
    )
}

export default Search
