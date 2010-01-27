Ext.onReady(function(){
	Ext.QuickTips.init();

	// Create a variable to hold our EXT Form Panel.

	// Assign various config options as seen.
	var login = new Ext.FormPanel({
		labelWidth:80,
		url:'j_spring_security_check',
		frame:true,
		title:'Please Login',

		defaultType:'textfield',
		width:300,
		height:150,
		monitorValid:true,
		// Specific attributes for the text fields for username / password.
		// The "name" attribute defines the name of variables sent to the server.

		items:[{
			fieldLabel:'Username',
			name:'j_username',
			allowBlank:false
		},{
			fieldLabel:'Password',

			name:'j_password',
			inputType:'password',
			allowBlank:false
		}],

		// All the magic happens after the user clicks the button
		buttons:[{

			text:'Login',
			formBind: true,
			// Function that fires when user clicks the button
			handler:function(){
			login.getForm().submit({

				method:'POST', 

				// Functions that fire (success or failure) when the server responds.
				// The server would actually respond with valid JSON,
				// something like: response.write "{ success: true}" or

				// response.write "{ success: false, errors: { reason: 'Login failed. Try again.' }}"
				// depending on the logic contained within your server script.
				// If a success occurs, the user is notified with an alert messagebox,

				// and when they click "OK", they are redirected to whatever page
				// you define as redirect. 

				success:function(){
				Ext.Msg.alert('Status', 'Login Successful!', function(btn, text){

					if (btn == 'ok'){
						window.location = 'main.action';
					}
				});


			},

			// Failure function, see comment above re: success and failure.
			// You can see here, if login fails, it throws a messagebox
			// at the user telling him / her as much.  


			failure:function(form, action){
				if(action.failureType == 'server'){
					obj = Ext.util.JSON.decode(action.response.responseText);

					Ext.Msg.alert('Login Failed!', obj.errors.reason);
				}else{
					Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText);

				}
				login.getForm().reset();
			} 

			});
		}
		}]
	});

	login.render('login');

});
