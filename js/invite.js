$(function () {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var invite_code = url.searchParams.get('code');
	$('#candy-invite-code').val(invite_code);
});