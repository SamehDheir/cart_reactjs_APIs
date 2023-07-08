import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(null);
  const [counter, setCounter] = useState(0);

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

  const [cartItems, setCartItems] = useState([]);

  const clickHandle = (item) => {
    setCounter(counter + 1);
    setCartItems([...cartItems, item]);
    toast.success(" Added To Cart Successfully", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    // console.log(cartItems);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    toast.success("Delete Successfully", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div>
      <Navbar
        counter={counter}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
      />
      {data ? (
        <div className="products">
          {data.map((product) => (
            <div className="product" key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} />
              <h3>$ {product.price}</h3>
              <p>{product.description}</p>
              <button
                className="btn btn-primary mt-5"
                onClick={() => clickHandle(product)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}

export default App;
