import './App.css';

function App() {

  let curDate = new Date();
  curDate = curDate.getHours();
  let greeting = '';
  const cssStyle = {};

  if(curDate >=1 && curDate <12){
    greeting = 'Good Morning';
    cssStyle.color = 'Green';
  }
  else if(curDate >=12 && curDate <17){
    greeting = 'Good Afternoon';
    cssStyle.color = 'Orange';
  }
  else if(curDate >=17 && curDate <20){
    greeting = 'Good Evening';
    cssStyle.color = '#0f1650';
  }
  else{
    greeting = 'Good Night';
    cssStyle.color = 'Grey';    
  }

  return (
    <div className="App">
    <div className="Main">
     <h1>Hello dear, <span style={cssStyle}> { greeting } </span></h1>
    </div>
    <a href="https://bit.ly/3pswTI"> Download Source Code</a>
    </div>
  );
}

export default App;