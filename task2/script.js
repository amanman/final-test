"use strict"

// задача 1

var numb = [2, 5, 8, 4, 1, 12];
numb.sort(function(a, b) {
	return a – b;
});
console.log(numb);

// задача 2

var text = "The quick brown fox jumps over the lazy dog";

text.forEach(function(i){
	if(i.length > 3){
		return i;
	}
})

// задача 3

setInterval(function(){ 
 	var body = document.getElementsByTagName("body")[0];
	body.appendChild("<p>repetition is fun</p>");
}, 1000);

// задача 4 


$(document).ready(function(){
	var flag = true;
    setTimeout(function(){ 
		
		flag = !flag;
		
		if(flag){
			$('img').css({
				'width': 50%
			});
		}else{
			$('img').css({
				'width': 100%
			});
		}
	
	}, 2000);
});

// задача 5
var getCookieByName = function(name) {
    var res = ['-1','-1'];
    if(name) {
        var cookieRoll = document.cookie.split(';');
        result = $.grep(cookieRoll,function(cookie) { 
            cookie = cookie.split('=')[0];
            return cookie == name;
        });
    }
    return result;
};
