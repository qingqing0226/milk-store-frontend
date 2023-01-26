import React, { Dispatch, SetStateAction } from 'react';

interface ISearchBarProps {
    searchkey: string,
    updateName: Dispatch<SetStateAction<string>>
}

const SearchBar = ({searchkey, updateName}: ISearchBarProps) => {
  return (
    <input value={searchkey} placeholder='Search' onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateName(e.target.value)} />
  )
}

export default SearchBar