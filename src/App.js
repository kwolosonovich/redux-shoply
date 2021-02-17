import './App.css';
import Items from './Items';
import { Jumbotron, Container } from "reactstrap";

// import { products } from './data.json'

function App() {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Shoply</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <div>
        <Items/>
      </div>
    </div>
  );
}

export default App;
