import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import Popup from 'reactjs-popup';
import '../App.css';
import { Milk } from '../types/types';

interface IFilterprops {
  types: string[],
  originalData: Milk[],
  setMilklist: Dispatch<SetStateAction<Milk[]>>
}

const Filter = ({types,originalData, setMilklist}: IFilterprops) => {
  const [open, setOpen] = useState(false);
  const closePop = () => setOpen(false);
  const [checkStatus, setCheckStatus] = useState<Array<boolean>>(new Array(types.length).fill(false));
  const [selected, setSelected] = useState<Array<string>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: number) => {
    const copy = [...checkStatus]
    copy[key] = !copy[key];
    setCheckStatus(copy);
  }

  const handleSubmit = () => {
    const selectedType: string[] = [];
    checkStatus.forEach((v,k) => {
      if(v) {
        selectedType.push(types[k]);
      }
    });
    console.log('selected: ' + selectedType);
    setSelected(selectedType);
  }

  useEffect(() => {
    const filtered = originalData.filter(milk => selected.includes(milk.type));
    setMilklist(filtered);

  }, [selected]);

  return (
    <div className='popup-container'>
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
          <button className='confirm-btn' type='submit' onClick={handleSubmit}>Confirm</button>
        </div>
      </Popup>
    </div>
  )
}

export default Filter