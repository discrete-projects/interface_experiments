$(function() {
  console.log('\'Allo \'Allo!');

  /*Variablizes TWEENMAX */
  var tm = TweenMax;
  // var tl = new TimelineLite();

  //
  //{onComplete:completeHandler}

  /*Index Page Variables */

  var indexItmOne = $('.index-item-one'),
    indexItmTwo = $('.index-item-two'),
    indexItmThree = $('.index-item-three'),
    indexItmFour = $('.index-item-four');

  /*Move Page Variable Arrays*/
  var indexItms = [indexItmOne, indexItmTwo, indexItmThree, indexItmFour];

  /*Move Page Variables */
  var one = $('.one'),
    two = $('.two'),
    three = $('.three'),
    allthree = $('.one, .two, .three'),
    title_one = $('.title_one'),
    title_two = $('.title_two'),
    title_three = $('.title_three'),

    subcaptionOne = $('.subcaption-one'),
    featureImgOne = $('.featured-img-one'),
    featuredElsOne = $('.subcaption-one, .featured-img-one'),

    subcaptionTwo = $('.subcaption-two'),
    featureImgTwo = $('.featured-img-two'),
    featuredElsTwo = $('.subcaption-two, .featured-img-two'),

    subcaptionThree = $('.subcaption-three'),
    featureImgThree = $('.featured-img-three'),
    featuredElsThree = $('.subcaption-three, .featured-img-three');

  /*Move Page Variable Arrays*/
  var divs = [one, two, three];
  var titles = [title_one, title_two, title_three];
  var cardExpandElsOne = [subcaptionOne, featureImgOne],
      cardExpandElsTwo = [subcaptionTwo, featureImgTwo],
      cardExpandElsThree = [subcaptionThree, featureImgThree];

  var movieCards = $('.movie-card-wrapper');

  /* LOAD UP OUR IDEX ITEMS */
  function indexItmSelected() {

    var tl = new TimelineMax({onComplete: moviePageIntro});

    /*TweenMaxMethod.StaggerFunction(element, speed, {parameters}, staggerdelay) */

    tl.to(indexItmOne, 0.7, {
      y: -200,
      opacity: 0
    }, 0.1);

    tl.to(indexItmTwo, 0.7, {
      y: -200,
      opacity: 0
    }, 0.3);

    tl.to(indexItmThree, 0.7, {
      y: -200,
      opacity: 0
    }, 0.9);

    tl.to(indexItmFour, 0.7, {
      y: -200,
      opacity: 0
    }, 0.6);

  };

  indexItmThree.on('click', function() {
    console.log('foo');
    indexItmSelected();
  })

  /* LOAD UP OUR MOVIE CARD */
  function moviePageIntro() {
    movieCards.show();
    console.log('fooo');
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

  /* LOAD UP OUR MOVIE CARD */
  function movieCardExpandOne() {
    tm.staggerFrom(cardExpandElsOne, .5, {
      y: 100,
      opacity: 0
    }, 0.3 );
    featuredElsOne.css("visibility", 'visible');
  };

  /* LOAD UP OUR MOVIE CARD */
  function movieCardExpandTwo() {
    tm.staggerFrom(cardExpandElsTwo, .5, {
      y: 100,
      opacity: 0
    }, 0.3 );
    featuredElsTwo.css("visibility", 'visible');
  };

  /* LOAD UP OUR MOVIE CARD */
  function movieCardExpandThree() {
    tm.staggerFrom(cardExpandElsThree, .5, {
      y: 100,
      opacity: 0
    }, 0.3 );
    featuredElsThree.css("visibility", 'visible');
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
    tm.to(one, .5, {
      width: '95vw'
    });
    tm.to(two, .5, {
      width: '2.5vw'
    }, 1.7);
    tm.to(three, .5, {
      width: '2.5vw'
    }, 1.7);
    one.css('background-color', 'black');
    one.find('.card-img').addClass('img-blur');
    setTimeout(function() {
      movieCardExpandOne();
    }, 150);
  }, function() {
    resetMovieCards();
  });

  /* SELECT SECOND MOVIE CARD */
  two.clickToggle(function() {
    tm.to(two, .5, {
      width: '95vw'
    });
    tm.to(one, .5, {
      width: '2.5vw'
    }, 1.7);

    tm.to(three, .5, {
      width: '2.5vw'
    }, 1.7);
    two.css('background-color', 'black');
    two.find('.card-img').addClass('img-blur');
    setTimeout(function() {
      movieCardExpandTwo();
    }, 150);
  }, function() {
    resetMovieCards();
  });

  /* SELECT THIRD MOVIE CARD */
  three.clickToggle(function() {
    tm.to(three, .5, {
      width: '95.5vw'
    });

    tm.to(one, .5, {
      width: '2.5vw'
    }, 1.7);

    tm.to(two, .5, {
      width: '2.5vw'
    }, 1.7);

    three.css('background-color', 'black');
    three.find('.card-img').addClass('img-blur');
    setTimeout(function() {
      movieCardExpandThree();
    }, 150);
  }, function() {
    resetMovieCards();
  });


  /* RESET MOVIE CARDS AFTER SELECTION */
  function resetMovieCards() {
    tm.to(one, .7, {
      position: "relative",
      width: '33.2vw',
      ease: Power1.easeInOut
    }, 2);
    tm.to(two, .5, {
      position: "relative",
      width: '33.2vw',
      ease: Power1.easeInOut
    }, 2);
    tm.to(three, .5, {
      position: "relative",
      width: '33.2vw',
      ease: Power1.easeInOut
    }, 2);

    one.find('.card-img').removeClass('img-blur');
    two.find('.card-img').removeClass('img-blur');
    three.find('.card-img').removeClass('img-blur');

    setTimeout(function() {
      featuredElsOne.css("visibility", 'hidden');
      featuredElsTwo.css("visibility", 'hidden');
      featuredElsThree.css("visibility", 'hidden');

      allthree.find('img').removeClass('img-blur');
      allthree.css({"position": "relative", "left": "auto", "z-index": 0, "width": "33.23vw"});
    }, 175);
  }
})
