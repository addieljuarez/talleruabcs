function WinFacebook(){
	
	
	var fb = require('facebook');
	
	
	var self = Ti.UI.createWindow({
		backgroundColor:'red',
	});
	
	
	var Header = require('ui/handheld/header');
	var header = new Header();
	self.add(header);
	
	
	header.addEventListener('click', function(){
		self.close();
		self = null;
	});
	
	
	
	//----------------------------------------------------------
	
	 fb.appid = '192844364216618';
	 fb.permissions = ['email, user_birthday, user_hometown, user_location, publish_actions, publish_stream, publish_checkins, user_photos'];
	
		
	fb.addEventListener('login', function(e) {
	    if (e.success) {
	        fb.requestWithGraphPath('me', {}, 'GET', function(e) {
		    if (e.success) {
		        //alert(e.result);
		        var json = JSON.parse(e.result);
		        alert(json);
		        var nombre = Titanium.UI.createLabel({
		        		text: json.name,
		        });
		        
		        self.add(nombre);
		        
		        //alert(json)
		    } else if (e.error) {
		        alert(e.error);
		    } else {
		        alert('Unknown response');
		    }
		});
	    } else if (e.error) {
	        alert(e.error);
	    } else if (e.cancelled) {
	        alert("Canceled");
	    }
	});
		
	
	fb.authorize();
	
	return self;
}
module.exports = WinFacebook;