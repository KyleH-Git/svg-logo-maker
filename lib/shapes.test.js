const {Triangle, Square, Circle} = require('./shapes.js');

describe('Triangle', () => {
    describe('render()', () => {
        it('Should return triangle SVG when called with Triangle constructor', () => {
            //arrange - 
            const testTri = new Triangle('SVG', 'red', 'triangle', 'blue');
            //act - 
            const svg = testTri.render();
            const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 10, 50 190, 250 190" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">SVG</text></svg>`;
            //assert - 
            expect(svg).toEqual(expected);
        })
    })
});

describe('Circle', () => {
    describe('render()', () => {
        it('Should return circle SVG when called with Circle constructor', () => {
            //arrange - 
            const testCircle = new Circle('ABC', 'green', 'circle', 'purple');
            //act - 
            const svg = testCircle.render();
            const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="purple" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">ABC</text></svg>`;
            //assert - 
            expect(svg).toEqual(expected);
        })
    })
});

describe('Square', () => {
    describe('render()', () => {
        it('Should return square SVG when called with Square constructor', () => {
            //arrange - 
            const testSquare = new Square('XYZ', 'white', 'square', 'black');
            //act - 
            const svg = testSquare.render();
            const expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" x="50" y="0" fill="black" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">XYZ</text></svg>`
            //assert - 
            expect(svg).toEqual(expected);
        })
    })
});

