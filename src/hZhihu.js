var h=0;
function onAnswerItem(_, item) {
	var v = $(item);

var it = true;
	v.find("button").each(function (_, x) {
		var m = $(x);
		if (m.hasClass("VoteButton")) {
			if ($(x).hasClass("is-active")) {
			  it = false;
			} 
		} else {
			var svg = m.children("svg");
			if (svg.length > 0) {
				var text = m.text();
				// console.log(text);
				if (m.text() == '取消感谢') {
				   it = false;
				} 
			}
		}
	});
	return it;
}

$(document).ready(function () {
	var a = $("div.ContentItem.AnswerItem");
	if (a.length > 0) {
		a.each(onAnswerItem);
	}
});

$('body').on('DOMNodeInserted', 'div.List-item', function (e) {
	var b= onAnswerItem( null, e.currentTarget);
	if(!b){
      $(e.currentTarget).hide();
	}
});
