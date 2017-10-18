/* eslint-env node */
module.exports = function(app) {
  var express = require('express');
  var kidprofilesRouter = express.Router();

  kidprofilesRouter.get('/', function(req, res) {
    res.send({
      'kidprofiles': []
    });
  });

  kidprofilesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  kidprofilesRouter.get('/:id', function(req, res) {
    res.send({
      'kidprofiles': {
        id: req.params.id
      }
    });
  });

  kidprofilesRouter.put('/:id', function(req, res) {
    res.send({
      'kidprofiles': {
        id: req.params.id
      }
    });
  });

  kidprofilesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/kidprofiles', require('body-parser').json());
  app.use('/api/kidprofiles', kidprofilesRouter);
};
