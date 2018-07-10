$(function () {
	var url_string = window.location.href;
	var url = new URL(url_string);
	var invite_code = url.searchParams.get('code');
	$('#candy-invite-code').val(invite_code);
});

function copyToClipboard() {
	/* Get the text field */
	var copyText = document.getElementById("candy-invite-code");

	/* Select the text field */
	copyText.select();

	/* Copy the text inside the text field */
	document.execCommand("copy");
}