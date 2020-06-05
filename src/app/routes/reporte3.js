const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/reporte3', (req, res) => {
    connection.query('SELECT * FROM Discografia', (err, result) => {
      res.render('reportes/reporte3', {
        reporte3: result
      });
    });
  });

};
