class Puzzle{
    constructor(image = null,board = new Board(),solution = new Board()){
        this.board = board;
        this.solution = solution;
        this.image = image;
        this.pieces = [];
    }
    randomize(){
        this.pieces.sort(() => Math.random() - 0.5);
    }

    shuffleBoard(){
        this.board.generate(this.getPieceHeight(),this.getPieceWidth());
        this.randomize();
        for(let i = 0; i < this.board.state.length; i++){
            let piece = this.pieces[i];

            this.board.setByPosition(i,piece);
        }
    }
    createSolution(){
        this.solution.generate(this.getPieceHeight(),this.getPieceWidth());
        for(let i = 0; i < this.pieces.length; i++){
            this.solution.setByPosition(i,this.getPiece(i));
        }
    }
    createPieces(){
        let id = 0;
        let width = this.getPieceWidth();
        let height = this.getPieceHeight();
        for(let i = 0; i < PUZZLE.COL; i++){
            let y = height * i;
            for(let j = 0; j < PUZZLE.ROW; j++){
                let x = width * j;
                let piece = new Piece(id,x,y);
                this.pieces.push(piece);
                id++;
            }
        }
    }
    displayPuzzle(){
       this.display(this.board);
    }
    displaySolution(){
        this.display(this.solution);
    }
    display(board){
        let ctx = this.getContext();
        let width = this.getPieceWidth();
        let height = this.getPieceHeight();
        ctx.canvas.width = this.image.width + 1;
        ctx.canvas.height = this.image.height + 1;
        for(let i = 0; i < board.state.length; i++){
            let pos = board.state[i];
            let piece = pos.getPiece();
            if(this.isRemoved(pos.id)) {
                ctx.fillRect(pos.x,pos.y,width,height);
            }else{
                ctx.drawImage(this.image, piece.imgX, piece.imgY, width, height, pos.x, pos.y, width, height);
                ctx.strokeRect(pos.x, pos.y, ctx.canvas.width, ctx.canvas.height);
            }
        }
    }

    isRemoved(posId){
        return posId === (this.getPieceCount() - 1);
    }
    getClickPos(e){
        console.log(this.board);
        let rect = this.getElement().getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        console.log("Coordinate x: " + x,
            "Coordinate y: " + y);
        let pos = this.board.getByRange(x,y);
        let ctx = this.getContext();
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 4;
        ctx.strokeRect(pos.x, pos.y, this.getPieceWidth(), this.getPieceHeight());
    }
    getPieceCount(){
        return this.pieces.length;
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
    getContext(){
        return this.getElement().getContext(PUZZLE.CTX);
    }
    getElement(){
        return document.getElementById(PUZZLE.ID);
    }
}



