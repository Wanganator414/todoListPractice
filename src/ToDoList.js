import React from "react";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: arrayH
    };
    this.addItem = this.addItem.bind(this);
    this.setInput = this.setInput.bind(this);
    this._inputElement = React.createRef();
  }

  addItem(e) {
    this.setState((prevState)=>{
        return{ 
            items:prevState.items.concat(arrayH)
        };
    });

  setInput(e) {
    arrayH = e.target.value;
    console.log(arrayH);
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter Task Here" />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default ToDoList;
