const models = require('../database/models.js');

const controller = {
  get: (req, res) => {
    models.getReviews()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getShoes: (req, res) => {
    models.getShoes()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getUser: (req, res) => {
    models.getUser(req.body)
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getRecent: (req, res) => {
    models.getRecent()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getRecent10: (req, res) => {
    models.getRecent10()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getHelpful10: (req, res) => {
    models.getHelpful10()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getHighest10: (req, res) => {
    models.getHighest10()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  getLowest10: (req, res) => {
    models.getLowest10()
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  post: (req, res) => {
    models.addReview(req.body)
      .then((results) => {
        res.status(200).send(results);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  put: (req, res) => {
    models.updateReview({ _id: req.params.id }, req.body)
      .then(() => {
        res.status(202).send('updated your review!');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
  delete: (req, res) => {
    models.deleteReview({ _id: req.params.id })
      .then(() => {
        res.status(202).send('review deleted!');
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },
};

module.exports = controller;
