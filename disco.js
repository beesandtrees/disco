$(document).ready(function(){
			
	var colors, first, second, third, newColr, clz, 
		size = parseInt(($(window).width()/10)-10), 
		half = parseInt($(window).width())/20;	
		
	function minmax(min, max){
			maxi = parseFloat(max);
			mini = parseFloat(min);
			maximus = (maxi - mini) + 1;
		    return (Math.floor(Math.random() * maximus) + mini);
	}	

	function createColors(fmin, fmx, smin, smx, tmin, tmx){
		colors = '';
		fmin = typeof(fmin) != 'undefined' ? fmin : 0;
		fmx = typeof(fmx) != 'undefined' ? fmx : 255;
		smin = typeof(smin) != 'undefined' ? smin : 0;
		smx = typeof(smx) != 'undefined' ? smx : 255;
		tmin = typeof(tmin) != 'undefined' ? tmin : 0;
		tmx = typeof(tmx) != 'undefined' ? tmx : 255;
		
		$b = 0;
			
		while($b <=100) {
		
			first = minmax(fmin,fmx); 
			second = minmax(smin,smx); 
			third = minmax(tmin,tmx); 
			
			bg = 'background-color:rgb(' + first + ', ' + second + ', '+ third + ')';
			style = 'style="border-radius: '+ half +'px; width:'+ size +'px; height:'+ size +'px; '+ bg +'"';					
						
			colors += '<div class="colorholder">';
			colors += '<div class="eaColor" '+ style +'></div></div>';
			$b++;
		}

		
		$('#colorBLOCK').html(colors);
		
		move = setTimeout(function() {
			switch (clz) {
			   case 'red':
			      createColors(200,255,0,255,0,255);
			      break;
			   case 'green':
			      createColors(0,255,200,255,0,255);
			      break;
			   case 'blue':
			      createColors(0,255,0,255,200,255);
			      break;
			   default:
			      createColors();
			      break;
			}
		}, 500);			
		
	}			

	createColors();
	
	$('.stop').click(function(){
		$(this).hide();
		$('.start').show();
		window.clearTimeout(move);
	});
	
	$('.start li').click(function(){
		$('.start').hide();
		$('.stop').show();
		
		clz = $(this).attr('class');	
		
		switch (clz) {
		   case 'red':
		      createColors(200,255,0,255,0,255);
		      break;
		   case 'green':
		      createColors(0,255,200,255,0,255);
		      break;
		   case 'blue':
		      createColors(0,255,0,255,200,255);
		      break;
		   default:
		      createColors();
		      break;
		}				
					
	});			
				
});
