import { useEffect, useState, useRef } from 'react'
import Recipe from './components/Recipe'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyles'
import {v4 as uuidv4} from 'uuid'
import Alert from './components/Alert'
import { motion } from "framer-motion"

function App() {

  const APP_ID = '741f35bb';
  const APP_KEY = process.env.REACT_APP_API_KEY;

    //all the recipes will be in the state
  const [recipes, setRecipes] = useState([]); // empty array for array of objects in data hits
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('souvlaki');
  // const [alert, setAlert] =useState('');
  const inputRef = useRef();

  useEffect(() => {
    getRecipes();
  },[query]);

  useEffect(() => {
    inputRef.current.focus();
}, []);

  const getRecipes = async () => {
    // if(query !== "") { 
    // q is the query and what is after it is the thing that we are searching for
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //ALERT NOT WORKING YET 
    // if(!response.data.more){
    //   return setAlert('No food with such name')
    // }
    const data = await response.json()
    setRecipes(data.hits);
    console.log(data);
    // setAlert('');
    // setQuery('');
  // } else {
  //   setAlert('Please fill the form')
  // }
};

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <>
    <GlobalStyle/>
    <Wrapper className="App">
    <Logo>Mangiare </Logo> 
      <Form onSubmit={getSearch} className='search-form'>
      {/* ALERT not working */}
      {/* {alert!=="" && <Alert alert ={alert}/>} */} 
        <SearchBar 
          className = 'searc-bar' 
          type='text' 
          placeholder = 'Search recipe'
          autoComplete = 'off'
          ref={inputRef}
          value ={search} 
          onChange = {updateSearch}/>
        <Button 
          className ='search-button' 
          type='submit'>Search</Button>
        
      </Form>
      <Recipes>
      {recipes.map(food =>(
        <Recipe 
          key={uuidv4()} //this has to be unique for each of the items displayed because react will make it render faster!?
          title={food.recipe.label} 
          calories ={food.recipe.calories}
          // yield ={food.recipe.yield}
          ingredients={food.recipe.ingredients}
          image ={food.recipe.image}
          dish = {food.recipe.weight}
          link = {food.recipe.url}
        />
      ))}
      </Recipes>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: #eed0c6;
`
const Logo = styled.h1`
  padding-top: 4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family:'RocknRoll One', sans-serif; 
  font-size: 7vh;
`

const Form = styled.form`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchBar = styled.input`
  width: 40%;
  border: 5px solid #fedbd0;
  border-radius: 3vh;
  outline: none;
  padding: 10px;
  margin-left: 15vh;
  &:hover {
    box-shadow: 0px 5px 20px darkgrey;
  }
`

const Button = styled.button`
  background: #e37f6d;
  border:none;
  border-radius: 3vh;
  padding: 10px 20px;
  margin: 1vh;
  color: #feeae6;
  border: 5px solid #fedbd0;
  &:hover {
    background: #6e9d9c;
    box-shadow: 0px 5px 20px darkgrey;
  }
`
const Recipes = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-left: 5rem;
  padding-right: 5rem;
`



export default App;
