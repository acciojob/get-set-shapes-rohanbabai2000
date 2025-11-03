//complete this code
class Rectangle {
	constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get Height(){
        return this.height;
    }
    get Width(){
        return this.width;
    }
    getArea(){
        return ((this.height) * (this.width));
    }
}

class Square extends Rectangle {
	constructor(height){
        super(height);
    }
    getPerimeter(){
        return ((this.height)*4);
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
