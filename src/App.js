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
  const clickHandle = () => {
    setCounter(counter + 1);
    // toast("Added To Cart Successfully", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    toast.success(" Added To Cart Successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <Navbar counter={counter} />
      {data ? (
        <div className="products">
          {data.map((product) => (
            <div className="product" key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.image} />
              <h3>$ {product.price}</h3>
              <p>{product.description}</p>
              <button className="btn btn-primary mt-5" onClick={clickHandle}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <Loading />
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
