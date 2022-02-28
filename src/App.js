
import styles from './App.scss';
import InvoiceList from './components/InvoiceList';
import {useState, useEffect} from 'react';

function App() {
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <div className="vertical-nav"></div>
      <div className="global-width">
        <InvoiceList invoiceList={data}></InvoiceList>
        <span className="tag tag--paid">Pending</span>
      </div>
    </>
  );
}

export default App;
