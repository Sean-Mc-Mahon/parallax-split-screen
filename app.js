function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
    duration: '200%',
    triggerElement: '.about-title',
    //sets where the trigger is activated from
    triggerHook:0
  })
  .setPin('.about-title')
  .addIndicators()
  .addTo(controller)
}

splitScroll();