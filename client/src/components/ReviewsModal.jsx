import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import Slider from './Slider.jsx';
import UserReviewList from './UserReviewList.jsx';
import AddReview from './AddReview.jsx';
import StarMap from './StarMap.jsx';

class ReviewsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: this.props.state.reviews,
      totalRatings: this.props.state.totalRatings,
      writeReviewClicked: false,
      totalSize: this.props.state.totalSize,
      totalComfort: this.props.state.totalComfort,
      totalDurability: this.props.state.totalDurability,
    };

    this.closePage = this.closePage.bind(this);
  }

  closePage () {
    this.props.moreReviewRender();
    this.props.getReviews();
  }

  render() {
    const ReviewsPopup = styled.div`
    bottom: auto;
    top: 0px;
    opacity: 1;
    visibility: visible;
    display: flex;
    flex-direction: column;
    left: 0px;
    width: 100%;
    height: 100%;
    position: fixed;
    overflow: hidden;
    background-color: white;
    transition: visibility 0.3s ease 0s, top 0s ease 0s, all 0.3s ease 0s;
    z-index: 9;
    `;

    const Header = styled.div`
      flex: 0 0 auto;
      background: #fff;
      z-index: 8;
      width: 100%;
      padding-bottom: 16px;
      padding-top: 16px;
      padding-left: 8px;
    padding-right: 8px;
    `;

    const ShoeHeader = styled.button`
      transition: none;
      background: #fff;
      font-size: inherit;
      line-height: inherit;
      border: none;
      cursor: pointer;
      overflow: visible;
      -webkit-tap-highlight-color: transparent;
    `;

    const ShoeContainer = styled.div`
    height: 100%;
    display: flex;
    `;

    const Body1 = styled.div`
    flex: 1 1 auto;
    overflow-y: scroll;
    scroll-behavior: smooth;
    padding-right: 0;
    padding-left: 0;
    width: 100%;
    display: flex;
    `;

    const Body2 = styled.div`
    width: 85%;
    margin: 0 auto;
    padding: 0 24px;
    font-family: 'Helvetica Neue',Helvetica,Verdana,Arial,Helvetica,sans-serif;
    font-size: 16px;
    display: flex;
    flex-wrap: wrap;
    `;

    const ReviewSummary1 = styled.div`
    background: transparent;
    border: 0;
    padding: 20px 0 0;
    margin: auto;
    margin-top: 30px;
    width: 100%
    display: flex;
    flex-direction: column;
    `;

    const ReviewStars = styled.div`
    margin: auto;
    display: flex;
    `;
    // font-family: "Nike TG", Oswald, "Helvetica Neue", Helvetica, Arial, sans-serif;
    const ReviewRating = styled.div`
    font-family: "TradeGothic";
    font-size: 31px;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: #111;
    font-weight: 500;
    display: flex;
    line-height: 1;
    margin: auto;
    padding-top: 32px;
    padding-bottom: 32px;
    `;
    const TotalReviews = styled.div`
    text-align: center;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;

    `;

    const TotalSize = styled.div`
    width: 25%;
    display: table;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

    const TotalComfort = styled.div`
    width: 25%;
    display: table;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

    const TotalDurability = styled.div`
    width: 25%;
    display: table;
    font-size: 11px;
    font-weight: bold;
    margin-bottom: 18px;
    `;

    const SortBy = styled.div`
    display: flex;
    margin-bottom: 0;
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 20px;
    overflow: auto;
    height: fit-content;
    `;

    return (
      <ReviewsPopup>
        {this.props.state.addReviewsModalClicked ? <AddReview handleClick={this.props.addReviewRender} moreReviewRender={this.props.moreReviewRender} /> : ''}
        <Header>
          <ShoeHeader>
            <div style={{ display: 'block' }}>
              <ShoeContainer>
                <img src="https://static.nike.com/a/images/t_default/a011143b-3f77-40be-a425-d6e8b64c2006/lebron-18-basketball-shoe-M6DgN2.jpg" className="shoeImage" alt="Lebron 18 header" />
                <div className="shoePrice">
                  <h1 style={{ marginTop: '3px', fontFamily: 'Arial', fontSize: '24px', fontWeight: '400' }}>Lebron 18</h1>
                  <div style={{ marginBottom: '-4px', color: '#111111', marginTop: '7px', fontSize: '19px' }}>$200</div>
                </div>
              </ShoeContainer>
            </div>
          </ShoeHeader>
          <button type="button" onClick={this.closePage} style={{ outline: 0, position: 'absolute', top: '16px', right: '16px', paddingTop: '16px', zIndex: 10, background: '#fff', color: '#58595b', fontSize: '18px' }}>
            <AiOutlineClose />
          </button>
        </Header>
        <Body1 name="Body1">
          <Body2 name="Body2">
            <ReviewSummary1 name="ReviewSummary1">
              <ReviewStars name="ReviewStars" style={{ fontSize: '28px' }}>
                <StarMap ratings={this.state.totalRatings} />
              </ReviewStars>
              <ReviewRating name="ReviewRating">{this.state.reviews.length} Reviews</ReviewRating>
            </ReviewSummary1>
            <TotalReviews name="TotalReviews">
              <TotalSize name="Size">
                <div style={{ fontWeight: '400', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '18px', marginTop: '4px', display: 'flex' }}>Size</div>
                <div>{Slider(this.state.totalSize)}</div>
                <div>
                  <div style={{ display: 'flex', textAlign: 'left', fontWeight: '400', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '16px' }}>Runs small</div>
                  <div style={{ textAlign: 'right', position: 'relative', bottom: '19px', fontWeight: '400', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '16px' }}>Runs Big</div>
                </div>
              </TotalSize>
              <TotalComfort name="Comfort">
                <div style={{ fontWeight: '400', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '18px', marginTop: '4px', display: 'flex' }}>Comfort</div>
                <div>{Slider(this.state.totalComfort)}</div>
                <div>
                  <div style={{ display: 'flex', textAlign: 'left', fontWeight: '400', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '16px' }}>Runs small</div>
                  <div style={{ textAlign: 'right', position: 'relative', bottom: '19px', fontWeight: '400', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '16px' }}>Runs Big</div>
                </div>
              </TotalComfort>
              <TotalDurability name="Durability">
                <div style={{ fontWeight: '400', textAlign: 'left', marginBottom: '7px', color: '#111', fontSize: '18px', marginTop: '4px', display: 'flex' }}>Durability</div>
                <div>{Slider(this.state.totalDurability)}</div>
                <div>
                  <div style={{ display: 'flex', textAlign: 'left', fontWeight: '400', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '16px' }}>Runs small</div>
                  <div style={{ textAlign: 'right', position: 'relative', bottom: '19px', fontWeight: '400', whiteSpace: 'nowrap', color: '#6D6D6D', fontSize: '16px' }}>Runs Big</div>
                </div>
              </TotalDurability>
            </TotalReviews>
            <SortBy>
              <div style={{ textAlign: 'left', float: 'left', position: 'relative', fontSize: '19px' }}>
                <select className="sortBy" onChange={this.props.getData}>
                  <option>Sort: </option>
                  <option value="helpful10">Sort by: Most Helpful</option>
                  <option value="recent10">Sort by: Newest</option>
                  <option value="highest10">Sort by: Highest to Lowest</option>
                  <option value="lowest10">Sort by: Lowest to Highest</option>
                </select>
              </div>
            </SortBy>
            <UserReviewList reviews={this.state.reviews} />
          </Body2>
        </Body1>
      </ReviewsPopup>
    );
  }
}

export default ReviewsModal;
