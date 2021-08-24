import Login from "pages/login/login";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default App;
