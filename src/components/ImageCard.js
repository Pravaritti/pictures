import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef);
    //ref is a js object that has a current property that references a DOM node.
    console.log(this.imageRef.current.clientHeight); //it will give u a 0 because console does not know the height and image has not been downloaded yet. console does not know anything. we have to expand the object and look inside it to know.

    //instead do this -> listen to event
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 150 + 1); //150 = row height that i have assigned

    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
