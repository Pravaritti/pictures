import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    console.log(term);
    //address we want to make get request to
    //object that will have a bunch of options that will customize this request
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    // .then((response) => {
    //   console.log(response);
    //   console.log(response.data.results);
    // });
    //whenever we make a request with axios, it returns a object called a promise. a promise is an object that will give us a little notification when some amount of work (like a network request) is completed.
    //then() -> function to get to know that the request is completed. arrow function in it will be called in future. it is a callback function which will be invoked with whatever data we get back from splash API.
    //this then is a little difficult to work with when it comes to async requests

    console.log(response.data.results);
    //async await syntax is easier to understand than promises

    console.log(this); //need to do one of those 3 methods
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

//we will make an API request to unsplash. unsplash will respond in the form of JSON file and this JSON will contain information about a bunch of different pictures matching our search request
// we can then take this JSON and use it to render a big list of images and display on screen
