

var mgObject = new Mg({
  reference: "image",
  click: {
    activated: [0],
    cycle: true,
    interactive: true,
    maxActivated: 1,
    auto: 1000, autoSlow: 5000
  }
});

// specify gallery click event function
mgObject.click.onEvent = function () {
  document.getElementById("#" + this.reference + "-item-" + this.deactivated).className = '';
  document.getElementById("#" + this.reference + "-item-" + this.activated).className = 'active';
}

// init the gallery
mgObject.init();