import QuoteBox from './components/QuoteBox';
import { useSelector } from 'react-redux';

function App() {
  
  const color = useSelector((state)=>state.color)

  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
    width: '100vw',
    height: '100vh',
    transition: 'background 1s ease-in-out'
  };

  return (
    <div style={appStyle}>
      <QuoteBox/>
    </div>
  );
}

export default App;