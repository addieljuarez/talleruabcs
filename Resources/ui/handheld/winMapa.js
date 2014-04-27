function WinMapa(){
	
	
	var map = require('ti.map');
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'#000',
	});
	var Header = require('ui/handheld/header');
	var header = new Header();
	self.add(header);
	
	var punto = map.createAnnotation({
		latitude:19.434151,  
		longitude: -99.189663,
		title:'hola',
		subtitle:'saludos',
		pincolor:map.ANNOTATION_GREEN,
		animate:true,
	});
	
	
	var viewMapa = map.createView({
		mapType:map.STANDARD_TYPE,
		top:65,
		region:{
			latitude:19.434151 ,  longitude: -99.189663, longitudeDelta:0.02, latitudeDelta:0.02,
		},
		annotations:[punto],
		animate:true,
	});
	
	
	
	header.addEventListener('click', function(){
		self.close();
		self = null;
	});
	
	
	self.add(viewMapa);
	return self;
}
module.exports = WinMapa;