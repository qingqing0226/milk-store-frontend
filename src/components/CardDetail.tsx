import React, { Dispatch, SetStateAction, useState } from 'react';
import { Milk } from '../types/types';
import milkImage from './milk.png';
import './CardDetail.css';

interface ICardDetailProps {
    details: Milk,
    setShowcardDetail: Dispatch<SetStateAction<boolean>>
}

const CardDetail = ({details, setShowcardDetail}: ICardDetailProps) => {
  const [liter, setLiter] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleOrder = () => {
    const updateMilk = async() => {
      await fetch('http://localhost:8080/api/milk', 
        {mode: 'cors', 
        method:'PUT', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({id: details.id, storage: (details.storage-liter)})}
      );
    }

    updateMilk();
    setShowSuccess(true);
  }

  return (
    <div className='carddetail-container'>
        <p className='back' onClick={() => setShowcardDetail(false)}><span className='less-than'>&#60;</span> Back</p>
        <div className='img-details'>
          <img src={milkImage} className='image' width={150} height={150} />
          <div className='details'>
            <h3>{details.name}</h3>
            <p className='type'>{details.type}</p>
            <p className='liter'>{details.storage} liter</p>
            <input type='range' min={0} max={details.storage} value={liter} step={1} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLiter(Number(e.target.value))} />
            <p>select {liter} liter</p>
            <button type='submit' onClick={handleOrder}>Order</button>
            {showSuccess && <div>The order is confirmed</div>}
          </div>
        </div>
    </div>
  )
}

export default CardDetail