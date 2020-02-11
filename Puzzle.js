class Puzzle{
    constructor(board){
        this.board = board;
        this.solution = [];
        this.pieces = [];
        this.image = null;
    }
    randomizePieces(){
        this.pieces.sort(() => Math.random() - 0.5);
    }
    generatePuzzle(image){
        this.setImage(image);
        let pieceWidth = this.getPieceWidth();
        let pieceHeight = this.getPieceHeight();
        this.board.generatePositions(pieceWidth,pieceHeight,PUZZLE.COL,PUZZLE.ROW);
        this.generatePieces(pieceWidth,pieceHeight);
        this.board.generatePositions(this.pieces);
        this.board.createState(this.pieces);
        this.solution = [...this.board.state];
        console.log(this);
    }
    generatePieces(pieceWidth,pieceHeight){
        let pieceCount = 0;
        for(let i = 0; i < PUZZLE.COL; i++){
            let y = pieceHeight * i;
            for(let j = 0; j < PUZZLE.ROW; j++){
                let x = pieceWidth * j;
                this.pieces.push(new Piece(pieceCount,x,y));
                pieceCount++;
            }
        }
    }
    displayBoardState(){
        this.randomizePieces();
        this.board.createState(this.pieces);
        this.display(this.board.state);
    }
    displaySolution(){
        this.display(this.solution);
    }
    display(piecePositions){
        console.log(this);
        console.log(piecePositions);;
        let ctx = this.board.getContext();
        ctx.lineWidth = PUZZLE.OUTLINE_STROKE;
        ctx.strokeStyle = PUZZLE.OUTLINE_COLOR;
        ctx.canvas.width = this.image.width;
        ctx.canvas.height = this.image.height;
        for(let i = 0; i < piecePositions.length; i++){
            let piecePos = piecePositions[i];
            console.log(piecePos);
            let piece = this.getPiece(piecePos.pieceId);
            console.log(piece);
            let pos = this.board.getPosition(piecePositions[i].posId);
            let pieceWidth = this.getPieceWidth();
            let pieceHeight = this.getPieceHeight();

            ctx.drawImage(this.image,piece.imgX,piece.imgY,pieceWidth,pieceHeight,pos.x,pos.y,pieceWidth,pieceHeight);
            ctx.strokeRect(pos.x, pos.y, ctx.canvas.width, ctx.canvas.height);
        }
    }
    getPiece(id){
        return this.pieces.find((piece)=>{return piece.id === id});
    }
    setImage(image){
        this.image = image;
    }
    getImage(){
        return this.image;
    }
    getPieceWidth(){
        return this.image.width / PUZZLE.COL;
    }
    getPieceHeight(){
        return this.image.height /  PUZZLE.ROW;
    }
}



