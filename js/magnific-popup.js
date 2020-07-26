$('.open-popup-link').magnificPopup({
  type:'inline',
  closeBtnInside: true,
  fixedContentPos: false,
  // delegate: 'a',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
      this.st.mainClass = this.st.el.attr('data-effect');
    },
  },
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});
