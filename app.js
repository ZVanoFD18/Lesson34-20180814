'use strict';
var app = {
	results: [],
	/**
	 * 1.	Создайте калькулятор для введённых значений
	 * Напишите код, который:
	 * А) Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
	 *	Б) Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
	 * В) При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
	 * Г) Выводит сумму всех значений массива
	 **/
	DoTask1: function(taskName) {
		alert(taskName + '/Результат будет выведен в console.log')
		let values = this.getRandomArray(10, -10, 10);
		while (true) {
			let newVal = prompt('Введите новое число [' + values.join(', ') + ']');
			if (newVal === '') {
				break;
			}
			newVal = parseFloat(newVal);
			if (isNaN(newVal)) {
				break;
			}
			values.push(newVal);
		}
		let result = undefined;
		values.forEach(function(value) {
			result = (result || 0) + value;
		});
		this.writeResult(taskName, {
			'Массив': values,
			result: result
		})
	},
	/**
	 *2.	Поиск в массиве
	 *	Создайте функцию find(arr, value), которая ищет в массиве arr значение
	 * value и возвращает его номер, если найдено, или -1, если не найдено.
	 **/
	DoTask2: function(taskName) {
		alert(taskName + '/Результат будет выведен в console.log')
		var find = function(arr, value) {
			return this.findInArray(arr, value);
		}.bind(this);
		let values = this.getRandomArray(10, -10, 10);
		let findValue = +prompt('Введите значение поиска для массива [' + values.join(
			', ') + ']');
		let result = find(values, findValue);
		this.writeResult(taskName, {
			'Массив': values,
			'Ищем': findValue,
			result: result
		});
	},
	/**
	 * В массиве, содержащем положительные и отрицательные целые числа, вычислить сумму четных положительных элементов.
	 */
	DoTask3: function(taskName) {
		alert(taskName + '/Результат будет выведен в console.log')
		let values = this.getRandomArray(10, -10, 10);
		let result = getSum(values);
		this.writeResult(taskName, {
			'Массив': values,
			result: result
		});
		/**
		 * Возврпщает "сумму четных положительных элементов".
		 */
		function getSum(arr) {
			let result = 0;
			arr.forEach(function(val, index) {
				if (val > 0 && (index % 2 === 0)) {
					result += val;
				}
			})
			return result;
		}
	},
	/**
	 * 4. Среди элементов массива с четными индексами, найти тот, который имеет максимальное значение.
	 **/
	DoTask4: function(taskName) {
		alert(taskName + '/Результат будет выведен в console.log')
		let values = this.getRandomArray(10, -10, 10);
		let result = getMaxEven(values);
		this.writeResult(taskName, {
			'Массив': values,
			result: result
		});
		/**
		 * Возврпщает "сумму четных положительных элементов".
		 */
		function getMaxEven(arr) {
			let result = undefined;
			arr.forEach(function(val, index) {
				if ((index % 2 === 0) && (result === undefined || val > result)) {
					result = val;
				}
			})
			return result;
		}
	},
	/**
	 * 5. Элементы массива, которые меньше среднего арифметического.
	 **/
	DoTask5: function(taskName) {
		alert(taskName + '/Результат будет выведен в console.log')
		let values = this.getRandomArray(10, -10, 10);
		let avgValue = this.getAvgOfArray(values);
		let result = [];
		values.forEach(function(value) {
			if (value < avgValue) {
				result.push(value)
			}
		});
		this.writeResult(taskName, {
			'Массив': values,
			'Среднее арифметическое': avgValue,
			'Результат': result
		});
	},
	/**
	 * 6. Найти номер минимального по модулю элемента массива.
	 **/
	DoTask6: function(taskName) {
		alert(taskName + '/Результат будет выведен в console.log')
		let values = this.getRandomArray(10, -10, 10);
		let result = undefined,
			minModValue = undefined;
		values.forEach(function(value, index) {
			if (minModValue === undefined || Math.abs(value) < Math.abs(minModValue)) {
				result = index;
				minModValue = value;
			}
		});
		this.writeResult(taskName, {
			'Массив': values,
			'Минимальное по модулю, значение': minModValue,
			'Минимальное по модулю, индекс': result
		});
	},
	/**
	 * 7. Создать произвольный объект который содержит в себе как минимум 10 свойств и методов.
	 **/
	DoTask7: function(taskName) {
		alert(
			'Это объект "app", в котором инкапсулирован програмный код домашнего задания'
		);
		this.writeResult(taskName, {
			'app': Object.assign(app)
		});
	},
	getAvgOfArray: function(arr) {
		let sum = 0;
		arr.forEach(function(val) {
			sum += val;
		});
		return sum / arr.length;
	},
	/**
	 * Возвращает массив со случайными целыми числами.
	 **/
	getRandomArray: function(countValues, minValue, maxValue) {
		let values = [];
		for (let i = 0; i < 10; i++) {
			let rand = minValue + Math.random() * (maxValue + 1 - minValue);
			rand = Math.floor(rand);
			values.push(rand);
		}
		return values;
	},
	/**
	 * Выполняет поиск элемента в массиве и возвращает еего индекс.
	 **/
	findInArray: function(arr, value) {
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === value) {
				return i;
			}
		}
		return -1;
	},
	writeResult: function(task, result) {
		this.results.push({
			task: task,
			finishedAt: Date.now(),
			result: result
		});
		console.log(task, result);
	},
	/**
	 * Выполняет циклический запрос задачи у пользователя.
	 * Прерывает цикл если пользователь нажал "Отмена", или обработчик задачи не найден.
	 **/
	DoSelect: function() {
		let taskIndex = +prompt("Укажите № задачи для выполнения", 1);;
		let functionName = 'DoTask' + taskIndex;
		let f = this[functionName];
		if (eval("typeof " + f) === 'function') {
			f.call(this, functionName);
			setTimeout(this.DoSelect.bind(this), 100);
		} else {
			alert('Завершение работы.')
		}
	}
}
window.onload = app.DoSelect.bind(app);
