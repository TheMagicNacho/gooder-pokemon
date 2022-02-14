import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function SearchBar() {
  return (
    <>
        <div>
            <TextField id="standard-basic" label="Search Pokemon" variant="standard" />
            <Button variant="outlined">Search</Button>
        </div>
    </>

  );
}