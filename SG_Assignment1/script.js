//Console Log Favorite Things

var favthings=["cooking spaghetti sauce", "fishing for a variety of different fish species", "phone calls with loved ones", "visiting friends at their homes", "eating ice cream", "sharing", "long walks in the parks", "patting friendly dogs", "watering the plants", "watching movies", "attending rock and roll concerts", "taking a relaxing shower", "being nice to the neighbors", "driving the car on the open road", "making a painting", "having a cup of coffee in the morning", "humming a happy tune", "maintaining a positive outlook", "reading an article on the net", "conversations with strangers", "catching up with old friends", "tidying up the house", "taking a nap in the hammock", "watching cartoons with my sister", "swinging on the porch swing", "earning the respect of others", "growing veggies in the garden", "learning about new things", "daydreaming about outer space", "checking the mail", "Thank you for visitng my website"];


function logValue(value){
	console.log(value)
}
favthings.forEach(logValue);

//Print Favorite Things To Page

for (i= 1; i<favthings.length; i++){
	(function(i){
		setTimeout(function(){
		document.getElementById("favtext").innerHTML = favthings[i];
		}, 1500 * i);
	}(i));
}

