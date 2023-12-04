$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});

$('document').ready(function(){
	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		var audio = $('.song')[0];
    audio.play();
    $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('background-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne(){
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b1').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopOne();
		});
	}
	function loopTwo(){
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b2').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopTwo();
		});
	}
	function loopThree(){
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b3').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopThree();
		});
	}
	function loopFour(){
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b4').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopFour();
		});
	}
	function loopFive(){
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b5').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopFive();
		});
	}
	function loopSix(){
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b6').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopSix();
		});
	}
	function loopSeven(){
		var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b7').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopSeven();
		});
	}
  function loopEight(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b8').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopEight();
		});
  }
	function loopNine(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b9').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopNine();
		});
  }
	function loopTen(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b10').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopTen();
		});
  }
	function loopEleven(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b11').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopEleven();
		});
  }
	function loopTwelve(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b12').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopTwelve();
		});
  }
	function loopThirteen(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b13').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopThirteen();
		});
  }
	function loopFourteen(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b14').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopFourteen();
		});
  }
	function loopFifteen(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b15').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopFifteen();
		});
  }
	function loopSixteen(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b16').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopSixteen();
		});
  }
	function loopSeventeen(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b17').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopSeventeen();
		});
  }
  function loopEighteen(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b18').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopEighteen();
		});
  }
  function loopNineteen(){
    var randleft = 1000 * Math.random();
		var randtop = 500 * Math.random();
		$('#b19').animate({left:randleft, bottom:randtop}, 10000, function(){
			loopNineteen();
		});
  }

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500}, 8000);
		$('#b1, #b4, #b5, #b8, #b9, #b12, #b13, #b16, #b17').addClass('balloons-rotate-behaviour-one');
		$('#b2, #b3, #b6, #b7, #b10, #b11, #b14, #b15, #b18, #b19').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		loopTen();
		loopEleven();
		loopTwelve();
		loopThirteen();
		loopFourteen();
		loopFifteen();
		loopSixteen();
		loopSeventeen();
		loopEighteen();
		loopNineteen();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width() / 2;

		$('#b1, #b2, #b3, #b4, #b5, #b6, #b7, #b8, #b9, #b10, #b11, #b12, #b13, #b14, #b15, #b16, #b17, #b18').stop();
		$('#b1').attr('id', 'a');
		$('#b2').attr('id', 'b');
		$('#b3').attr('id', 'c');
		$('#b4').attr('id', 'd');
		$('#b5').attr('id', 'e');
		$('#b6').attr('id', 'f');
		$('#b7').attr('id', 'g');
		$('#b8').attr('id', 'h');
		$('#b9').attr('id', 'i');
		$('#b10').attr('id', 'j');
		$('#b11').attr('id', 'k');
		$('#b12').attr('id', 'l');
		$('#b13').attr('id', 'm');
		$('#b14').attr('id', 'n');
		$('#b15').attr('id', 'o');
		$('#b16').attr('id', 'p');
		$('#b17').attr('id', 'q');
		$('#b18').attr('id', 'r');
		$('#a').animate({top:140, left: vw - 550}, 500);  	// P
		$('#b').animate({top:140, left: vw - 450}, 500);  	// A
		$('#c').animate({top:140, left: vw - 350}, 500);  	// K
		$('#d').animate({top:140, left: vw - 150}, 500);  	// C
		$('#e').animate({top:140, left: vw - 50}, 500);  		// R
		$('#f').animate({top:140, left: vw + 50}, 500);  		// O
		$('#g').animate({top:140, left: vw + 150}, 500);  	// W
		$('#h').animate({top:140, left: vw + 250}, 500);  	// N
		$('#i').animate({top:240, left: vw - 450}, 500);  	// D
		$('#j').animate({top:240, left: vw - 350}, 500);  		// I
		$('#k').animate({top:240, left: vw - 250}, 500);  		// R
		$('#l').animate({top:240, left: vw - 150}, 500);  	// G
		$('#m').animate({top:240, left: vw - 50}, 500);   	// A
		$('#n').animate({top:240, left: vw + 50}, 500);  	// N
		$('#o').animate({top:240, left: vw + 150}, 500);  	// T
		$('#p').animate({top:240, left: vw + 250}, 500);  	// O
		$('#q').animate({top:240, left: vw + 350}, 500);  	// R
		$('#r').animate({top:240, left: vw + 450}, 500);  	// O
		$('.balloons').css('opacity', '0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;
		function msgLoop(i){
			$("p:nth-child(" + i + ")").fadeOut('slow').delay(1000).promise().done(function(){
			  i = i + 1;
			  $("p:nth-child(" + i + ")").fadeIn('slow').delay(4000);
			  if(i == 50){
			  	$("p:nth-child(49)").fadeOut('slow').promise().done(function(){
			  	});
			  }
			  else{
			  	msgLoop(i);
			  }			
		  });
		}
		
		msgLoop(0);
	});
});
