import React from 'react';
import { Milk } from '../types/types';
import Card from './Card';
import '../App.css';
import SearchBar from './SearchBar';
interface IContainerProps {
    milkList: Milk[]
    setMilklist: (para: Milk[]) => void
}

const Container = ({milkList, setMilklist}: IContainerProps) => {
  return (
    <main>
      <div className='search-filter'>
        
      </div>
      <p className='noOfProducts'>{milkList.length} products</p>
      <div className='card-container'>{milkList.map(milk => <Card milk={milk} key={milk.id} />)}</div> 
    </main>
  )
}

export default Container