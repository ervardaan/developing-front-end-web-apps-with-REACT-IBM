function App(props) {
    const currDate = new Date();
  
    return (
      <div>
        <h1>hello vardaan!</h1>
        <h2>The date now is {currDate.toLocaleDateString()}.</h2>
        <h2>The time is {currDate.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  export default App;