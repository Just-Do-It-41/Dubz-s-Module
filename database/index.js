const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost/reviews';
mongoose.connect(mongoURI)
  .then(() => {
    console.log('you are now connected to mongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const reviewSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  country: String,
  city: String,
  comfort: Number,
  durability: Number,
  offenseStyle: String,
  defenseStyle: String,
  overallRating: Number,
  playArea: String,
  review: String,
  reviewTitle: String,
  size: Number,
  state: String,
  upvote: Number,
  downvote: Number,
}, {
  timestamps: true,
});

const shoePictures = mongoose.Schema({
  colorway: String,
  media: [],
  sizes: [],
  stock: [],
  favorite: { type: Boolean, default: false },
  details: String,
  style: String,
  moreBenefits: String,
});

const Reviews = mongoose.model('Reviews', reviewSchema);
const Shoes = mongoose.model('ShoePictures', shoePictures);

module.exports.Reviews = Reviews;
module.exports.Shoes = Shoes;
