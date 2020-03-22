var db = require("./create.js")();
db.createLayer({
  name: "simple-layer-1",
  childLayers: [],
  options: {
    service: []
  },
  objects: {
    shape: "polygon",
    color: "red"
  }
});
db.createLayer({
  name: "simple-layer-2",
  childLayers: [],
  options: {
    service: []
  },
  objects: {
    shape: "polyline",
    color: "blue"
  }
});
db.createLayer({
  name: "composite-layer-1",
  childLayers: db.getLayers().map(function(layer) {
    return layer.id;
  }),
  options: {
    service: []
  },
  objects: {
    shape: "circle",
    color: "green"
  }
});
module.exports = function() {
  return function(req, res, next) {
    req.db = db;
    next();
  };
};
