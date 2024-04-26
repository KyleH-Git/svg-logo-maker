//shape class for common shape features
class Shape {
    constructor(name, colorName, shape, shapeColor){
        this.name = name;
        this.colorName = colorName;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render(){
    }

    name(){
        
        return nameStr;
    }

    setColor(shapeColor){
        return `fill=${shapeColor}`
    }

}

//triangle class
class Triangle extends Shape {
    constructor(){
        super(name, colorName, shape, shapeColor);
    }

    render(){
        const svgStr = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
            </svg>
            `;
        return svgStr;
    }

}

//circle class
class Circle extends Shape {
    constructor(){
        super(name, colorName, shape, shapeColor);
    }

    render(){
        const svgStr = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
            </svg>
            `;
        return svgStr;
    }

}

//square class
class Square extends Shape {
    constructor(){
        super(name, colorName, shape, shapeColor);
    }

    render(){
        const svgStr = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${nameColor}">${name}</text>
            </svg>
            `;
        return svgStr;
    }

}

//export shapes

module.exports = Triangle, Circle, Square;