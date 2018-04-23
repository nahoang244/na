$(document).ready(function(){

	console.log('calling ajax request');
	$.ajax('/status',{   //goi http request gian tiep den server
		method: 'GET'
	})
	//request gui len thanh cong
	.done(function (data, status, xhr) {
		console.log(data, status, xhr);
		if(!data.success) {
			alert('vui long dang nhap');
			return document.location.href = '/';
		}

		var innerhtml = "";
		for(var i=0; i< data.result.length;i++){
			innerhtml += '<div class="post margin-top-15px">\n'+
            '    		<div class="post-header">\n'+
            '       	<div class="username">\n'+
            '			'+data.result[i].userid+'\n'+
            '       	</div>'+
            '       	<div class="post-date">\n'+
            '			'+data.result[i].postDate+'\n'+
            '       	</div>\n'+
            '   		</div>\n'+
            '   		<div class="post-body margin-top-5px">\n'+
            '			'+data.result[i].content+'\n'+
            '    		</div>\n'+
            '    		<div class="post-footer margin-top-5px">\n'+
            '        	<button class="btn btn-secondary">Like</button>\n'+
            '    		</div>\n'+
            '			</div>';
		}
		$("#statuses").html(innerhtml);

	}) 

	//request gui len that bai
	.fail(function(xhr, status, err){
		console.log(xhr, status, err);
	})
	.always(function(){
		//alert('request da duoc thuc hien');
	});
});