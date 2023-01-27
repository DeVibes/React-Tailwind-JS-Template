import './App.css';
import { useBearStore } from './store';

function App() {
  return (
    <div className='h-screen'>
      <Header/>
      <Body/>
    </div>
  );
}

const Header = () => {
  const bears = useBearStore((state) => state.bears)
  return (
    <header className='bg-slate-500 flex justify-around'>
      <span>Header</span>
      <span>There are {bears} bears!</span>
    </header>
  )
}

const Body = () => {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  const bears = useBearStore((state) => state.bears)
  return (
    <main className='h-full flex justify-center items-center'>
      <div className='border border-purple-800 p-5'>Bears count: {bears}</div>
      <button className='' onClick={increasePopulation}>One up</button>
    </main>
  )
}

export default App;