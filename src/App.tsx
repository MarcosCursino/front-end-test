import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Orders } from './pages/Orders/Orders';
import { DetailOrder } from './pages/DetailOrder/DetailOrder';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Header />

      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/">
            <Orders />
          </Route>
          <Route exact path="/order/:id">
            <DetailOrder />
          </Route>
        </Switch>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
