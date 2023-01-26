import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import Popup from 'reactjs-popup';

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

  return (
    <>
    <div onClick={() => setOpen(true)} className='author-name'>filter</div>
    <Popup
      arrow={false}
      modal nested
      open={open}
      closeOnDocumentClick
      onClose={closePop}
    >
      <div className='filter'>
        <div><span>Filter</span><button onClick={closePop}>X</button></div>
        <div>Milk type</div>
        {types.map((t, k) => 
          <div key={k}>
            <input type='checkbox' value={t} id={t} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, k)} />
            <label htmlFor={t} >{t}</label>
          </div>
        )}
      </div>
    </Popup></>
  )
}

export default Filter