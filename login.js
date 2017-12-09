var isLoginPage = document.location.href.split('/').indexOf('login.html')>0;
if(localStorage['user']==undefined) {
	if(!isLoginPage) {
		document.location.href='login.html';
	} 
}