import React, {useState, useEffect} from 'react';
import { Milk } from '../types/types';
import Card from './Card';
import '../App.css';
import SearchBar from './SearchBar';
import Filter from './Filter';
import CardDetail from './CardDetail';


const Container = () => {
  const [milklist, setMilklist] = useState<Array<Milk>>([]);
  const [searchkey, setSearchkey] = useState('');
  const [originalData, setOriginaldata] = useState<Array<Milk>>([]);
  const [originalTypes, setOriginalTypes] = useState<Array<string>>([]);
  const [showCardDetail, setShowcardDetail] = useState(false);
  const [cardDetail, setCardDetail] = useState<Milk>({} as Milk);

  useEffect(() => {
    const getData = async () => {
      const results = await fetch('http://localhost:8080/api/milk', {mode: 'cors', headers: {'Content-Type': 'application/json'}});
      const data = await results.json();
      const uniqueTypes: string[] = [];
      data.forEach((d: Milk) => {
        if(!uniqueTypes.includes(d.type)) uniqueTypes.push(d.type);
      });
      setOriginalTypes(uniqueTypes);
      setOriginaldata(data);
      setMilklist(data);
    }

    getData();
  }, []);


  useEffect(() => {
    const filtered = searchkey.length > 0 ? originalData.filter(milk => milk.name.toLowerCase().includes(searchkey.toLowerCase())) : originalData;
    setMilklist(filtered);
  }, [searchkey]);


  return (
    <main>
      {!showCardDetail && 
        <div className='main-content'>
          <div className='search-filter'>
            <SearchBar searchkey={searchkey} updateName={setSearchkey} />
            <Filter types={originalTypes} originalData={originalData} setMilklist={setMilklist} />
          </div>
          <p className='noOfProducts'>{milklist.length} products</p>
          <div className='card-container'>{milklist.map(milk => <Card milk={milk} key={milk.id} setCardDetail={setCardDetail} setShowcardDetail={setShowcardDetail} />)}</div> 
        </div>
      }
      {showCardDetail && <CardDetail details={cardDetail} setShowcardDetail={setShowcardDetail} />}

    </main>
  )
}

export default Container