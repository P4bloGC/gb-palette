window.onload = function() {
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("layout");
	c.width = img.width;
	c.height = img.height;
	ctx.drawImage(img, 0, 0);
	updateImage();
};

function hexToGb(hex,id) 
{	
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);	
	var r = Math.min(31, Math.round(parseInt(result[1], 16) / 8));
	var g = Math.min(63, Math.round(parseInt(result[2], 16) / 4));
	var b = Math.min(31, Math.round(parseInt(result[3], 16) / 8));
	
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

function hexToRgbArr(hex) 
{
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (!result) return [0, 0, 0];
	return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}

function updateImage()
{
	var target0 = [0x7f, 0x86, 0x0f];
	var target1 = [0x57, 0x7c, 0x44];
	var target2 = [0x36, 0x5d, 0x48];
	var target3 = [0x2a, 0x45, 0x3b];
	
	var replace0 = hexToRgbArr($('#hex0').val());
	var replace1 = hexToRgbArr($('#hex1').val());
	var replace2 = hexToRgbArr($('#hex2').val());
	var replace3 = hexToRgbArr($('#hex3').val());
	
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	var img = document.getElementById("layout");
	c.width = img.width;
	c.height = img.height;
	ctx.drawImage(img, 0, 0);
	var imageData = ctx.getImageData(0, 0, c.width, c.height);
	var data = imageData.data;
	
	for (var i = 0; i < data.length; i += 4) 
	{
		var r = data[i];
		var g = data[i + 1];
		var b = data[i + 2];
		
		if (r === target0[0] && g === target0[1] && b === target0[2])
		{
			data[i] = replace0[0];
			data[i + 1] = replace0[1];
			data[i + 2] = replace0[2];
		}
		else if (r === target1[0] && g === target1[1] && b === target1[2])
		{
			data[i] = replace1[0];
			data[i + 1] = replace1[1];
			data[i + 2] = replace1[2];
		}
		else if (r === target2[0] && g === target2[1] && b === target2[2])
		{
			data[i] = replace2[0];
			data[i + 1] = replace2[1];
			data[i + 2] = replace2[2];
		}
		else if (r === target3[0] && g === target3[1] && b === target3[2])
		{
			data[i] = replace3[0];
			data[i + 1] = replace3[1];
			data[i + 2] = replace3[2];
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


