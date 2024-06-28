import Carousel from "./components/carousel";
import NavBar from "./components/navbar";

function App() {
  return (
    <div className="main">
      <NavBar />
      <div style={{ height: "60vh" }}>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
