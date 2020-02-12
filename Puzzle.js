class Puzzle{
    constructor(image = null,board = new Board()){
        this.board = board;
        this.image = image;
        this.pieces = [];
        this.state = STATE.NO_SELECTION;
    }

    shuffleBoard=()=>{
        this.randomizePieces();
        for(let i = 0; i < this.board.state.length; i++){
            let piece = this.pieces[i];
            this.board.setByPosition(i,piece);
        }
        this.setSolved(false);
        this.displayBoard();
    };
    createBoard=()=>{
        this.board.generate(this.getPieceHeight(),this.getPieceWidth());
    };
    createPieces=()=>{
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
    };
    randomizePieces=()=>{
        this.pieces.sort(() => Math.random() - 0.5);
    };
    displayBoard=()=>{
       this.display(false);
    };
    displaySolution=()=>{
        this.display(true);
    };
    display=(solution)=>{
        let ctx = this.getContext();
        ctx.canvas.width = this.image.width;
        ctx.canvas.height = this.image.height;
        this.setSolved(solution);
        for(let i = 0; i < this.board.state.length; i++){
            let pos = this.board.state[i];
            this.drawPiece(pos,solution);
        }
    };
    clicked=(e)=>{
        let rect = this.getElement().getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        switch(this.state){
            case STATE.SOLVED:
                return false;
            case STATE.NO_SELECTION:
                this.selectPiece(x,y);
                break;
            case STATE.PIECE_SELECTED:
                this.movePieces(x,y);
                break;
            default:
                return false;

        }

    };

    selectPiece=(x,y)=>{
        this.board.setSelection(x,y);
        this.state = STATE.PIECE_SELECTED;
    };
    selectTarget=(x,y)=>{
        this.board.setTarget(x,y);
    };
    movePieces=(x,y)=>{
        this.selectTarget(x,y);
        this.board.move();
        this.drawPiece(this.board.selected);
        this.drawPiece(this.board.target);
        this.state = STATE.NO_SELECTION;
        this.checkComplete();

    };
    checkComplete=()=>{
        let state = this.board.state;
        let falseCount = 0;
        let trueCount = 0;
        for(let i = 0; i < state.length; i++){
            if(!state[i].correctPiece()){
                console.log(state[i]);
                console.log(state[i].piece);
                falseCount++;
            }else{
                trueCount++;
            }
        }
        console.log('incorrect: '+falseCount);
        console.log('correct: '+trueCount);
        if(falseCount === 0){
            this.state = STATE.SOLVED;
            this.setSolved(true);
        }else{
            this.setSolved(false);
        }

    };
    drawPiece=(pos,solution)=>{
        let width = this.getPieceWidth();
        let height = this.getPieceHeight();
        let ctx = this.getContext();
        let imgX;
        let imgY;
        if(solution){
            imgX = pos.x;
            imgY = pos.y;
        }else{
            imgX = pos.piece.imgX;
            imgY = pos.piece.imgY;
        }
        ctx.strokeStyle = PUZZLE.OUTLINE_COLOR;
        ctx.drawImage(this.image, imgX, imgY, width, height, pos.x, pos.y, width, height);
        ctx.strokeRect(pos.x,pos.y,width,height);

    };
    getPieceCount=()=>{
        return this.pieces.length;
    };
    getPiece=(id)=>{
        return this.pieces.find((piece)=>{return piece.id === id});
    };
    setImage=(image)=>{
        this.image = image;
    };
    getImage=()=>{
        return this.image;
    };
    getPieceWidth=()=>{
        return this.image.width / PUZZLE.COL;
    };
    getPieceHeight=()=>{
        return this.image.height /  PUZZLE.ROW;
    };
    getContext=()=>{
        return this.getElement().getContext(PUZZLE.CTX);
    };
    getElement=()=>{
        return document.getElementById(PUZZLE.ID);
    };
    getStatus=()=>{
        return $(SEL.ID+HEADER.STATUS_ID);
    };
    setSolved=(isSolved)=>{
        console.log(isSolved);
        let status = this.getStatus();
        let color;
        let txt;
        if(isSolved){
            color = HEADER.STATUS_SOLVED_COLOR;
            txt = HEADER.STATUS_SOLVED_TXT;
            this.state = STATE.SOLVED;
        }else{
            color = HEADER.STATUS_UNSOLVED_COLOR;
            txt = HEADER.STATUS_UNSOLVED_TXT;
            this.state = STATE.NO_SELECTION;
        }
        status.empty();
        status.text(txt);
        status.css(PROP.COLOR,color);
    }
}



