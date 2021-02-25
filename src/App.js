import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const Actors = ['shabana','Bpbita','Mila','Salma']
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <header className="App-header">
        <Actor name = {Actors[2]}></Actor>
        <Actor name = 'Manna'></Actor>
        <Actor name = 'Bappa Raj'></Actor>
        <Actor name = 'Ilias Kanchann'></Actor>
        {/* <img src={logo} className="App-logo" alt="logo" />
        */}
      </header>
    </div>
  );
}
function MovieCounter(){
  const [count, setCount] = useState(0);
  const handleClick = ()=> setCount(count+1);
  return(
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies:{count}</h3>
      <MovieDisplay movies={count+5}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function Actor(props){
  const nayokStyle = {
    border: ' 2px solid red',
    margin: '20px',
    padding: ' 20px'
  }
  return ( 
    <div style = {nayokStyle}>
    <h1>{props.name}</h1>
    <h3>I have done 5 movies</h3>
  </div>
  )

    
}
function MovieDisplay(props){
  return <h4>Movie Display active:{props.movies}</h4>
}
     


export default App;
