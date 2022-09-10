import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './pages/Dashboard';

//styling

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Create a client
const queryClient = new QueryClient()


function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </>
  );
}

export default App;
