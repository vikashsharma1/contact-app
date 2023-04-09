import React, { useState, useEffect } from 'react';
import WithHocLoader from './HocLoader'
const api = "https://dummyjson.com/products";


const TestComponent = (props) => {
  const [products, setProducts] = useState([]);
  const {
    loader = false,
    handleLoader = () => { }
  } = props;

  useEffect(() => {
    fetch(api)
      .then(result => result.json())
      .then(result => setProducts(result.products))
      .catch(e => console.log("Something went wrong", e))
      .finally(() => handleLoader(false));
  }, [])

  return (
    <div className="App">
      <h1 style={{ marginLeft: 'auto', marginTop: '5rem' }}>{loader ? "Loading ..." : ""}</h1>
      <h2>{products.map((data) =>
        <div key={data.id}>{data.id} - {data.title}</div>
      )}</h2>
    </div>
  )
}

export default WithHocLoader(TestComponent); 