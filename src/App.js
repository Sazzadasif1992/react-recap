import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  },[])
//   // const Actress = [{name:'shabana', age: 50},{name:'Bpbita',age: 80},{name: 'Saima' , age: 50},{name:'Salma', age:32}];
//   // return (
//   //   <div className="App">
//   //     <MovieCounter></MovieCounter>
//   //     {
//   //       Actress.map(nayika=> <Actor name={nayika.name} age={nayika.age}></Actor>)
//   //     }
//   //     <header className="App-header">
        
//   //       {/* <img src={logo} className="App-logo" alt="logo" />
//   //       */}
//   //     </header>
//   //   </div>
//   // );
// }
// // function MovieCounter(){
// //   const [count, setCount] = useState(0);
// //   const handleClick = ()=> setCount(count+1);
// //   return(
// //     <div>
// //       <button onClick={handleClick}>Add Movie</button>
// //       <h3>Number of movies:{count}</h3>
// //       <MovieDisplay movies={count+5}></MovieDisplay>
// //       <MovieDisplay movies={count}></MovieDisplay>
// //       <MovieDisplay movies={count}></MovieDisplay>
// //       <MovieDisplay movies={count}></MovieDisplay>
// //     </div>
// //   )
// // }
// // function Actor(props){
// //   const nayokStyle = {
// //     border: ' 2px solid red',
// //     margin: '20px',
// //     padding: ' 20px'
// //   }
// //   return ( 
// //     <div style = {nayokStyle}>
// //     <h1>Ami Super Star :{props.name}</h1>
// //     <h3>I have done 5 movies in </h3>
// //   </div>
// //   )

    
// // }
// // function MovieDisplay(props){
// //   return <h4>Movie Display active:{props.movies}</h4>
// // }
     


// export default App;
