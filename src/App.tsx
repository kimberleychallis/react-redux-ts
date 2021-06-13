import Search from "./Search";
import PhotoList from "./PhotoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <img
            src="/img/HiPeople.jpeg"
            alt="Person speaking to another over video software"
            className="header-img"
          />
          <h1>HiPhotographers</h1>
          <h2>
            If you're looking for a photographer, look no further! Just search
            for the subject you need captured on film.
          </h2>
        </div>
        <div className="row">
          <div className="col">
            <Search />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <PhotoList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
