var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json(req.db.getLayers());
});

router.get("/configs/:id", function(req, res, next) {
  const { id } = req.params;
  const config = req.db.getLayerConfig(id);
  if (config) {
    res.json(config);
  } else {
    res.send(404);
  }
});

router.post("/configs", function(req, res, next) {
  const layer = req.body;
  const result = req.db.createLayer(layer);
  if (result) {
    res.send(200);
  } else {
    res.send(400);
  }
});

router.put("/configs/:id", function(req, res, next) {
  const { id } = req.params;
  const layer = req.body;
  const result = req.db.updateLayer(id, layer);
  if (result) {
    res.send(200);
  } else {
    res.send(400);
  }
});

module.exports = router;
