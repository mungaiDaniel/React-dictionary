import { createTheme, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import categories from '../data/category';

const Header = ({ category, setCategory, word, setWord, lightMode }) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main: lightMode ? "#000": "#fff"
            },
          type:lightMode ? 'light' : 'dark',
        },
      });

    const HandleChange = ((language) => {
        setCategory(language);
        setWord("")
    })
  return ( 
    <div className='header'>
      <span className='title' >{word ? word : "word Hunt"}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme} >
        <TextField
         className='search'
          label="search a word"
          value={word}
          onChange={(e) => setWord(e.target.value)} 
           />
        <TextField
            className='select'
            select
            label="language"
            value={category}
            onChange={(e) => HandleChange(e.target.value)}       
        >{categories.map((option) =>(
            <MenuItem key={option.label} value={option.label} >{option.value}</MenuItem>  
        ))} 
        </TextField>
        </ThemeProvider>
        
      </div>
    </div>
  )
}

export default Header
