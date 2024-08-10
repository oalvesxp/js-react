import styled from "styled-components"
import { Title } from "../Title/Title.js"
import { books } from './Data.js'
import imgBook from "../../images/livro2.png"
import imgBook2 from "../../images/livro.png"
import CardRecommendation from "../CardRecommendation/CardRecommendation.js"

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
            <CardRecommendation 
                title="Amplie seus conhecimentos de Angular"
                subtitle="Angular 11"
                description="Construindo um aplicação fullstack em Angular"
                img={imgBook}
            />
            <CardRecommendation 
                title="Apreda tudo sobre Design"
                subtitle="Liderança em Design"
                description="Habilidades de gestão para alavancar sua carreira"
                img={imgBook2}
            />

        </LastReleasesContainer>
    )
}

export default LastReleases