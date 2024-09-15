// setTimeout и setInterval
// Задача: Использование setTimeout
console.log('Начало');
setTimeout(() => {
  console.log('Прошло 3 секунды');
}, 3000);
console.log('Конец');

// Задача: Использование setInterval
const intervalID = setInterval(() => {
  console.log('Привет каждые 2 секунды!');
}, 2000);
setTimeout(() => {
  clearInterval(intervalID);
  console.log('Интервал остановлен');
}, 6000);

// Задача: Смена цвета
function colorID() {
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  const intervalID = setInterval(() => {
    console.log(getRandomColor());
  }, 5000);
  setTimeout(() => {
    clearInterval(intervalID);
    console.log('Изменение цвета остановлено.');
  }, 20000);
}
colorID();

// Коллбэки
// Задача: Простая функция с коллбэком
function gownloadData(callback) {
  setTimeout(() => {
    const data = 'Загруженные данные';
    callback(data);
  }, 2000);
}
function transformData(downloadedData) {
  console.log('Обработанные данные:', downloadedData);
}
gownloadData(transformData);

// Задача: Обработка ошибок в коллбэках
function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error('Ошибка: деление на ноль!'));
  } else {
    const result = a / b;
    callback(null, result);
  }
}
function resultDivide(error, result) {
  if (error) {
    console.error(error.message);
  } else {
    console.log('Результат:', result);
  }
}
divide(10, 0, resultDivide);

// Задача: Коллбэки в цепочке
function step1(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

function step2(message) {
  console.log('Шаг 1 завершен');
}

step1(step2);

// Promises
// Задача: Простой промис
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Промис выполнен');
  }, 2000);
});

myPromise.then((result) => {
  console.log(result);
});

// Задача: Промис с ошибкой
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Ошибка');
  }, 2000);
});

myPromise.catch((result) => {
  console.log(result);
});

// Задача: Цепочка промисов
//  тут я немного запутался. у нас получается, что создаем первый промис. 
// Потом второй промис. Второй промис с помощью then принимает значение первого промиса. 
// Затем второй промис возвращает свой результат. Потом выводим второй промис. 
const firstPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Первый промис');
  }, 1000);
});

const secondPromise = firstPromise.then((firstValue) => {
  console.log(firstValue);
  return 'Второй промис';
});

secondPromise.then((secondValue) => {
  console.log(secondValue);
});

// Конструкция async/await
// Задача: Простая асинхронная функция
async function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные получены!");
        }, 2000);
    });
}

async function main() {
    try {
        const result = await fetchDataAsync(); 
        console.log(result); 
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

main();

// Задача: Обработка ошибок с async/await
async function divideAsync(a, b) {
  return new Promise((resolve, reject) => {
      if (b === 0) {
          reject(new Error("Ошибка: деление на ноль!"));
      } else {
          resolve(a / b);
      }
  });
}

async function main() {
  try {
      const result1 = await divideAsync(10, 2); 
      console.log(`Результат: ${result1}`);

      const result2 = await divideAsync(10, 0); 
      console.log(`Результат: ${result2}`); 
  } catch (error) {
      console.error("Ошибка:", error.message);
  }
}

main();