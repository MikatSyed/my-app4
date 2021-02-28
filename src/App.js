import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const snacks=['chicken-masala','roast-chicken','chicken-ball','chiken-kabab','chicken-gril','chicken-lolipop']
  const products = [{name: 'photoshop', price:'$90.99'},
{name:'illustrator',price:'$6.56'},
{name:'pdf-reader', price:'$3.69'},
{name:'Adobe Ellestator', price:'$5.69'}
]
const productNames =products.map(product => product.name)
  return (
    <div className="App">
      <header className="App-header">
      
<h3>I am react person</h3>

<ul>
  {
    snacks.map(snack => <li>{snack}</li>)
  }
  {
    products.map(product => <li>{product.name}</li>)
  }
</ul>
{
 products.map(pd => <Product product={pd }></Product>) 
}
{/* <Product product={products[0]}></Product>
<Product product={products[1]}></Product>
<Product product={products[2]}></Product> */}
<Counter></Counter>
<Users></Users>

      </header>
    </div>
  );
}
function Counter(Count){
  const[count,setCount]= useState(10);
  const handleIncrease =() =>setCount( count + 1);
  
  return(
<div>
  <h1>Count:{count}</h1>
  <button onClick={() => setCount(count - 1)}>Decrease</button>
  <button onMouseMove ={handleIncrease}>Increased</button>
  <p></p>
</div>
  )
}


function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
 return(  
   <div>
     <h3>Dynamic Users:{users.length}</h3>
   <ul>
     {
       users.map(user => <li>{user.name} <br></br>Phone:{user.phone} <br></br>Email:{user.email} </li> 
     )
     }
   </ul>
   </div>
 )
}


function Product(props){

  const productStyle={
    border:'2px solid purple',
    borderaRadius:'5px',
    backgroundColor: 'cyan',
    height:'200px',
    width: '200px',
    float: 'left',
    color:'red'
  } 
const {name,price} = props.product;
  return( 
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy Now</button>
       </div>
  )
}
export default App;
