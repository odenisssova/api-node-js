import {test, expect} from '@playwright/test';

test.describe('Arrays', () => {
    test('array with 3 integers', async (): Promise<void> => {
        const numbers: number[] = [3, 6, 9];
        console.log("Array:", numbers)
        console.log("Array length:", numbers.length);
        expect(numbers.length).toBe(3);
        expect(numbers).toEqual([3, 6, 9]);
    })

    test('array with 2 rows', async (): Promise<void> => {
        const array: string[] = ['first', 'second'];
        array.push('third');
        console.log("Array:", array)
        console.log("Array length:", array.length);
        expect(array.length).toBe(3);
        expect(array).toEqual(['first', 'second', 'third']);
    })

    test('array with 3 rows and deletion of the last element', async (): Promise<void> => {
        const array: string[] = ['first', 'second', 'third'];
        const removed = array.pop();
        console.log("Array:", array)
        console.log("Removed element:", removed)
        console.log("Array length:", array.length);
        expect(array.length).toBe(2);
        expect(array).toEqual(['first', 'second']);
    })

    test('empty array of numbers', async (): Promise<void> => {
        const numbers: number[] = [];
        numbers.push(2);
        console.log("Array with 1 number:", numbers)
        console.log("Array length:", numbers.length);
        expect(numbers.length).toBe(1);

        numbers.push(25);
        console.log("Array with 2 number:", numbers)
        console.log("Array length:", numbers.length);
        expect(numbers.length).toBe(2);

        expect(numbers).toEqual([2, 25]);
    })
})

test.describe('Loops', () => {
    test('print each element of the array (for)', async (): Promise<void> => {
        const array: number[] = [1, 2, 3, 4, 5];
        for (let i= 0; i<array.length; i++) {
            console.log("Array:", array[i]);
        }
        expect(array.length).toBe(5);
    })

    test('count the sum of array elements (for)', async (): Promise<void> => {
        const array: number[] = [3, 10, 30, -4, 5];
        let sum = 0;
        for (let i= 0; i<array.length; i++) {
            sum += array[i];
        }
        console.log("Array sum:", sum);
        expect(sum).toBe(44);
    })

    test('new array where each element * 2 (for)', async (): Promise<void> => {
        const array: number[] = [1, 2, 3];
        const multiplied: number[] = []
        for (let i= 0; i<array.length; i++) {
            multiplied.push(array[i] * 2);
        }
        console.log("Array:", array);
        console.log("Array * 2:", multiplied);
        expect(multiplied).toEqual([2, 4, 6]);
    })

    test('elements in reverse order (for)', async (): Promise<void> => {
        const array: number[] = [3, 4, 5];
        const reversed: number[] = []
        for (let i= array.length - 1; i>=0; i--) {
            console.log("Array:", array[i]);
            reversed.push(array[i]);
        }
        expect(reversed).toEqual([5, 4, 3]);
    })
})

test.describe('interview questions', () => {
    test('maximum number in an array', async (): Promise<void> => {
        const array: number[] = [3, 6, 9];
        let maxNum = array[0]
        for (let i= 1; i<array.length; i++) {
            if (array[i] > maxNum) maxNum = array[i];
        }
        console.log("Max number:", maxNum);
    })

    test('minimum number in an array', async (): Promise<void> => {
        const array: number[] = [3, 6, 9];
        let minNum = array[0]
        for (let i= 1; i<array.length; i++) {
            if (array[i] < minNum) minNum = array[i];
        }
        console.log("Min number:", minNum);
    })

    test('number of even numbers in an array', async (): Promise<void> => {
        const array: number[] = [3, 6, 9];
        let evenNum = 0
        for (let i= 0; i<array.length; i++) {
            if (array[i] % 2 === 0) evenNum++;
        }
        console.log("Even numbers:", evenNum);
    })

    test('new array of positive numbers', async (): Promise<void> => {
        const array: number[] = [1, 2, 3, 4, 5, -3, 0, -1];
        const positiveNum: number[] = [];
        for (let i= 0; i<array.length; i++) {
            if (array[i] > 0) positiveNum.push(array[i]);
        }
        console.log("Positive numbers:", positiveNum);
        expect(positiveNum).toEqual([1, 2, 3, 4, 5]);
    })

})