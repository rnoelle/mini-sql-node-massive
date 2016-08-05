var app = require('./index');
var db = app.get('db');

module.exports = {
  getPlanes: function () {
    db.get_planes(25, function (err, planes) {
      console.log(err, planes);
    })
  },
  addPlane: function (req, res, next) {
    db.new_plane(function (err, planes) {
      console.log(err, "plane added");
    });
  }
}
