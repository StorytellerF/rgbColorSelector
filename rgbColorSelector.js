function rgbColorSelector( coorX, coorY,alpha) {
	function newRadian () {
		radian = ((Math.PI / 2) - radian);
		radian = (Math.PI / 6) - radian;
		arcLength = radian * radius;
		leftArcLength = itemArcLength - arcLength;
	}
	const allRadius = 127.5; //最大圆半径
	var x = coorX;
	var y = coorY;
	//console.log("x:"+x+" y:"+y);
	var allArcLength = ((Math.PI * allRadius) / 3); /*每一小段弧长*/
	var radius = Math.sqrt(Math.pow((x - allRadius), 2) + Math.pow(y - allRadius, 2));
	//console.log("所在圆半径："+radius);
	
	//三条线 
	//二
	var Line2 = ((allRadius - x) * Math.sqrt(3) / 3) + allRadius;
	//三
	var Line3 = ((x - allRadius) * Math.sqrt(3) / 3) + allRadius;

	var radian = Math.atan2(Math.abs(x - allRadius), Math.abs(allRadius - y)); //弧度
	var arcLength = radian * radius; //弧长
	var itemArcLength = (Math.PI * radius) / 3;//单项弧长
	var leftArcLength = itemArcLength - arcLength; //剩余弧长
	//console.debug("弧度："+radian+"弧长："+arcLength+"单项弧长："+itemArcLength+"剩余弧长:"+leftArcLength);
	if(x >= allRadius) {
		//123
		if(y <= Line2) {
			//1
			//console.debug("弧度："+radian+"弧长："+arcLength+"单项弧长："+itemArcLength+"剩余弧长:"+leftArcLength);
			colorR = allRadius + radius;
			colorG = (arcLength * (allRadius + radius)) / itemArcLength;
			colorB = allRadius - radius;
		} else if(y > Line2 && y <= Line3) {
			//2.5
			//console.debug("弧度："+radian+" 弧长："+arcLength+" 单项弧长："+itemArcLength+" 剩余弧长:"+leftArcLength);
			newRadian();
			if(y > allRadius) {
				colorR = (arcLength * (allRadius + radius)) / itemArcLength;
			} else {
				colorR = (leftArcLength * (allRadius + radius)) / itemArcLength;
			}
			colorG = allRadius + radius;
			colorB = allRadius - radius;
		} else {
			colorR = allRadius - radius;
			colorG = allRadius + radius;
			colorB = (leftArcLength * (allRadius + radius)) / itemArcLength;
		}
	} else {
		//456
		if(y >= Line2) {
			colorR = allRadius - radius;
			colorG = (leftArcLength * (allRadius + radius)) / itemArcLength;
			colorB = allRadius + radius;
		} else if(y < Line2 && y >= Line3) {
			//console.debug("弧度："+radian+" 弧长："+arcLength+" 单项弧长："+itemArcLength+" 剩余弧长:"+leftArcLength);
			newRadian();
			if(y > allRadius) {
				colorR = (arcLength * (allRadius + radius)) / itemArcLength;
			} else {
				colorR = (leftArcLength * (allRadius + radius)) / itemArcLength;
			}
			colorG = allRadius - radius;
			colorB = allRadius + radius;
		} else {
			colorR = allRadius + radius;
			colorG = allRadius - radius;
			colorB = (arcLength * (allRadius + radius)) / itemArcLength;
		}
	}
	var stringbuffer=new StringBuffer();
	stringbuffer.append("rgb(");
	stringbuffer.append(parseInt(colorR));
	stringbuffer.append(',');
	stringbuffer.append(parseInt(colorG));
	stringbuffer.append(',');
	stringbuffer.append(parseInt(colorB));
	var res = stringbuffer.toString();
//	console.log(res);
	var colorArr=new Array();
	colorArr['r']=parseInt(colorR);
	colorArr['g']=parseInt(colorG);
	colorArr['b']=parseInt(colorB);
	colorArr['a']=parseFloat(alpha);
	colorArr['rgb']=res+")";
	colorArr['rgba']=res+","+parseFloat(alpha)+")";
	return colorArr;
}