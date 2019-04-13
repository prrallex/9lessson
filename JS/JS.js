// $("a").click(function (event) {
// 	event.preventDefault();
// 	var href = $(this).attr('href');
// 	$("#resault").text(href)

// 	});

// $("img").click(function(event){
// 	$(this).attr('src','http://www.port2all.dp.ua/uploads/posts/2010-05/1272875381_252556.jpg')
// });


// $("div").click(function(event){
// 	event.preventDefault();
// 	console.log($(this).children())
// 	$(this).next().addClass('border')
// });

$("div").click(function(event){
	$(this).find('.class').addClass('border')
});