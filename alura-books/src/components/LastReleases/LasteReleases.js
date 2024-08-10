import styled from "styled-components"
import { Title } from "../Title/Title.js"
import { books } from './Data.js'

const LastReleasesContainer = styled.section`
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const BookDiv = styled.div`
    background: #F4F4F4;
    padding: 30px 0;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title 
                color="#EB9B00"
                size="36px"
            >Últimos Lançamentos</Title>
            <BookDiv>
                { 
                    books.map( 
                        (book) => (
                            <img src={book.src} />
                        )
                    )
                }
            </BookDiv>
        </LastReleasesContainer>
    )
}

export default LastReleases