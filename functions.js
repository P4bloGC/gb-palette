window.onload = function() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("layout");
	c.width = img.width;
	c.height = img.height;
	ctx.drawImage(img, 0, 0);	
};

function hexToGb(hex,id) 
{	
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);	
	var	r = Math.round(parseInt(result[1], 16)/8);
	var	g = Math.round(parseInt(result[2], 16)/4);
	var	b = Math.round(parseInt(result[3], 16)/8);
	
	if(r > 31)
	{
		var r = 31;
	}
	
	if(g > 63)
	{
		var g = 63;
	}
	
	if(b > 31)
	{
		var b = 31;
	}
	
	$(".itemHex" + id).css("background-color",hex);
	$(".rHex" + id).val(r);
	$(".gHex" + id).val(g);
	$(".bHex" + id).val(b);
	
	$("#btnR" + id).val(parseInt(result[1], 16));
	$("#btnG" + id).val(parseInt(result[2], 16));
	$("#btnB" + id).val(parseInt(result[3], 16));
	
	$("#r" + id).text(r);
	$("#g" + id).text(g);
	$("#b" + id).text(b);
	
	updateImage();
	
}

function hexToRgb(hex) 
{
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	var r = parseInt(result[1], 16);
	var g = parseInt(result[2], 16);
	var b = parseInt(result[3], 16);
	
	return r+";"+g+";"+b;
	
}

function rgbToHex(r, g, b) 
{
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgbToGb(num)
{
	var r = parseInt($('#btnR' + num).val());
	var g = parseInt($('#btnG' + num).val());
	var b = parseInt($('#btnB' + num).val());
	var hex = rgbToHex(r, g, b);
	$('#hex' + num).val(hex);
	hexToGb(hex, num);
}

function updateImage()
{
	var target0 = '#7f860f';
	var target1 ='#577c44';
	var target2 ='#365d48';
	var target3 ='#2a453b';
	var replace0 = $('#hex0').val();
	var replace1 = $('#hex1').val();
	var replace2 = $('#hex2').val();
	var replace3 = $('#hex3').val();
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("layout");
	c.width = img.width;
	c.height = img.height;
	ctx.drawImage(img, 0, 0);
	var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	var data = imageData.data;
	
	for (var i = 0; i < data.length; i+= 4) 
	{
		var hex = rgbToHex(data[i], data[i+1], data[i+2]);
		
		if(hex == target0)
		{
			var rgb = hexToRgb(replace0).split(';');
			data[i] = rgb[0] // Red
			data[i+1] = rgb[1] // Green
			data[i+2] = rgb[2] // Blue
		}
		
		if(hex == target1)
		{
			var rgb = hexToRgb(replace1).split(';');
			data[i] = rgb[0] // Red
			data[i+1] = rgb[1] // Green
			data[i+2] = rgb[2] // Blue	
		}
		
		if(hex == target2)
		{
			var rgb = hexToRgb(replace2).split(';');
			data[i] = rgb[0] // Red
			data[i+1] = rgb[1] // Green
			data[i+2] = rgb[2] // Blue			
		}
		
		if(hex == target3)
		{
			var rgb = hexToRgb(replace3).split(';');
			data[i] = rgb[0] // Red
			data[i+1] = rgb[1] // Green
			data[i+2] = rgb[2] // Blue			
		}
		
	}
	
	ctx.putImageData(imageData, 0, 0);
}

function downloadImage() 
{
	var name = $('#palette').val();
	$('.title').text(name)
	var container = document.getElementById("image");
	html2canvas(container, { allowTaint: true }).then(function (canvas) {	
		var link = document.createElement("a");
		document.body.appendChild(link);
		//link.download = "GB-Palette.png";
		link.download = name+".png";
		link.href = canvas.toDataURL();
		link.target = '_blank';
		link.click();
	});
}


