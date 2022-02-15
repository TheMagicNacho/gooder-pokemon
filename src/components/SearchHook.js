import React from 'react';

export default function useSearch(){
    const [search, setSearch] = React.useState('');

    // function handleSearchChange(e){
    //   setSearch(e.target.value);
    // }
    // function handleSearchSubmit(e){
    //   e.preventDefault();
    //   alert(search);
    // }

    return search;
}