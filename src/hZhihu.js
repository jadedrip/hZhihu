function onAnswerItem(_, item) {
	var v = $(item);
	var hide = function (_, x) {
		var zop = v.attr("data-zop");
		var parsed = JSON.parse(zop);
		//var inner = v.html();
		//v.dblclick(function () {
		//	v.html(inner);
		//});
		var text;
		var aria = $(x).attr("aria-label");
		if (aria) {
			text = aria + $(x).text();
		} else {
			text = "已感谢";
		}
		v.html(parsed.authorName + " - " + text).attr("style", "color: #E0E0E0");
	}

	v.find("button").each(function (_, x) {
		var m = $(x);
		if (m.hasClass("VoteButton")) {
			if ($(x).hasClass("is-active")) {
				hide(_, x);
			} else {
				$(x).click(hide);
			}
		} else {
			var svg = m.children("svg");
			if (svg.length > 0) {
				var text = m.text();
				console.log(text);
				if (m.text() == '取消感谢') {
					hide(_, x);
				} else if (text == '感谢') {
					m.click(hide);
				}
			}
		}
	});
}

$(document).ready(function () {
	var a = $("div.ContentItem.AnswerItem");
	if (a.length > 0) {
		a.each(onAnswerItem);
	}
});

$('body').on('DOMNodeInserted', 'div.ContentItem.AnswerItem', function (e) {
	onAnswerItem( null, e.currentTarget);
});
