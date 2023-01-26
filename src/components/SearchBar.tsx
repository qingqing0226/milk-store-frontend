import React, { Dispatch, SetStateAction } from 'react';
import '../App.css';

interface ISearchBarProps {
    searchkey: string,
    updateName: Dispatch<SetStateAction<string>>
}

const SearchBar = ({searchkey, updateName}: ISearchBarProps) => {
  return (
    <input className='searchbar' value={searchkey} placeholder='Search' onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateName(e.target.value)} />
  )
}

export default SearchBar