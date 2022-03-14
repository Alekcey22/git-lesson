const zarplata = document.getElementById('zarplata'),
      freelance = document.getElementById('freelance'),
      dop1 = document.getElementById('dop1'),
      dop2 = document.getElementById('dop2');

const arenda = document.getElementById('arenda'),
      komynal = document.getElementById('komynal'),
      car = document.getElementById('car'),
      kredits = document.getElementById('kredits');      


const month = document.getElementById('month'),
      day = document.getElementById('day'),
      year = document.getElementById('year');

let totalmonth, totalday, totalyear;

const kopil = document.getElementById('kopil'),    
	  kopim = document.getElementById('kopim'),
	  tratim = document.getElementById('tratim');


let sber = 0;
let precents = 0;

const inputs = document.querySelectorAll('.input1');
for(input of inputs) {
	input.addEventListener('input', () => {
		freemaney();
		calculationPrecents();

	})
}

const strTomNum = str => str.value ? parseInt(str.value) : 0

const freemaney = () => {
	const totalPerMonth = strTomNum(zarplata) + strTomNum(freelance) + strTomNum(dop1) + strTomNum(dop2)
	const totalCoctsMonth = strTomNum(arenda) + strTomNum(komynal) + strTomNum(car) + strTomNum(kredits)

	totalmonth = totalPerMonth - totalCoctsMonth;

	month.value = totalmonth;
}


kopil.addEventListener('input', e => {
	const totalPrecentEl = document.getElementById('total-precents');
	precents = e.target.value;
	totalPrecentEl.innerHTML = precents;
	calculationPrecents();
});

const calculationPrecents = () => {

	sber = ((totalmonth * precents) / 100).toFixed();
	kopim.value = sber;

	tratim.value = totalmonth - sber;

	totalDay = (tratim.value / 30).toFixed();
	day.value = totalDay;


	totalyear = sber * 12;
	year.value = totalyear;
}