class Board{
    constructor(col,row){
        this.col = col;
        this.row = row;
        this.positions = col * row;
        this.state = [];
    }
    generate(cellH,cellW){
        let id = 0;
        for(let i = 0; i < this.col; i++){
            let col = i;
            let y = cellH * i;
            for(let j = 0; j < this.row; j++){
                let row = j;
                let x = cellW * j;
                this.state.push(new Position(id,col,row,x,y));
                id++;
            }
        }
    }
    addPosition(position){
        this.state.push(position);
    }
    getByPosition(id){
       return this.state.find((pos)=>{return pos.id === id});
    }
    getByPiece(id){
        return this.state.find((pos)=>{return pos.piece.id === id});
    }
    getByCell(col,row) {
        return this.state.find((pos) => {
            return pos.col === col && pos.row === row;
        });
    }
    getRow(row){
        return this.state.filter((pos)=>{return pos.row === row});
    }
    getColumn(col){
        return this.state.filter((pos)=>{return pos.col === col});
    }
    setByCell(row,col,piece){
        let position = this.getByCell(row,col);
        position.setPiece(piece);
    }
    setByPosition(id,piece){
       let position = this.getByPosition(id);
       position.setPiece(piece)
    }
    swapByPositions(posId1,posId2){
        this.swap(this.getByPosition(posId1),this.getByPosition(posId2));
    }
    swapByCells(col1,row1,col2,row2){
        this.swap(this.getByCell(col1,row1),this.getByCell(col2,row2));
    }
    swapByPieces(pieceId1,pieceId2){
        this.swap(this.getByPiece(pieceId1),this.getByPiece(pieceId2));
    }
    swap(pos1,pos2){
        let piece1 = pos1.getPiece();
        let piece2 = pos2.getPiece();
        pos1.setPiece(piece2);
        pos2.setPiece(piece1);
    }

}