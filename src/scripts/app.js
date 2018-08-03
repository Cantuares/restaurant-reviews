var app = {
  init: function() {
    var mapContainer = document.getElementById('map-container');
    mapContainer.addEventListener('focusout', this.accessibility.skipMapsFocus, false);
  },
  accessibility: {
    skipMapsFocus: function() {}
  }
}
window.addEventListener('DOMContentLoaded', function() {
  app.init();
});