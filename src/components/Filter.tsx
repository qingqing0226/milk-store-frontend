import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import Popup from 'reactjs-popup';
import '../App.css';

interface IFilterprops {
  types: string[],
  checkStatus: boolean[],
  setCheckStatus: Dispatch<SetStateAction<boolean[]>>
}

const Filter = ({types, checkStatus, setCheckStatus}: IFilterprops) => {
  const [open, setOpen] = useState(false);
  const closePop = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: number) => {
    e.preventDefault();
    console.log(e.target.checked);
    checkStatus[key] = e.target.checked;
    setCheckStatus(checkStatus);
  }

  const offset = {
    right: 50,
    top: 50,
  };

  return (
    <>
    <div onClick={() => setOpen(true)} className='filter-trigger'>filter</div>
    <Popup
      arrow={false}
      modal nested
      open={open}
      closeOnDocumentClick
      onClose={closePop}
      offsetX={300}
      offsetY={10}
    >
      <div className='filter-container'>
        <div className='filter-header'>
          <span className='filter'>Filter</span>
          <button className='close-btn' onClick={closePop}>X</button>
        </div>
        <div className='filter-title'>Milk type</div>
        {types.map((t, k) => 
          <div key={k} className='checkbox-container'>
            <input className='checkbox' type='checkbox' value={t} id={t} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, k)} />
            <label htmlFor={t} > {t}</label>
          </div>
        )}
      </div>
    </Popup></>
  )
}

export default Filter