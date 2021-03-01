import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import SizeSlider from './SizeSlider.jsx'
import ComfortSlider from './ComfortSlider.jsx'
import DurabilitySlider from './DurabilitySlider.jsx'
import Upvoting from './Upvote.jsx';
import Downvote from './Downvote.jsx';
import Flag from './Flag.jsx';
import StarMap from './StarMap.jsx';

class UserReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upvote: this.props.reviews.upvote,
      downvote: this.props.reviews.downvote,
      flagged: false,
    };
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.clickFlag = this.clickFlag.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.getUser = this.getUser.bind(this);
  }

  handleClick() {
    this.setState({
      flagged: true,
    });
    // this.getUser()
  }
  // getUser() {
  //   axios.get(`/api/reviews/user/${this.props.reviews._id}`, {
  //     _id: this.props.reviews._id
  //   })
  //     .then(res => console.log(res.data))

  // }

  downVote() {
    axios.put(`/api/reviews/${this.props.reviews._id}`, {
      downvote: this.props.reviews.downvote + 1,
    })
      .then(this.setState({ downvote: this.props.reviews.downvote + 1 }))
      .catch((err) => console.log(err));
  }

  upVote() {
    axios.put(`/api/reviews/${this.props.reviews._id}`, {
      upvote: this.props.reviews.upvote + 1,
    })
      .then(this.setState({ upvote: this.props.reviews.upvote + 1 }))
      .catch((err) => console.log(err));
  }

  clickFlag() {
    return !this.state.flagged ? <Flag /> : <div className="handleFlag">This post has been flagged. Thank you.</div>;
  }

  render() {
    const ReviewContainer = styled.div`
    background: transparent;
    border-bottom: 1px solid #E5E5E5;
    border-top: none;
    padding-top: 60px;
    padding-bottom: 60px;
    height: fit-content;
    margin-left: 1%;
    margin-right: 1%;
    width: 100%;
    display: flex;
    flex-direction: row;
    `;
    const ReviewContainerA = styled.div`
    width: 30%;
    float: left;
    padding-right: 60px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    `;
    const StarDiv = styled.div`
    border: 0;
    padding: 0;
    background-color: #fff;
    width: 88px;
    margin-bottom: 18px;
    `;
    const Attributes = styled.div`
    border: 0;
    padding: 0;
    background-color: #fff;
    width: 100%;
    margin-bottom: 18px;
    `;
    // Styling for 2nd column begins here:
    const ReviewContainerB = styled.div`
    width: 70%;
    float: right;
    margin-left: 0;
    background: #FFF;
    display: flex;
    flex-direction: column;
    `;
    const Title = styled.div`
    font-size: 14px;
    line-height: 1.6;
    color: #111;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 16px;
    `;
    const Comment = styled.div`
    font-size: 14px;
    line-height: 1.7;
    color: #111;
    margin-bottom: 0;
    margin-top: 5px;
    word-wrap: break-word;
    font-size: 16px;
    `;
    const Details = styled.div`
    width: 70%;
    margin-left: 0;
    text-align: left;
    line-height: 1.8;
    margin-bottom: 1rem;
    color: #6D6D6D;
    font-size: 12px;
    padding-top: 50px;
    `;
    const Upvote = styled.div`
    font-weight: normal;
    color: #6D6D6D;
    font-size: 12px;
    margin-left: 0px;
    background: #FFF;
    display: flex;
    flex-direction: row;
    `;

    const review = this.props.reviews;
    const userSize = (review.size / 2) * 100;
    const userComfort = (review.comfort / 2) * 100;
    const userDurability = (review.durability / 2) * 100;

    return (
      <ReviewContainer>
        <ReviewContainerA>
          <StarDiv name="starDiv" style={{ fontSize: '20px' }}>
            <StarMap ratings={review.overallRating} />
          </StarDiv>
          <Attributes>
            {SizeSlider(userSize)}
          </Attributes>
          <Attributes>
            {ComfortSlider(userComfort)}
          </Attributes>
          <Attributes>
            {DurabilitySlider(userDurability)}
          </Attributes>
        </ReviewContainerA>
        <ReviewContainerB>
          <div>
            <Title>{review.reviewTitle}</Title>
            <Comment>{review.review}</Comment>
          </div>
          <div>
            <Details>
              <div name="address" style={{ display: 'flex', flexDirection: 'row', fontSize: '15px' }}>
                <div>{moment(review.createdAt).format('LL')} &nbsp; </div>
                <div style={{ fontWeight: '500', color: '#6D6D6D' }} name="username"> -- {review.username} -- &nbsp; &nbsp; </div>
                <div> {review.city}, &nbsp; &nbsp;  </div>
                <div> {review.state},  {review.country} </div>
              </div>
              <div name="Verified" style={{ color: '#FA5400', fontSize: '15px' }}> Verified Purchaser</div>
              <div name="PlayStyle" style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <div name="playstyle" style={{paddingRight: '3px', fontSize: '15px' }}>I play on: {review.playArea} -- </div>
                <div name="offense" style={{paddingRight: '3px', fontSize: '15px' }}>My offense style: {review.offenseStyle} -- </div>
                <div name="defense" style={{paddingRight: '3px', fontSize: '15px' }}>My defense style: {review.defenseStyle}</div>
              </div>
            </Details>
          </div>
          <div>
            <Upvote name="vote">
              <div style={{ paddingRight: '23px', display: 'inline-flex' }}>
                <div name="upvote" className="upvoteArrow" onClick={() => this.upVote}>
                  <Upvoting fill="black" upVote={this.upVote} />
                </div>
                &nbsp;
                <span style={{ fontSize: '14px', position: 'relative', top: '3px' }}>{this.state.upvote}</span>
              </div>
              <div style={{ paddingRight: '23px', display: 'inline-flex' }}>
                <div name="downvote" className="upvoteArrow" style={{ transform: 'rotate(180deg', position: 'relative', bottom: '-1px'}}>
                  <Downvote downVote={this.downVote} />
                </div>
                &nbsp;
                <span style={{ fontSize: '14px', position: 'relative', top: '3px' }}>{this.state.downvote}</span>
              </div>
              <div>
                <span name="flag" className="flag" onClick={this.handleClick}>
                {this.clickFlag()}
                </span>
              </div>
            </Upvote>
          </div>
        </ReviewContainerB>
      </ReviewContainer>
    );
  }
}

export default UserReview;
