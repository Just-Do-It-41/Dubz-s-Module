const { Reviews } = require('./index.js');
const { Shoes } = require('./index.js');

const models = {
  getReviews: () => (
    Reviews.find()
  ),

  getRecent: () => (
    Reviews.find().sort({ _id: -1 }).limit(3)
  ),

  getShoes: () => (
    Shoes.find()
  ),

  getUser: (id) => (
    Reviews.find({ _id: id })
  ),

  getRecent10: () => (
    Reviews.find().sort({ _id: -1 }).limit(10)
  ),

  getHelpful10: () => (
    Reviews.find().sort({ upvote: -1 }).limit(10)
  ),

  getHighest10: () => (
    Reviews.find().sort({ overallRating: -1 }).limit(10)
  ),

  getLowest10: () => (
    Reviews.find().sort({ overallRating: +1 }).limit(10)
  ),

  addReview: (review) => (
    Reviews.create(review)
  ),

  updateReview: (id, review) => (
    Reviews.findOneAndUpdate({ _id: id }, review)
  ),

  deleteReview: (id) => (
    Reviews.remove({ _id: id })
  ),
};

module.exports = models;
