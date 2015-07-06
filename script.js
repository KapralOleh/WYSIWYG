document.getElementById('italic').onclick = function () {
	document.execCommand('italic',null,null)
}
document.getElementById('underline').onclick = function () {
	document.execCommand('underline',null,null)
}
document.getElementById('bold').onclick = function () {
	document.execCommand('bold',null,null)
}
document.getElementById('justifyRight').onclick = function () {
	document.execCommand('justifyRight',null,null)
}
document.getElementById('justifyLeft').onclick = function () {
	document.execCommand('justifyLeft',null,null)
}
document.getElementById('justifyCenter').onclick = function () {
	document.execCommand('justifyCenter',null,null)
}
document.forms.f1.fonts.onchange = function () {
	document.execCommand('fontName',null,document.forms.f1.fonts.value)
}
document.forms.f1.sizer.onchange = function () {
	document.execCommand('fontSize',null,document.forms.f1.sizer.value)
}
document.getElementById('slist').onclick = function () {
	document.execCommand('insertOrderedList',null,null)
}
document.getElementById('nlist').onclick = function () {
	document.execCommand('insertUnorderedList',null,null)
}
document.getElementById('undo').onclick = function () {
	document.execCommand('undo',null,null)
}
document.getElementById('redo').onclick = function () {
	document.execCommand('redo',null,null)
}
document.getElementById('image').onclick = function () {
	var img = prompt("Image Url","")
	document.execCommand('insertImage',null,img)
}
document.getElementById("window").onpaste = function(e) {
    e.preventDefault();
    var text = (e.originalEvent || e).clipboardData.getData('text/plain') || prompt('Paste something..');
    window.document.execCommand('insertHTML', false, text);
};


