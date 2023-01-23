import React from 'react';
import { Milk } from '../types/types';
import milkImage from './milk.png';
import '../App.css';
interface ICardProps {
    milk: Milk
}

const Card = ({milk}:ICardProps) => {
  return (
    <div className='card'>
        <img src={milkImage} className='image' width={300} height={300} />
        <div className='milk-info'>
            <p className='milk-name'>{milk.name}</p>
            <div className='milk-type-storage'>
                <p className='milk-type'>{milk.type}</p>
                <p className='milk-storage'>{milk.storage} liter</p>
            </div>
        </div>
    </div>
  )
}

export default Card