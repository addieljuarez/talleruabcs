function Header(){
	
	var self = Titanium.UI.createView({
		height:65,
		backgroundColor:'pink',
		top:0,
	});
	
	var labelTitle = Titanium.UI.createLabel({
		text:'MI aplicación',
		font:{
			fontSize:20,
		},
	});
	
	
	self.add(labelTitle);
	return self;
}
module.exports = Header;