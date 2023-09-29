import QuoteBox from './components/QuoteBox';
import { useSelector } from 'react-redux';

function App() {
  
  const color = useSelector((state)=>state.color)

  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: color,
    width: '100vw',
    height: '100vh',
    transition: 'color 0.3s ease-in-out'
  };

  return (
    <div style={appStyle}>
      <QuoteBox/>
    </div>
  );
}

export default App;