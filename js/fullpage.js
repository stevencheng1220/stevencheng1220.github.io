$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
    anchors:['home_section', 'project_section','contact_section'],
    licenseKey: config.FULLPAGE_KEY,
    autoScrolling:true,
    navigation: true,
    touchSensitivity: 80
	});
});
