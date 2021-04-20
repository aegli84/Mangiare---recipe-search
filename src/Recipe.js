import styled from 'styled-components'

const Recipe = ({title, calories, ingredients, image}) => {
    return(
        <Wrapper>
            <h1>{title}</h1>
            <ul>{ingredients.map(ingredient =>(
                <li>{ingredient.text}</li>
            ))}
            </ul>
            <p>{calories}</p>
            <Image src={image} alt=""/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    min-width: 40vw;
    border-radius: 5px;
    box-shadow: 0px 5px 20px black;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #442c2e;
    color: #feeae6;
`

const Image = styled.img`
    width: 60%;
    
`

export default Recipe;