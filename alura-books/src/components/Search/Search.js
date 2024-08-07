import Input from "../Input/Input.js"
import styled from "styled-components"
import { useState } from "react"
import { books } from "./data.js"

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

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding-top: 10px;
    cursor: pointer;
    
    p {
        width: 200px;
        color: #FFF;
    }
    
    img {
        width: 100px;
    }
    
    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [filter, setFilter ] = useState([])

    return (
        <SearchContainer>
            <Title>Buscar livros</Title>
            <Subtitle>Encontre o livro que você está procurando em nossa estante</Subtitle>
            <Input
                placeholder="Escreva aqui..."
                onBlur={ event => {
                    const value = event.target.value
                    const result = books.filter((item) => item.name.includes(value))
                    setFilter(result)
                }}
            />
            { filter.map( 
                book => (
                    <Result>
                        <img src={ book.src } />
                        <p>{ book.name}</p>
                    </Result>
                )) 
            }
        </SearchContainer>
    )
}

export default Search
