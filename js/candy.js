var url = "http://voicecoin.io/v1/Airdrop";

function sendCandy() {
	var email = $("#candy-email").val();
	var eth = $("#candy-eth").val();

	$.post(url, {
			email: email,
			address: eth
		},
		function (returnedData) {
			console.log(returnedData);
			window.location.href = "invite.html";
		}).fail(function () {
		console.log("error");
	});
}