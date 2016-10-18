$(function() {
  console.log('\'Allo \'Allo!');

  /*Variablizes TWEENMAX */
  var tm = TweenMax;

  /*Move Page Variables */
  var one = $('.one'),
    two = $('.two'),
    three = $('.three'),
    allthree = $('.one, .two, .three'),
    title_one = $('.title_one'),
    title_two = $('.title_two'),
    title_three = $('.title_three'),

    subcaption = $('.subcaption'),
    featureImg = $('.featured-img'),
    featuredEls = $('.subcaption, .featured-img');

  /*Move Page Variable Arrays*/
  var divs = [one, two, three];
  var titles = [title_one, title_two, title_three];
  var cardExpandEls = [subcaption, featureImg];

  /* LOAD UP OUR MOVIE CARD */
  function moviePageIntro() {
    /*TweenMaxMethod.StaggerFunction(element, speed, {parameters}, staggerdelay) */
    tm.staggerFrom(divs, .5, {
      y: 100,
      opacity: 0
    }, 0.5);

    tm.staggerFrom(titles, .9, {
      y: 100,
      opacity: 0
    }, 0.5);
  };

  /*TRIGGER OUR MOVIE CARD FUNCTION TO LOAD */
  moviePageIntro();

  /* LOAD UP OUR MOVIE CARD */
  function movieCardExpand() {
    /*TweenMaxMethod.StaggerFunction(element, speed, {parameters}, staggerdelay) */
    tm.staggerFrom(cardExpandEls, .5, {
      y: 100,
      opacity: 0,
      // autoAlpha: 1,
    }, 0.5);
    featuredEls.css("visibility", 'visible');
  };

  /* ESTABLISH A TOGGLE CLICK METHOD */
  $.fn.clickToggle = function(func1, func2) {
    var funcs = [func1, func2];
    this.data('toggleclicked', 0);
    this.click(function() {
      var data = $(this).data();
      var tc = data.toggleclicked;
      $.proxy(funcs[tc], this)();
      data.toggleclicked = (tc + 1) % 2;
    });
    return this;
  };

  /* SELECT FIRST MOVIE CARD */
  one.clickToggle(function() {
    var $this = $(this);
    tm.to($this, .5, {
      position: "absolute",
      zIndex: 500,
      width: '102vw',
      left: '0',
      // force3D: true,
      ease: Power1.easeInOut
    });

    one.find('.card-img').addClass('img-blur');
    two.css({"position": "absolute", "left": "33.33vw"});
    three.css({"position": "absolute", "left": "66.66vw"});
    setTimeout(function(){
      movieCardExpand();
    }, 150);

  }, function() {
    resetMovieCards();
  });

  /* SELECT SECOND MOVIE CARD */
  two.clickToggle(function() {
    var $this = $(this);
    tm.to($this, .5, {
      position: "absolute",
      zIndex: 500,
      width: '102vw',
      left: '0',
      // force3D: true,
      ease: Power1.easeInOut
    });
    one.css({"position": "absolute", "left": "0"});
    two.find('.card-img').addClass('img-blur');
    three.css({"position": "absolute", "left": "66.66vw"});
    setTimeout(function(){
      movieCardExpand();
    }, 150);

  }, function() {
    resetMovieCards();
  });

  /* SELECT THIRD MOVIE CARD */
  three.clickToggle(function() {
    var $this = $(this);
    tm.to($this, .5, {
      position: "absolute",
      zIndex: 500,
      width: '102vw',
      left: '0',
      // force3D: true,
      ease: Power1.easeInOut
    });
    one.css({"position": "absolute", "left": "0"});
    two.css({"position": "absolute", "left": "33.33vw"});
    three.find('.card-img').addClass('img-blur');
    setTimeout(function(){
      movieCardExpand();
    }, 150);

  }, function() {
    resetMovieCards();
  });

  /* RESET MOVIE CARDS AFTER SELECTION */
  function resetMovieCards() {
    console.log('reset');
    tm.to([
      one, two, three
    ], .5, {
      position: "relative",
      zIndex: 0,
      width: '33.2vw',
      left: 'auto'
    });
    featuredEls.css("visibility", 'hidden');
    allthree.find('img').removeClass('img-blur');
    allthree.css({"position": "relative", "left": "auto", "z-index": 0, "width": "33.23vw"});
    moviePageIntro();
  }
})
