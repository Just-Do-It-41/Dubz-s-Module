/*eslint-disable*/
import React from 'react';
import axios from 'axios';
import Shoes from './Shoes';
import RightRail from './RightSide/RightRail';
import Modal from './Modal';
import DetailsModal from './RightSide/DetailsModal.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      shoes: [],
      showShoeModal: false,
      showDetailsModal: false,
      currShoe: {},
      selectedSize: '',
      selectedStock: '',
      addButtonClicked: false,
      favorited: '',
      modalStyle: false,
    };

    this.handleDetailsModalView = this.handleDetailsModalView.bind(this);
    this.handleShoeModalView = this.handleShoeModalView.bind(this);
    this.changeColorWay = this.changeColorWay.bind(this);
    this.selectSize = this.selectSize.bind(this);
    this.onAddButton = this.onAddButton.bind(this);
    this.onFavoriteButton = this.onFavoriteButton.bind(this);
  }

  componentDidMount() {
    axios.get('/api/shoes')
      .then((results) => {
        this.setState({ shoes: results.data, currShoe: results.data[0] });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  handleDetailsModalView(e) {
    e.preventDefault();
    const { showDetailsModal, modalStyle } = this.state;
    this.setState({ showDetailsModal: !showDetailsModal, modalStyle: true })
  }

  handleShoeModalView() {
    const { showShoeModal } = this.state;
    this.setState({ showShoeModal: !showShoeModal });
  }

  changeColorWay(i) {
    const { shoes, currShoe} = this.state;
    if (currShoe !== shoes[i]) {
      this.setState({ currShoe: shoes[i], selectedSize: '', selectedStock: '', addButtonClicked: false });
    }
  }

  selectSize(i) {
    const { currShoe, addButtonClicked } = this.state;
    this.setState({ selectedSize: currShoe.sizes[i], selectedStock: currShoe.stock[i], addButtonClicked: false })
  }

  onAddButton(e) {
    e.preventDefault();
    const { addButtonClicked } = this.state;
    this.setState({ addButtonClicked: true })
  }

  onFavoriteButton(e) {
    e.preventDefault();
    const { currShoe, favorited } = this.state;
    currShoe.favorite = !currShoe.favorite;
    this.setState({ favorited: currShoe.favorite })
  }

  render() {
    const { shoes, showShoeModal, currShoe, selectedSize, selectedStock, addButtonClicked, favorited, showDetailsModal, modalStyle } = this.state;
    if (showShoeModal) {
      return (
        <div>
          <div className="scrim"></div>
          <Modal currShoe={currShoe} handleShoeModalView={this.handleShoeModalView} />
        </div>
      );
    }
    return (
      <div id="frontPage">
        <div className="leftSideContainer css-l8ohx9">
          <Shoes currShoe={currShoe.media} handleShoeModalView={this.handleShoeModalView} />
        </div>
        <div className="rightSideContainer">
          <RightRail shoes={shoes} currShoe={currShoe} sizes={currShoe.sizes} stock={currShoe.stock} changeColorWay={this.changeColorWay} selectSize={this.selectSize} selectedSize={selectedSize} selectedStock={selectedStock} onAddButton={this.onAddButton} addButtonClicked={addButtonClicked} favorited={favorited} onFavoriteButton={this.onFavoriteButton} handleDetailsModalView={this.handleDetailsModalView} showDetailsModal={showDetailsModal} />
        </div>
        {showDetailsModal ? <DetailsModal currShoe={currShoe} modalStyle={modalStyle} handleDetailsModalView={this.handleDetailsModalView} /> : null}
      </div>
    );
  }
}

export default App;
