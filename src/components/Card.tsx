import React, { Dispatch, SetStateAction } from 'react';
import { Milk } from '../types/types';
import milkImage from './milk.png';
import '../App.css';
interface ICardProps {
    milk: Milk,
    setCardDetail: Dispatch<SetStateAction<Milk>>,
    setShowcardDetail: Dispatch<SetStateAction<boolean>>
}


const Card = ({milk, setCardDetail, setShowcardDetail}:ICardProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCardDetail(milk);
    setShowcardDetail(true);
  }

  return (
    <div className='card' onClick={handleClick}>
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