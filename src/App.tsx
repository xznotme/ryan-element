import React from 'react';
import Button,{ ButtonType, ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Hello</Button>
        <Button btnType={ButtonType.Default} disabled >large primary</Button>
        <Button onClick={(e) => {e.preventDefault();alert('234')}} btnType={ButtonType.Primary} size={ButtonSize.Large} >large primary</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small} >large primary</Button>
        <Button btnType={ButtonType.Link} href="http://www.bing.com">Hello</Button>
        <Button btnType={ButtonType.Link} href="http://www.bing.com" disabled>Hello</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
