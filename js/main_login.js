const inputs = document.querySelectorAll('.input');

function addcl() {
	let parent = this.parentNode.parentNode;
	parent.classList.add('focus');
}

function remcl() {
	let parent = this.parentNode.parentNode;
	if (this.value == '') {
		parent.classList.remove('focus');
	}
}

inputs.forEach((input) => {
	input.addEventListener('focus', addcl);
	input.addEventListener('blur', remcl);
});

$(function() {
	$('#toggle').click(function() {
		$('.lft').toggleClass('lft1');
	});
});
$(function() {
	$('#toggle').click(function() {
		$('.rit').toggleClass('rit1');
	});
});
$(function() {
	$('#togglee').click(function() {
		$('.lft').toggleClass('lft1');
	});
});
$(function() {
	$('#togglee').click(function() {
		$('.rit').toggleClass('rit1');
	});
});

$(function() {
	$('#togglee').click(function() {
		$('.wave').attr('src', 'img/w.png');
	});
});
$(function() {
	$('#toggle').click(function() {
		$('.wave').attr('src', 'img/wave.png');
	});
});

$(function() {
	$('#togglee').click(function() {
		$('.img_b').attr('src', 'img/b2.svg');
	});
});
$(function() {
	$('#toggle').click(function() {
		$('.img_b').attr('src', 'img/b1.svg');
	});
});
