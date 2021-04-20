import { useEffect, useState } from 'react'
import Recipe from './Recipe'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyles'


function App() {

  const APP_ID = '741f35bb';
  const APP_KEY = 'a263817d6f28b69fb2807ca40c21b53c';

    //all the recipes will be in the state
  const [recipes, setRecipes] = useState([]); // empty array for array of objects in data hits
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    // q is the query and what is after it is the thing that we are searchign for
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setRecipes(data.hits);
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
        <SearchBar 
          className = 'searc-bar' 
          type='text' 
          value ={search} 
          onChange = {updateSearch}/>
        <Button 
          className ='search-button' 
          type='submit'>Search</Button>
      </Form>
      <Recipes>
      {recipes.map(food =>(
        <Recipe 
          key={food.recipe.label} //this has to be unique for each of the items displayed because react will make it render faster!?
          title={food.recipe.label} 
          calories ={food.recipe.calories}
          // yield ={food.recipe.yield}
          ingredients={food.recipe.ingredients}
          image ={food.recipe.image}
        />
      ))};
      </Recipes>
    </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: #feeae6;
`
const Logo = styled.h1`
  padding: 2vh;
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
`

const Button = styled.button`
  background: #442c2e;
  border:none;
  border-radius: 3vh;
  padding: 10px 20px;
  margin: 1vh;
  color: #feeae6;
`
const Recipes = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`



export default App;
