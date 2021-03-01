import React from 'react';
import styled from 'styled-components';
import StarRenderer from './StarRenderer.jsx';
import StarMap from './StarMap.jsx';
import moment from 'moment';

class ReviewInstance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const ReviewContainer1 = styled.div`
      margin-bottom: 40px;
      display: block;
      width: 100%;
  `;
    const ReviewContainer2 = styled.div`
    padding-left: 16px;
    display: flex;
    flex-direction: column;
  `;

    const TitleContainer = styled.div`
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    display: block;
    width: 100%;
  `;
    const StarContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    width: 100%;
  `;



    const Title = styled.div`
    font-weight: 500;
    font-family: Helvetica Neue;
    font-size: 19px;
    line-height: 1.5;
    display: block;
    margin-bottom: 6px;
  `;

    const Date = styled.div`
    color: #757575;
    padding-left: 16px;
    display: inline-block;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 400;
  `;

    const Comments = styled.div`
    margin-top: 15px;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
    display: block;

    overflow-wrap: break-word;
    overflow: hidden;
    position: relative;
    height: fit-content;
    font-weight: 400
  `;

    return (
      <ReviewContainer1 name="ReviewContainer1">
        <ReviewContainer2 name="ReviewContainer2">
          <TitleContainer name="TitleContainer">
            <Title name="Title">
              {this.props.reviews.reviewTitle}
            </Title>
          </TitleContainer>
          <div style={{display: 'flex', flexDirection: 'row', fontSize: '19px'}}>
              <StarMap name="StarMap" ratings={this.props.reviews.overallRating}/>
            <Date>
              {this.props.reviews.username} - {moment(this.props.reviews.createdAt).format('ll')}
            </Date>
            </div>
            <ReviewContainer2>
            </ReviewContainer2>
          <Comments style={{fontFamily: 'Helvetica Neue', fontSize: '19px'}}>{this.props.reviews.review}</Comments>
        </ReviewContainer2>
      </ReviewContainer1>
    );
  }
}

export default ReviewInstance;
