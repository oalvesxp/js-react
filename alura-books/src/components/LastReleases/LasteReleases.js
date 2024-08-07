import styled from "styled-components"
import { books } from './Data.js'

const LastReleasesContainer = styled.section`
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`

const BookDiv = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title>Últimos Lançamentos</Title>
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