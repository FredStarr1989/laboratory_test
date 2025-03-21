const { testCompression } = require('./solution');

function generateRandomArray(length, min, max) {
    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

const testCases = [
    {
        name: 'Короткий тест (5 чисел)',
        array: [1, 2, 3, 4, 5]
    },
    {
        name: 'Короткий тест с повторениями',
        array: [1, 1, 2, 2, 3]
    },
    
    {
        name: '50 случайных чисел',
        array: generateRandomArray(50, 1, 300)
    },
    {
        name: '100 случайных чисел',
        array: generateRandomArray(100, 1, 300)
    },
    {
        name: '500 случайных чисел',
        array: generateRandomArray(500, 1, 300)
    },
    {
        name: '1000 случайных чисел',
        array: generateRandomArray(1000, 1, 300)
    },
    
    {
        name: 'Все однозначные числа',
        array: Array.from({ length: 9 }, (_, i) => i + 1)
    },
    {
        name: 'Все двузначные числа',
        array: Array.from({ length: 90 }, (_, i) => i + 10)
    },
    {
        name: 'Все трехзначные числа',
        array: Array.from({ length: 201 }, (_, i) => i + 100)
    },
    {
        name: 'Каждого числа по 3 (900 чисел)',
        array: Array.from({ length: 300 }, (_, i) => i + 1).flatMap(n => [n, n, n])
    }
];

console.log('Запуск тестов...\n');

testCases.forEach((testCase, index) => {
    console.log(`Тест ${index + 1}: ${testCase.name}`);
    console.log('----------------------------------------');
    
    const result = testCompression(testCase.array);
    
    console.log(`Исходный массив: ${testCase.array.slice(0, 10).join(', ')}${testCase.array.length > 10 ? '...' : ''}`);
    console.log(`Сжатая строка: ${result.serialized}`);
    console.log(`Коэффициент сжатия: ${result.compressionRatio.toFixed(2)}%`);
    console.log(`Корректность: ${result.isCorrect ? '✅' : '❌'}`);
    console.log('----------------------------------------\n');
}); 