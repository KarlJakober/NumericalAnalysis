/**
 * GET /projectzero
 * Project Zero, matrix multiplication
 */

exports.index = function(req, res) {
  res.render('projectzero', {
    title: 'Project Zero'
  });
};
