// function splitScroll(){
//   const controller = new ScrollMagic.Controller();

//   new ScrollMagic.Scene({
//     duration: '200%',
//     triggerElement: '.about-title',
//     //sets where the trigger is activated from
//     triggerHook:0
//   })
//   .setPin('.about-title')
//   .addIndicators()
//   .addTo(controller)
// }

// $(window).resize(function(){
//   if( $(this).width() >= 992 ) {
//   splitScroll();
// } });

function scrollAppear(){
  const project1Text = document.querySelector('.project1-text');
  const project2Text = document.querySelector('.project2-text');
  const project3Text = document.querySelector('.project3-text');
  const project1Position = project1Text.getBoundingClientRect().top;
  const project2Position = project2Text.getBoundingClientRect().top;
  const project3Position = project3Text.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;
  if(project1Position < screenPosition){
    project1Text.classList.add('project-text-appear')
  }
  if(project2Position < screenPosition){
    project2Text.classList.add('project-text-appear')
  }
  if(project3Position < screenPosition){
    project3Text.classList.add('project-text-appear')
  }
}

window.addEventListener('scroll', scrollAppear);
