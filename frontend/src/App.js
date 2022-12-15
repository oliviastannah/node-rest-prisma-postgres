import './App.css';

const getJobs = async () => {
  const res = await fetch('/jobs');
  const json = await res.json();
  console.log(json);
}

const setJob = async () => {
  const res = await fetch('/job', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Chef',
        location: "France",
        salary: "2000",
    }),
    headers: {
       'Content-type': 'application/json; charset=UTF-8',
    },
 });
 const json = await res.json();
 console.log(json);
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <button style={{ marginBottom: '50px' }} onClick={async () => getJobs()}> Get Jobs </button>
        <button onClick={async () => setJob()}> Set Jobs </button>
      </header>
    </div>
  );
}

export default App;
