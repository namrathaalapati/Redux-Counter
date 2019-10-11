import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component{
  constructor(){
    super();
    debugger;
    this.state ={data:0} ;
  }
Increase(e){
  e.preventDefault();
  this.setState({data:this.state.data+1});
    debugger;
}
Decrease(e){
  e.preventDefault();
  debugger;
  this.setState({data:this.state.data-1});
}
  render(){
    debugger;
  return (
    <div className="App">
      <header >
        <form>
        <div className="row">
        <label>Value:</label>&nbsp;
        <input type="text" size="5" value={this.state.data}/>
        </div><br/>
        <div className="row">
        <button onClick={this.Increase.bind(this)}>Increase</button>&nbsp;
        <button onClick={this.Decrease.bind(this)}>Decrease</button>
        </div>
        </form>
      </header>
    </div>
  );
}
}
 export default App;
