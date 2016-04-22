$("document").ready(function() {
	$.get("http://reddit.com/r/aww/.json", function (redditfeed){
		for (var i = 0; i < redditfeed.data.children.length; i++) {
			//Test json structure using console outputs
			//		console.log(redditfeed);
			//		console.log(redditfeed.data.children[0].data.thumbnail);
			//		console.log(redditfeed.data.children[0].data.author);
			//		console.log(redditfeed.data.children[0].data.title);
			
			//Store data I want into variables 
			thumbnail = redditfeed.data.children[i].data.thumbnail;
			author = redditfeed.data.children[i].data.author;
			title = redditfeed.data.children[i].data.title;
			//List format string variable
			row = "<!li><img src=" + thumbnail + "><h3>Author: "
					+ author + "</h3><p>" + title + "</p></li>";
		    
			$("ul").append(row);
		}
	});	
});