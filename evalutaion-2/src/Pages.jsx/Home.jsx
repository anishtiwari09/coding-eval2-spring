import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFailure, getRequest, getSuccess } from "../redux/action";

const ProductDetails = ({ id, price, name, image }) => {
  return (
    <div style={{ display: "flex", border: "1px solid black", gap: "1rem" }}>
      <div>
        <img src={image} style={{ width: 150 }} />
      </div>
      <div>
        <p>{name}</p>
        <h3>Price: @{price}</h3>
      </div>
      <div style={{ padding: "1rem" }}>
        <button>Add Item</button>
      </div>
    </div>
  );
};

export default function Home() {
  const dispatch = useDispatch();
  const { product, isLoading, isError } = useSelector((state) => state);
  const getProductDetails = () => {
    dispatch(getRequest());
    return fetch("https://thawing-oasis-54179.herokuapp.com/shopping")
      .then((res) => res.json())
      .then((res) => {
        dispatch(getSuccess(res));
      })
      .catch((err) => {
        dispatch(getFailure());
      });
  };
  useEffect(() => {
    getProductDetails();
  }, []);
  return (
    <div>
      {isLoading && <h3>loading...</h3>}
      {isError && <h3>something went wrong</h3>}
      <div tyle={{ display: "flex", flexDirection: "column", gap: "3rem;" }}>
        {product.map((item) => (
          <ProductDetails
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
