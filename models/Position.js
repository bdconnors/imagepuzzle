class Position{
    constructor(id = null,col = 0,row = 0,x = 0, y = 0,piece = null){
        this.id = id;
        this.col = col;
        this.row = row;
        this.x = x;
        this.y = y;
        this.top = null;
        this.bottom = null;
        this.right = null;
        this.left = null;
        this.piece = piece;
    }
    inRange(x,y){
        let vertical = y >= this.top && y <= this.bottom;
        let horizontal = x >= this.left && x <= this.right;
        return vertical && horizontal;
    }
    setBoundaries(top,bottom,left,right){
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    setTop(top){
        this.top = top;
    }
    setBottom(bottom){
        this.bottom = bottom;
    }
    setLeft(left){
        this.left = left;
    }
    setRight(right){
        this.right = right;
    }
    setPiece(piece){
        this.piece = piece;
    }
    getPiece(){
        return this.piece;
    }
    correctPiece(){
        let x = this.x === this.piece.imgX;
        let y = this.y === this.piece.imgY;
        return x && y;
    }
}