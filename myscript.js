
$(function() {
	  loadInfo();
  $('#click').click(function(e) {
    e.preventDefault();

   loadInfo();
  });

}
);

function loadInfo(){
	var username = document.getElementById("username").value;
	if(typeof username == "string" && username.length > 0){
		$.ajax({
			url: "https://api.github.com/users/mykel41?client_id=990e580361504aa076e0&client_secret=1234015a0cc5f49c8cf49456fa0c0018ef8ad1e0"
		}).then(function(data){
			document.getElementById("img").src = data.avatar_url;
			$('.id').append(data.id);
			$('.email').append(data.email);
			$('.login').append(data.login);
		});
	}
}