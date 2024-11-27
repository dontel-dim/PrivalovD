//Checking of name field
function clicBut() {
	var button = document.getElementById('but')
	button.textContent = 'А кнопка не работает(('
}

//Checking of name field
function checkName() {
	var name = document.getElementById('name').value
	var regex = /^[a-zA-Z\s]{2,15}$/

	if (regex.test(name)) {
		document.getElementById('name').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('name').style.boxShadow = '10px 0px 0px red'
	}
}

function deleteName(f) {
	if (confirm('Это всё?')) f.submit()
}

//Checking of Phone number field
function checkPhone() {
	var phone = document.getElementById('phone').value
	var regex = /^\d{3}-(\d{3})-\d{3}$/

	if (regex.test(phone)) {
		document.getElementById('phone').style.boxShadow = '10px 0px 0px green'
		return true
	} else {
		document.getElementById('phone').style.boxShadow = '10px 0px 0px red'
		return false
	}
}

//Collect and output all the data
function outputData() {
	var name = document.getElementById('name').value
	var phone = document.getElementById('phone').value
	var date = document.getElementById('date').value
	var product = document.getElementById('product').value

	if (checkPhone() && checkName() && date != '' && product != '') {
		// alert('JR')
		alert(
			'Заказ готов\n ФИО: ' +
				name +
				'\nТелефон: ' +
				phone +
				'\nДата: ' +
				date +
				'\n Продукт: ' +
				product
		)
	} else {
		alert('Ошибка заполнения данных')
	}
}
