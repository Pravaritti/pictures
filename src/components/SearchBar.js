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

  //event handler function
  onFormSubmit = (event) => {
    event.preventDefault(); //tires to stop form from submitting and refreshing page everytime user hits enter

    console.log(this.state.term); //using arrow function automatically binds this of parent class(SearchBar).
    //there are other ways too
    //1. bind this explicitly in constructor function
    //2. using arrow function
    //3. rather than defininng a method on our class, we just pass arrow function directly into our props

    this.props.onSubmit(this.state.term); //reference to the prop (to get access to the callback funciton) we are passing in our
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
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
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
