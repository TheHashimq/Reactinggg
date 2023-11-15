import { useState } from 'react'
import './App.css'
import { movieList } from './data'

function App() {
  const [index, setIndex] = useState(0);
  let hasPrev = index > 0;
  let hasNext = index < movieList.length - 1;

  function handleNext() {
    if(hasNext){
		  return setIndex(index + 1);
    }
  }

  function handlePrev() {
    if(hasPrev){
		  return setIndex(index - 1);
    }
  }
  return (
    <div className='card'>
      <div className="flex-item">
        <img src={movieList[index].url} />
        <div className='fuck'>
          <h2>{index + 1}  &#41; <u>{movieList[index].name} {movieList[index].year}</u></h2>
          <h3> IMDB : {movieList[index].imdb}</h3>
          <p>{movieList[index].description}</p>
          <div className="buttoan">
        <button onClick={() => {
         handleNext();
        }} disabled={!hasNext} >Next</button>
        <button onClick={() => {
         handlePrev();
        }} disabled={!hasPrev} >Prev</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
