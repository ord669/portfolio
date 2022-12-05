(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

})(jQuery); // End of use strict



renderPortfolio()
function renderPortfolio(){
  const portfolio =  getgPortfolio()
  console.log('portfolio:', portfolio)
  const strHTMLs = portfolio.map( proj =>   `
  <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" data-toggle="modal" href="#${proj.id}">
      <div class="portfolio-hover">
        <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
        </div>
      </div>
      <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
    </a>
    <div class="portfolio-caption">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
    </div>
  </div>
  `
  )
  const $elPortfolioGallery = $('.main-gallery')
  $elPortfolioGallery.html(strHTMLs)
}


renderModal()
function renderModal(){
  const portfolio =  getgPortfolio()
  const strHTMLs = portfolio.map( proj =>   ` 
  <div class="portfolio-modal modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="close-modal" data-dismiss="modal">
        <div class="lr">
          <div class="rl"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="modal-body">
              <!-- Project Details Go Here -->
              <h2>${proj.name}</h2>
              <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
              <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
              <p>${proj.desc}</p>
              <ul class="list-inline">
                <li>Date: ${proj.publishedAt}</li>
                <li>Client: ${proj.labels}</li>
                <li>Category: ${proj.title}</li>
              </ul>
              <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `
  )
  const $elModal = $('.render-modal')
  $elModal.html(strHTMLs)
}



const $elForm = $('.submit-btn')
$elForm.on('click',sendEmail)

function sendEmail(ev){
  ev.preventDefault()
  const email = $('#form-email').val()
  const subject = $('#form-subject').val()
  const body = $('#form-body').val()
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, `_blank`);
  
  email.text('')
  subject.text('')
  body.text('')
  console.log('works:', 'works')
}