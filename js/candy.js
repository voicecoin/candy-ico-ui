var url = "https://voicechain.io/v1/Airdrop";

function sendCandy() {
	var email = $("#candy-email").val();
	var eth = $("#candy-eth").val();

	$.post(url, {
		email: email,
		address: eth
	},
		function (returnedData) {
			console.log(returnedData);
			window.location.href = "invite.html?code=" + returnedData;
		}).fail(function () {
			console.log("error");
		});
}

/**
 * Form validation
 */
$(function () {
	$("#candy-form").validate({
		rules: {
			email: {
				required: true,
				email: true,
			},
			address: {
				required: true,
				isEthAddress: true,
			}
		},
		messages: {
			email: {
				required: "电子邮箱不能为空",
				email: "请输入有效的电子邮箱",
			},
			address: {
				required: "ETH钱包地址不能为空",
				isEthAddress: "请输入有效的ETH钱包地址",
			},
		},
	});
});

/**
 * Adds address validation into jQuery
 */
jQuery.validator.addMethod("isEthAddress", function (address, element) {
	return this.optional(element) || isChecksumAddress(address);
}, "* Amount must be greater than zero");

/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
var isAddress = function (address) {
	if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
		// check if it has the basic requirements of an address
		return false;
	} else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
		// If it's all small caps or all all caps, return true
		return true;
	} else {
		// Otherwise check each case
		return isChecksumAddress(address);
	}
};

/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
var isChecksumAddress = function (address) {
	// Check each case
	address = address.replace('0x', '');
	var addressHash = keccak256(address.toLowerCase());
	for (var i = 0; i < 40; i++) {
		// the nth letter should be uppercase if the nth digit of casemap is 1
		if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
			return false;
		}
	}
	return true;
};