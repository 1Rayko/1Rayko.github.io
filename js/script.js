window.addEventListener('load', function () {
	var preloader = document.getElementById('preloader');
	preloader.style.display = 'none';
 });


let mode='light';

if(!localStorage.getItem('mode'))
{
	localStorage.setItem('mode','light');
}else{

	mode=localStorage.getItem('mode');
}

if (mode==='dark'){
	changeToggle(mode);
}

// document.getElementById('cat1').addEventListener('mouseenter', e => {
// 	e.target.style.transform = 'rotate(360deg)'
//   })
document.addEventListener('DOMContentLoaded', (event) => {
	var angle = 15; // Начальный угол поворота
	var angle_lamp = 4;
	setInterval(() => {
	  angle = -angle;
	  angle_lamp =angle_lamp-2;
	  document.getElementById('cat').style.transform = 'rotate(' +
	  angle + 'deg)';

	  document.getElementById('lamp').style.transform = 'rotate(' +
	  angle + 'deg)';
	}, 1000); // 1000 миллисекунд = 1 секунда
  }


  );


document.getElementById('lamp').addEventListener('click', function() {
	// Создаем элемент вспышки, который будет анимирован


	if (mode==='light'){

		changeToggle('dark');
		// document.getElementById("lamp").setAttribute('src','images/moon.png');


	}
	else{
		changeToggle('light');
		// document.getElementById("lamp").setAttribute('src','images/лампа.png')
	}
	localStorage.setItem('mode',mode);
	// Переключаем темы

	// document.getElementsByClassName("grid-pattern").classList.toggle('night');
});

function changeToggle(newMode){
	var flash = document.createElement('div');
	flash.classList.add('lamp-flash');
	document.body.appendChild(flash);

	// Подождём, пока анимация вспышки завершится
	flash.addEventListener('animationend', function() {
		// Уберем вспышку после выполнения анимации
		document.body.removeChild(flash);
	});
	if (newMode==='dark'){


		document.getElementById("lamp").setAttribute('src','images/moon.png');
		document.body.classList.toggle('night');
		mode='dark';

	}
	else{
		document.getElementById("lamp").setAttribute('src','images/лампа.png');
		document.body.classList.toggle('night');
		mode='light';
	}

}

document.addEventListener('DOMContentLoaded', (event) => {
// Выбираем все элементы с классом 'x'
const elements = document.querySelectorAll('.x');

// Функция для изменения фона и тени элемента
function changeBackgroundAndShadow(element, backgroundColor, shadowColor, delay) {
  setTimeout(() => {
    element.style.backgroundColor = backgroundColor;
    element.style.boxShadow = `2px 2px ${shadowColor}`;
  }, delay);
}

// Итерация по всем элементам с задержкой для изменения фона и тени
elements.forEach((element, index) => {
  const darkBgDelay = index * 500; // задержка для смены на темный фон и тень
  changeBackgroundAndShadow(element, '#000df2', '#dac2fe', darkBgDelay);

  const originalColorDelay = darkBgDelay + (elements.length * 500); // задержка для возврата исходного цвета и тени
  changeBackgroundAndShadow(element, '#dac2fe', '#000df2', originalColorDelay);
});



elements.forEach(function(element) {
  // Обработка события наведения мыши
  element.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#000df2'; // Цвет фона при наведении
    this.style.boxShadow = '2px 2px #dac2fe'; // Тень при наведении
  });

  // Обработка события убирания мыши
  element.addEventListener('mouseout', function() {
    this.style.backgroundColor = ''; // Возвращение к исходному цвету фона
    this.style.boxShadow = ''; // Возвращение к исходной тени
  });
});
  });
