import React from "react";

class SearchBar extends React.Component {
  //   UNCONTROLLED ELEMENTS
  //   //this method gets called anytime user makes changes to input
  //   //   onInputChange(event) {
  //   //     //event is an object that contains info about the event happening

  //   //     event.target.value; //text that user adds
  //   //   }

  //CONTROLLED ELEMENT
  state = { term: "" }; //initializing state property

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* onchange is a prop that will make sure that every change in input by user the vallback function onInputChange is called automatically/
              
              onchange is a very special property name that calls callback function if user changes text in an input

              onClick -> user clicks on something
              onChange -> User changes text in an input
              onSubmit -> user submits a form
              */}
            {/* <input type="text" onChange={this.onInputChange} /> */}

            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
