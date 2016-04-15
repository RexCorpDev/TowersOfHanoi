'use strict';
// GLOBAL VARIABLES
var selection1;
var selection2;

function OnInit() {
	var userInput = 0;
	var clickedItem;
	var piece1 = $('div.piece.piece1');
	var piece2 = $('div.piece.piece2');
	var piece3 = $('div.piece.piece3');
	$('.towers div.tower').on('click', function(event) {
		clickedItem = $(this);
		clickedItem.toggleClass('selected');
		var selections = 0;
		var hasPiece = $(this).children().hasClass('piece');
		var empty = !$(this).children().hasClass('piece');
		var pieceValue;
		$('.selected').each(function() {
			selections++
		});
		if (selections == 1 && hasPiece) {
			pieceValue = parseInt($(this).find(">:first-child").attr('id')); //selection1 = top piece value
			selection1 = $(event.target).find(">:first-child");
			console.log('slxn1child', selection1[0]);
		}
		if (selections == 2 && empty) {
			selection2 = $(event.target).html();
			console.log('slxn2', selection2);
			$(selection2).html().append(selection1);
			// selection1.remove();
		}
	});
};

function OnEvent() {};

function OnCalc() {
	var firstSelEmpty;
	var firstSelHasPiece;
	var secondSelEmpty;
	var secondSelHasPiece;
	// var error = $('#error').html("ERROR");
	if (selection1.indexOf('tower') !== -1) { //if firstTowerId has value
		var firstSelEmpty = !$('#' + selection1).children().hasClass('piece');
		var firstSelHasPiece = $('#' + selection2).children().hasClass('piece');
	}
	if (selection2.indexOf('tower') !== -1) {
		var secondSelEmpty = !$('#' + selection1).children().hasClass('piece');
		var secondSelHasPiece = $('#' + selection2).children().hasClass('piece');
	}
	console.log('firsttower', firstTowerId);
	console.log('secondtower', secondTowerId);
	// if (FirstTowerEmpty == true && SecondTowerEmpty == true) {
	// 	return error;
	// }
}
}
$(document).ready(MyObject.Oninit);
