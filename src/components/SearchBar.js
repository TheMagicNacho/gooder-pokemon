import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchBar() {
  const [search, setSearch] = React.useState('');

  function handleSearchChange(e){
    setSearch(e.target.value);
  }
  function handleSearchSubmit(e){
    e.preventDefault();
    alert(search);
  }
  return (
    <>
        <div>
            <TextField  onChange={handleSearchChange} id="standard-basic" label="Search Pokemon" variant="standard" />
            <Button variant="outlined" onClick={handleSearchSubmit} >Search</Button>
        </div>
    </>
  );
}