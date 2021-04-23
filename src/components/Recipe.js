import {useState} from 'react'
import styled from 'styled-components'
import {v4 as uuidv4} from 'uuid'
import { BiLinkExternal} from 'react-icons/bi';
import { IoIosArrowDropdown} from 'react-icons/io';
import { motion } from "framer-motion"

const Recipe = ({title, ingredients, image, link}) => {
    const [show, setShow] = useState(false);
    return(
        <Wrapper>
            <H1>{title}</H1>
            <motion.div  whileHover={{ scale: 1.3 }} >
            <IoIosArrowDropdown size = '2em' onClick={() => setShow(!show)}/>
            </motion.div>
            {show && <UL key = {uuidv4()}>{ingredients.map(ingredient =>(
                <Li key = {uuidv4()}>{ingredient.text}</Li>
            ))}
            </UL>}
            
            {/* <p><span>Calories:</span> {calories}</p> */}
            <Image src={image} alt={title}/>
            <A href={link} 
            //required for opening in a new window
                target = "_blank" 
                //required for security purposes
                rel = "noopener noreferrer">Source <BiLinkExternal/></A>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 25rem;
    border-radius: 2rem;
    box-shadow: 0px 5px 20px #424b54;
    margin: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #6e9d9c;
    color: #fedbd0;
    overflow: hidden;
    border: 3px solid #eed0c6;
    &:hover {
        box-shadow: 0px 5px 20px black;
    }
`
const H1 = styled.h1 `
    padding: 1rem;
`
const Image = styled.img`
    width: 25rem;
    height: 35vh;
    padding-top: 1vh;
    object-fit: cover;
    
`

const UL = styled.ul`
    text-align: center;
    padding: 1rem;
`

const Li = styled.li`
    list-style: none;
`

const A = styled.a`
    text-decoration: none;
    color: #eed0c6;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem;
`

export default Recipe;