import './App.css';


function App() {
  return (
    <div id='root' className='App'>
      <header className='bg-gray- text-white text-center py-4'>
        <h1>Charlie's Weather App</h1>
      </header>

      <form id='weatherForm' className='flex justify-center pb-4'>
        <label for='cityInput' className='mr-2'>City Name:</label>
        <button type='submit' className='bg-gray=800 text-white px-4 py-2'>Search</button>
      </form> 
      <div id='weatherDisplay' className='p-4 border border-gray-300'>

      </div>
    </div>
  );  
}

export default App;




