import "./App.css";
import Cards from "./Components/Cards";
import { comments } from "./Components/commentData";

function App() {
  return (
    <div className="mainContainer">
      {comments.map((data, idx) => (
        <Cards data={data} key={idx} />
      ))}
    </div>
  );
}

export default App;
