import React from "rect";

class ToDoList extends React.Component {
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
            <form>
                <input placeholder="Enter Task Here">

                </input>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
      </div>
    );
  }
}

export default ToDoList;
