import "./App.css";
import useFetch from "./useFetch";

function App() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1 className="heading">Products</h1>

      <div className="container">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img
              src={product.images?.[0]}
              alt={product.title}
            />

            <h3>{product.title}</h3>

            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;