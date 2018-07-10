function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

var language = getCookie('vc-lang');
// var language = 'zh';
if (!language) {
	language = 'en';
	setCookie('vc-lang', 'en', 30);
}

var app = new Vue({
	el: '#vc-candy',
	data: {
		lang: language,
		vc: {
			zh: {
				title: "VOICECHAIN",
				web_link: "https://www.voicechain.io/",
				lang: "English",
				p1: "一场颠覆性的语音革命已经到来！",
				p2: "我们首当其冲提出：区块链解决方案来支持语音互联网。我们创造并实现一个真正意义上的说比写快的语音区块链新生代！",
				p3: "全球化开启语音万维网新纪元，开发者一站式发布语音服务，全世界的公众可以免费享用任何语音服务，实现了真正意义上的语音服务共享。任何用户，可以在世界的任何地方，与已注册的语音服务通话。 智能设备制造商将不再需要请开发者注册他们的语音服务。该方案节省了大量开发资源的同时，也为用户提供了更便捷的方式来浏览开放的语音万维网。随着传统的基于浏览器的网站演变成语音服务，传统域名系统将会进化成去中心化的语音域名系统，加密货币将成为语音服务支付的全球标准。非同凡响，不负众望，就是我们要完成的底层技术。",
				index: {
					telegram: "加入电报群（需科学上网）",
					eth: "输入ETH钱包地址",
					email: "输入邮箱地址",
					submit: "领取糖果",
				},
				invite: {
					telegram1: "加入电报群",
					telegram2: "（需科学上网）。",
					p1: "请到填写的邮箱内确认参加活动，才可获得奖励! ",
					p2: "把以下验证码发到电报群里即可获10个VC!",
					p3: "将邀请链接分享给好友，每成功推荐一个好友入群，即可再额外获得10个VC，邀请奖励上限500VC！（申请无限奖励上限特权通道，请加小助手微信：语音链）",
					copy: "复制",
					copy_link: "复制链接",
					save_qr: "保存二维码",
					invitation: "已经成功邀请(人次)",
					get_vc: "已经赚取VC(枚数)",
				}
			},
			en: {
				title: "VOICECOIN",
				web_link: "https://www.voicecoin.io/",
				lang: "简体中文",
				p1: "Welcome Voicecoin Airdrop.",
				p2: "We're building a voice-driven decentralized smart web based on voicechain. The universal bridge between AI chatbot and IoT.",
				p3: "Under this new system, chatbot developers will register voice domains on the blockchain, follow a set of simple instructions, and then their chatbots will be launched. In this way, any global user will be able to talk to any registered chatbot. Smart device manufacturers will no longer need to ask chatbot developers to register their chatbots. This solution preserves developer resources, while giving users a more convenient way to surf an open, voice-based internet. As traditional browser-based web sites evolve into chatbots, the traditional domain name system evolves into a decentralized voice domain system, and cryptocurrency becomes the global standard for chatbot payments.",
				index: {
					telegram: "Join Voicecoin Telegram",
					eth: "Enter ETH Address",
					email: "Enter Email",
					submit: "SUBMIT",
				},
				invite: {
					telegram1: "Join Voicecoin Telegram",
					telegram2: ".",
					p1: "Please check the confirmation email and get your candies!",
					p2: "Send the code below to Voicecoin Telegram group, you will get 10 VC!",
					p3: "Share the invitation link to your friends. Each successful recommendation of a friend into the group, you can get an additional 10 VC (Max 500 VC).",
					copy: "Copy",
					copy_link: "Copy Link",
					save_qr: "Save QR Code",
					invitation: "successful Invatation: ",
					get_vc: "Total VC rewards: ",
				}
			}
		},
	},
	methods: {
		changeLang: function (e) {
			e.stopPropagation();
			if (this.lang === 'zh') {
				this.lang = 'en';
				setCookie('vc-lang', 'en', 30);
			} else {
				this.lang = 'zh';
				setCookie('vc-lang', 'zh', 30);
			}
			if (refreshValiation) {
				refreshValiation(this.lang);
			}
		},
		goAnchor(selector) {
			var anchor = this.$el.querySelector(selector);
			$('html, body').animate({
				scrollTop: $(selector).offset().top
			}, 1000);
		},
	}
});
