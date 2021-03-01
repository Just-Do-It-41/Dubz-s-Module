import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx'
import ReviewsModal from './ReviewsModal.jsx'
import StarMap from './StarMap.jsx'
import Chevron from './Chevron.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      recentReviews: [],
      numberOfReviews: null,
      isClicked: false,
      totalRatings: 0,
      moreReviewsModalClicked: false,
      addReviewsModalClicked: false,
      totalSize: 0,
      totalComfort: 0,
      totalDurability: 0,
    };
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.moreReviews = this.moreReviews.bind(this);
    this.addReviews = this.addReviews.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.getAggregates = this.getAggregates.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/api/reviews/recent10')
      .then((res) => {
        this.setState({
          reviews: res.data,
        }, () => {
          this.setState({ numberOfReviews: this.state.reviews.length },
            () => {
              let totalRating = 0;
              this.state.reviews.forEach(ratings => {
                totalRating += ratings.overallRating;
              });
              const aggregatedReviews = (totalRating / this.state.reviews.length).toFixed(2);
              this.setState({ totalRatings: aggregatedReviews });
            });
        }, this.getAggregates(res.data));
      })
      .then(
        axios.get('/api/reviews/recent')
          .then((res) => {
            this.setState({
              recentReviews: res.data,
            });
          }),
      )
      .catch((err) => { console.log(err) });
  }

  getData(e) {
    const sort = e.target.value;
    axios.get(`/api/reviews/${sort}`)
      .then((res) => {
        this.setState({
          reviews: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getAggregates(data) {
    let size = 0;
    let comfort = 0;
    let durability = 0;
    const length = data.length;

    data.forEach((review) => {
      size += (review.size / 2);
      comfort += (review.comfort / 2);
      durability += (review.durability / 2);
    });

    const totalSize = (size / length) * 100;
    const totalComfort = (comfort / length) * 100;
    const totalDurability = (durability / length) * 100;

    this.setState({
      totalSize: totalSize,
      totalComfort: totalComfort,
      totalDurability: totalDurability,
    });
  }

  // triggers modal popup to let users view all reviews
  moreReviews() {
    this.setState({
      moreReviewsModalClicked: !this.state.moreReviewsModalClicked
    });
  }

  // triggers modal popup to let users add new reviews
  addReviews() {
    this.setState({
      addReviewsModalClicked: !this.state.addReviewsModalClicked,
    }, this.getReviews());
  }

  // this will add a setTimeout so that addReviews appears a second after displaying more reviews
  addReviewsTimeout() {
    this.setState({
      addReviewsModalClicked: !this.state.addReviewsModalClicked
    });
  }

  toggleAccordion() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    const ReviewsContainer1 = styled.div`
      padding-top: 20px;
      `;

    const ReviewsContainer2 = styled.div`
      margin-bottom: 20px;
      `;

    const ProductReview = styled.div`
      margin-bottom: 40px;
      `;

    const StarRating = styled.p`
      padding-left: 16px;
      display: flex;
      position: relative;
      bottom: 15px;
      font-family: "Helvetica Neue";
      font-size: 19px;
    `;

    const MoreReviews = styled.a`
    background: #fff;
    white-space: nowrap;
    display: inline-block;
    text-align: center;
    color: #111;
    box-sizing: border-box;
    margin: inherit;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    cursor: pointer;
    padding-bottom: 4px;
    border-bottom: 1px black;
    border-radius: unset;
    font-family: "Helvetica Neue";
    font-weight: 500;
    `;

    const WriteReviewButton = styled.a`
    background: #fff;
    color: #111;
    box-shadow: inset 0 -1px 0 0 #111;
    padding-bottom: 2px;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
    cursor: pointer;
    opacity: ${() => { this.state.hovered === true ? '1' : 'none' }}
    outline-color: ${() => { this.state.hovered === true ? 'initial' : 'none' }}
    outline-style: ${() => { this.state.hovered === true ? 'initial' : 'none' }}
    outline-width: ${() => { this.state.hovered === true ? '0px' : 'none' }}
    color: ${() => { this.state.hovered === true ? 'red' : 'black' }}
    `;

    const { isClicked } = this.state;
    let reviews;

    if (isClicked) {
      reviews = (
        <ReviewsContainer1>
          <ReviewsContainer2>
            <ProductReview>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <span className="body-1">
                  <StarMap ratings={this.state.totalRatings} />
                </span>
                <StarRating>
                  {isNaN(this.state.totalRatings) ? 0 : this.state.totalRatings} Stars
            </StarRating>
              </div>
              <p>
                <WriteReviewButton className="writeReviewButton" onClick={this.addReviews}>
                  Write a Review
              </WriteReviewButton>
              </p>

              {this.state.addReviewsModalClicked ? <ReviewsModal addReviewRender={this.addReviews} moreReviewRender={this.moreReviews} state={this.state} getReviews={this.getReviews} getData={this.getData} /> : ''}

              <ReviewList reviews={this.state.recentReviews} getReviews={this.getReviews} />
              <MoreReviews onClick={this.moreReviews} name="moreReviewsModalClicked" className="writeReviewButton">More Reviews</MoreReviews>
              {this.state.moreReviewsModalClicked === true ? <ReviewsModal
                moreReviewRender={this.moreReviews} state={this.state} getReviews={this.getReviews} getData={this.getData} /> : ''}
            </ProductReview>
          </ReviewsContainer2>
        </ReviewsContainer1>
      );
    }

    return (
      <div className="css-15oagn2">

        <div className="css-1y5ubft" onClick={this.toggleAccordion}>

          <div className="accordionCont1">

            <h3 className="accordionTitle">
              Reviews ({this.state.numberOfReviews})
            </h3>

          </div>

          <div className="accordionCont2" style={{position: 'relative', top: '30%'}}>
              <StarMap ratings={this.state.totalRatings} style={{position: 'relative', top: '30%'}} className="accordionCont2" />
          </div>

          <div className="accordionCont3">
            <span name="dropdown" className="reviewDropdown"><Chevron className="reviewDropdown" /></span>
          </div>

        </div>

        {reviews}

      </div>
    );
  }
}

export default Reviews;
