import React from 'react';
interface ISearchBarProps {
    searchkey: string,
    updateName: (n: any) => void
}

const SearchBar = ({searchkey, updateName}: ISearchBarProps) => {
  return (
    <input value={searchkey} placeholder='Search' onChange={updateName} />
  )
}

export default SearchBar