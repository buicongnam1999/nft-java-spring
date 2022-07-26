import { IndexRouter } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter } from "connected-react-router";

function App({ history }) {
  return (
    // <ConnectedRouter history={history}>
      <div className="App">
        <IndexRouter />
      </div>
    // </ConnectedRouter>

  );
}

export default App;
