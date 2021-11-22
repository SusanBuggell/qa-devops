const {shuffleArray} = require('./utils')
const {bots} = require('./data')

describe('shuffleArray should', () => {
    test('Does shuffleArray return an array', async () => {
        
        try {
            let shuffled = await shuffleArray(bots);
            expect(Array.isArray(shuffled)).toBe(true)
        } catch (error) {
            console.log('shuffleArray does not return an array', error)
        }
    });
    
    test('Is the returned array the same length as the argument', async() => {
        
        try {
            let shuffled = await shuffleArray(bots);
            expect(bots.length === shuffled.length).toBe(true)
        } catch (error) {
            console.log('shuffleArray does not return the same length as the original array', error)
        }  
    });

    test('Are all of the items in the original array in the returned array', async() =>{
        try {
            let shuffled = await shuffleArray(bots);
            expect(shuffled.every((i) => bots.includes(i))).toBe(true)
        } catch (error) {
            console.log('shuffleArray does not return an array that contains all the original elements', error)
        }
    });

    test('Have all of the items in the original array been shuffled in the returned array', async() =>{
        try {
            let shuffled = await shuffleArray(bots);
            expect(shuffled===bots).toBe(true)
        } catch (error) {
            console.log('shuffleArray does not return an array that has been shuffled',error)
        }
    });
})