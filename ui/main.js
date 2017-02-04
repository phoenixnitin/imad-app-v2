// console.log('Loaded!');
// // Change the text of the main-text div
// var element = document.getElementById('main-text');

// element.innerHTML = 'New Value';

// // Move the image
// var img = document.getElementById('madi');
// var marginLeft = 0;
// function moveRight() {
//     marginLeft = marginLeft + 1;
//     img.style.marginLeft = marginLeft + 'px';
// }
// img.onclick = function () {
//     var interval = setInterval(moveRight, 50);
//     /*img.style.marginLeft = '100px';*/
// };

var button = document.getElementById('counter');
counter = 0;
button.onclick = function() {
	//create a request
	var request = new XMLHttpRequest();
	// capture the 
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200){
				var counter = request.responseText;
				var span = document.getElementById('count');
				span.innerHTML = counter.toString();
			}
		}
	}

	request.open('GET','/counter', true);
	request.send(null);
	/*counter = counter + 1;
	var span = document.getElementById('count');
	span.innerHTML = counter.toString();*/
};


var submit = document.getElementById('submit_btn');
submit.onclick = function() {
	var request = new XMLHttpRequest();
	// capture the 
	request.onreadystatechange = function() {
		if (request.readyState === XMLHttpRequest.DONE) {
			if (request.status === 200){			
				var names = request.responseText;
				names = JSON.parse(names);
				var list = '';
				for (var i=0; i< names.length; i++) {
					list += '<li>' + names[i] + '</li>';
				}
				var ul = document.getElementById('namelist');
				namelist.innerHTML = list;
			}
		}
	}
	var nameInput = document.getElementById('name');
	var name = nameInput.value;
	request.open('GET','/submit-name?name=' + name, true);
	request.send(null);
	/*var names = ['name1', 'name2', 'name3', 'name4'];
	var list = '';
	for (var i=0; i< names.length; i++) {
		list += '<li>' + names[i] + '</li>';
	}
	var ul = document.getElementById('namelist');
	namelist.innerHTML = list;*/
};