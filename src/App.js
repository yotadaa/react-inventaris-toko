
import Root from './provider/root';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </div>
  );
}

export default App;
