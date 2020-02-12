class Position{
    constructor(id = null,col = 0,row = 0,x = 0, y = 0,piece = null){
        this.id = id;
        this.col = col;
        this.row = row;
        this.x = x;
        this.y = y;
        this.piece = piece;
    }
    setPiece(piece){
        this.piece = piece;
    }
    getPiece(){
        return this.piece;
    }
}