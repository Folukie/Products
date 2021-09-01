import React, {useState} from 'react';

const Product = ({name, price, onShowProduct, onCalcTotal}) =>{

  const [quantity, setQuantity] = useState(0);

  const buy = ()=>{
    //alert("You selected this product")
    setQuantity(quantity + 1);
    onCalcTotal(price);
  }
  return(
    <div>
    <h1 className="title">This is a {name} </h1>
    <h3>NGN {price}</h3>
    <button onClick={buy}> Buy </button>
    <button onClick={()=>onShowProduct(name)}>Show</button>
    <h3>Quantity: {quantity} </h3>
    <hr/>
    </div>
  )
}

const ProductForm = ({index, onCreateProduct}) =>{
 const [name, setName]= useState("");
 const [price, setPrice] =useState(0);

 const createProduct = (event) =>{
   event.preventDefault();
   //alert("Name: " + name + "Price:" + price)

   const product= {id:index, name, price};
   onCreateProduct(product);

   //Reset the form
    setName("");
    setPrice("");
 }

 return(
   <form>
      <label>Product name</label>
      <input
      type="text"
      value={name}
      onChange={(e)=>setName(e.target.value)}/>

      <br/>
      <br/>

      <label>Product price</label>
      <input
      type="number"
      value={price}
      onChange={(e)=>setPrice(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={createProduct}> Create </button>

   </form>
 )
}
const Total =({totalCash})=>{
return(
  <div>
  <h3>TotalCash: NGN {totalCash} </h3>
  </div>
)
}
const ProductList = () =>{
const [total, setTotal] = useState(0);
const [products, setProducts] = useState([
  {id:1, name:"Android", price:150},
  {id:2, name:"iPhone", price:180},
  {id:3, name:"Samsung", price:100}

])

const calcTotal= (price) =>{
  setTotal(total + parseInt(price));
}

const showProduct = (name) =>{
  alert("You selected a " + name)
}

const addProducts = (product) =>{
  setProducts([...products, product]);
}

  return(
    <div>
    <ProductForm index={products.length+1} onCreateProduct={addProducts}/>
    {products.map((p) =>(
      <Product 
        key={p.id}
        name={p.name}
        price={p.price} 
        onShowProduct={showProduct}
        onCalcTotal={calcTotal}
      />
    ))}
    
    <Total totalCash={total}/>
    </div>
  )
}

export default ProductList;