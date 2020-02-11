class Board{
    constructor(){
        this.positions = [];
        this.state = [];
    }
    getPosition(id){
        return this.positions.find((pos)=>{return pos.id === id});
    }
    getPositionsPiece(posId){
        let piecePos = this.state.find((piecePos)=>{return piecePos.posId === posId});
        return piecePos.pieceId;
    }
    getPiecesPosition(pieceId){
        let piecePos = this.state.find((piecePos)=>{return piecePos.pieceId === pieceId});
        return this.getPosition(piecePos.pieceId);
    }
    resetState(answer){
        this.state = answer;
    }
    createState(pieces){
        this.clearState();
        for(let i = 0; i < pieces.length; i++){
            let pos = this.getPosition(i);
            this.state.push(new PiecePosition(pos.id,pieces[i].id));
        }
    }
    generatePositions(pieces){
        for(let i = 0; i < pieces.length; i++){
            this.positions.push(new Position(i,pieces[i].imgX,pieces[i].imgY));
        }
    }
    clearState(){
        this.state = [];
    }
    getElement(){
        return document.getElementById(PUZZLE.ID);
    }
    getContext(){
        let board = this.getElement();
        return board.getContext(PUZZLE.CTX);
    }

}