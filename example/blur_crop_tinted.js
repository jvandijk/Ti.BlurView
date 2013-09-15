//image sample provided by http://ny-pictures.com/nyc/photo/picture/42553/nostalgic_view_famous_hall
var mod = require('bencoding.blur');
Ti.API.info("module is => " + mod);

Ti.UI.backgroundColor = "#000";

// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'blue'
});

var bgView = Ti.UI.createView({
	height:Ti.UI.FILL,
	width:Ti.UI.FILL,
	backgroundImage:"42553_m.jpg"
});
win.add(bgView);

var blurView = mod.createView({
	top:100, left:40, right:40, bottom:100, 
	blurLevel:5, blurTintColor:"#9EDEB8", blurCroppedToRect:true
});
bgView.add(blurView);	


win.addEventListener('open',function(d){
	
	blurView.viewToBlur = bgView;
	
	var container = Ti.UI.createView({
		backgroundColor:"#fff", borderRadius:20,
		top:100, height:150, left:10, right:10
	});
	blurView.add(container);
	var label = Ti.UI.createLabel({
		text:"BlurView Tinted\nand Cropped", 
		color:"#000", width:Ti.UI.FILL,
		height:50, textAlign:"center"
	});	
	container.add(label);	
});

win.open();
