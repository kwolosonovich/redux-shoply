import './App.css';
import Items from './Items';
import { Jumbotron, Container } from "reactstrap";

function App() {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Shoply</h1>
          <p className="lead">
            Choose from our wide variety of items!
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
