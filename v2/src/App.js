import "./App.css";
import data from "./components/data.json";

function App() {
  return (
    <div className="App">
      {data.map((data) => {
        return (
          <div className="card">
            <h1>{data.name}</h1>
            {data.imgsrc.map((url) => (
              <img className="avatar" src={url} alt="" />
            ))}
            <p>{data.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
