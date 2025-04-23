import { Route } from "wouter";
import Home from "./screens/Home";
import Project from "./screens/Project";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/project/:id" component={Project} />
    </>
  );
}

export default App;
