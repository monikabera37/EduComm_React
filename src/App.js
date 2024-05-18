import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs/Programs";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
      </div>



    </div>
  );
}

export default App;
