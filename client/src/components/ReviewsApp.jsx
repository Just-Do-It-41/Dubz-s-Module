import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
import Shipping from './Shipping.jsx';
import Reviews from './Reviews.jsx';

class ReviewsApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="startingPage pt10-lg mt0-lg mr0-lg ml0-lg">
        <Shipping />
        <Reviews />
      </div>
    );
  }
}

export default ReviewsApp;
