

function ApplicationWindow() {
	
	
	var WinMapa = require('ui/handheld/winMapa');
	var WinFacebook = require('ui/handheld/winFacebook');
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff',
		height:'100%',
		width:'100%',
		// statusBarStyle:Ti.UI.iPhone.StatusBar.LIGHT_CONTENT,
		layout:'vertical',
	});
	
	
	
	var boton1 = Titanium.UI.createButton({
		title:'boton1',
		height:40,
		width:150,
		borderColor:'#000',
		borderRadius:5,
		borderWidth:3,
		top:20,
	});
	
	
	
	var boton2 = Titanium.UI.createButton({
		title:'mapa',
		height:40,
		width:150,
		borderColor:'#000',
		borderRadius:5,
		borderWidth:3,
		top:30,
	});
	
	var boton3 = Titanium.UI.createButton({
		title:'facebook',
		height:40,
		width:150,
		borderColor:'#000',
		borderRadius:5,
		borderWidth:3,
		top:30,
	});
	
	
	
	boton1.addEventListener('click', function(){
		self.close();
		self = null;
		// alert('boton 1');
	});
	
	self.addEventListener('close', function(){
		alert('ventana cerrada');
	});
	
	
	boton2.addEventListener('click', function(){
		var winMapa = new WinMapa();
		winMapa.open();
	});
	
	boton3.addEventListener('click', function(){
		var winFacebook = new WinFacebook();
		winFacebook.open();
	});
	
	
	
	self.add(boton1);
	self.add(boton2);
	self.add(boton3);
	return self;
	
}

module.exports = ApplicationWindow;
