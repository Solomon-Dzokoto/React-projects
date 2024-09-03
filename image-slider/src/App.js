import Content from "./Content";
import './index.css'

function App() {
  const slidesContainer ={
  width: '80vw',
  margin: "auto",
  height: '70vh',
  paddingBlock:'2rem'
  }
  
  return (
    <div className="App">
      <div className="slides" style={slidesContainer}>
      <Content  />
      </div>
    </div>
  );
}

export default App;
