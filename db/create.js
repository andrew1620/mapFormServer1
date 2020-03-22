const uuid4 = require("uuid/v4");

function createDataBase() {
  const db = [];

  function getLayer(id) {
    return db.find(function(layer) {
      return layer.id === id;
    });
  }
  function updateParent(id, parent) {
    const foundLayer = getLayer(id);
    if (!foundLayer) {
      return false;
    }
    foundLayer.parent = parent;
    return true;
  }
  function getLayers() {
    return db
      .filter(function(layer) {
        return !layer.parent;
      })
      .map(function(layer) {
        return {
          id: layer.id,
          name: layer.name
        };
      });
  }
  function getLayerConfig(id) {
    const foundLayer = getLayer(id);
    if (!foundLayer) {
      return false;
    }
    return {
      id: foundLayer.id,
      name: foundLayer.name,
      childLayers: foundLayer.childLayers,
      options: foundLayer.options,
      objects: foundLayer.objects
    };
  }
  function createLayer(layer) {
    if (!layer) {
      return false;
    }
    const createdLayer = {
      id: uuid4(),
      name: layer.name,
      parent: null,
      childLayers: layer.childLayers,
      options: layer.options,
      objects: layer.objects
    };
    db.push(createdLayer);
    if (createdLayer.childLayers.length !== 0) {
      createdLayer.childLayers.forEach(function(childId) {
        updateParent(childId, createdLayer.id);
      });
    }
    return createdLayer.id;
  }
  function updateLayer(id, layer) {
    const foundLayer = getLayer(id);
    if (!foundLayer) {
      return false;
    }
    if (!layer) {
      return false;
    }
    Object.assign(foundLayer, {
      name: layer.name || foundLayer.name,
      childLayers: layer.childLayers || foundLayer.childLayers,
      options: layer.options || foundLayer.options,
      objects: layer.objects || foundLayer.objects
    });
    return id;
  }
  return {
    getLayer: getLayer,
    getLayers: getLayers,
    getLayerConfig: getLayerConfig,
    createLayer: createLayer,
    updateLayer: updateLayer
  };
}

module.exports = createDataBase;
