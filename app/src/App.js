import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ListItemsFC from './views/ListItems';
import ListItemsCC from './views/ListItems2';
import ListItem3 from './views/ListItem3';

class App extends React.Component {
  //state
    state = {
      valueInit: '',
      valueArr: [],
   //   valArrObj: [{}], 
  
    valObj: {id: 0, name : 'first', age: 100, real: true },
    valArrObj: [{id: 0, name : 'first', age: 100, real: true }],
    }
  
  // handlers
  handleChange = ev => {
    this.setState ({[ev.target.name]: ev.target.value})
  //  console.log(' current obj length >> ', this.state.valArrObj.length );
  }  

  handleSubmit = ev => {
    ev.preventDefault();

    // valArr
    this.setState(prevState => {
      return {
        valueArr: [...prevState.valueArr, this.state.valueInit],      

      }
    })

    // valArrObj
   let newObj = {...this.state.valArrObj};   // FIRST
   console.log('newObj spread  >>  ', newObj);

   newObj.name = this.state.valueInit;  // SECOND    

   console.log('newObj spread  >>  ', newObj);

   this.setState(prevState => {
    // This method mutates state directly
    return {
      valueArrObj: [{...prevState.valArrObj.name}],
    }  
  })


// simply updates state in obj properly
   this.setState({
      valObj: {id: 0, name : 'NEWfirst', age: 100, real: true }
    })

    
    this.setState({ valueInit: ''})
  }

  //render
  render() {
    return (
      <div>
      <h4> Controlled Inputs</h4>
        <h4> value is: {this.state.valueInit}</h4>
        <form onSubmit = {this.handleSubmit}>
          <label> Label text
            <input 
              type = 'text'
              name = 'valueInit'
              onChange = {this.handleChange}
              value = {this.state.valueInit}
            />
          
          </label>
          {/* input OR button here*/}
          <button type = 'submit'> Submit</button>    
        </form>

        <div className = 'valueArrContainer' >
          <h4> valueArr: {this.state.valueArr}</h4> 
          <h5> valObj: {this.state.valObj.name}</h5>
          <ul>
            {this.state.valueArr.map( (item,index) => (
              <div key = {index}>
                <li>{item}</li>
                <ListItemsFC item = {item}/> 
                <ListItemsCC item = {item}/>
              </div>                  
          ))}
          </ul> 
        </div>  
 
        <div className = 'valArrObjContainer'>
        <h4> valArrObj length: {this.state.valArrObj.length}</h4>     
                {this.state.valArrObj.map( (itemObj,index) =>  (
                    <ListItem3 
                     key = {index } 
                     index = {index} 
                     itemObj = {itemObj} 
                     objLength = {this.state.valArrObj.length}
                     />
                ))}
        </div>
 
      </div>
    ) 
  }
  
}

export default App;
