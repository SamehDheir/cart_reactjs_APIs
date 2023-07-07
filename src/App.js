import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";

function App() {
  const [data, setData] = useState(null);

  // Function to make the API request
  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Call fetchData when the component mounts
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      {data ? (
        <div className="products">
          {data.map((product) => (
            <div className="product" key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} />
              <h3>$ {product.price}</h3>
              <p>{product.description}</p>
              {/* <h4>{product.category}</h4> */}
              <button className="btn btn-primary mt-5">Add To Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
