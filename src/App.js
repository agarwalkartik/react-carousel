import Carousel from "./components/carousel";
import products from "./data/products";

function App() {
  return (
    <div className="App">
      <Carousel items={products}></Carousel>
    </div>
  );
}

export default App;
