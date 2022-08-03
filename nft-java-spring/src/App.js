import { IndexRouter } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { connectRouter } from "connected-react-router";

function App({ history }) {
  return (
    // <connectRouter history={history}>
      <div className="App">
        <IndexRouter />
      </div>
    // </connectRouter>
  );
}

export default App;
