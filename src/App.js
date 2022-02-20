import { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
const HomePage = lazy(() =>
  import('./pages/Home' /* webpackChunkName: 'Home Page'*/),
);
const Hero = lazy(() =>
  import('./pages/Hero' /* webpackChunkName: 'Hero Page'*/),
);

const App = function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="Loader">waiting...</div>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/hero/:id">
            <Hero />
          </Route>
          <Route>
            <Redirect exact to="/" />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
