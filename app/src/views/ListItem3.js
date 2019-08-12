import React from 'react';
import '../App.css';

class ListItem3 extends React.Component  {
    
    render() {
        console.log('ListItem3  props',  this.props);
        
        return (
            <ul style = {{color: 'deeppink'}} >
                <li> index: {this.props.index} </li>    
                <li> name: {this.props.itemObj.name}  age: {this.props.itemObj.age}</li>
                <li>   length: {this.props.objLength} </li>
            </ul>
        )
    }

}

export default ListItem3;