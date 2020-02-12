class Board{
    constructor(col,row){
        this.col = col;
        this.row = row;
        this.positions = this.col * this.row;
        this.state = [];
        this.selected = null;
        this.target = null;

    }
    generate=(cellH,cellW)=>{
        this.clearState();
        let id = 0;
        for(let i = 0; i < this.col; i++){
            let col = i;
            let y = cellH * i;
            for(let j = 0; j < this.row; j++){
                let row = j;
                let x = cellW * j;
                let top = y;
                let bottom = top + cellH;
                let left = x;
                let right = left + cellW;
                let position = new Position(id,col,row,x,y);
                position.setBoundaries(top,bottom,left,right);
                this.state.push(position);
                id++;
            }
        }
    };
    clearState=()=>{
        this.state = [];
    };
    setSelection=(x,y)=>{
        this.selected = this.getByRange(x,y);
        return this.selected;
    };
    setTarget=(x,y)=>{
        this.target = this.getByRange(x,y);
        return this.target;
    };
    move=()=>{
        this.swap(this.selected,this.target);
    };
    clearSelection=()=>{
        let selected = this.selected;
        this.selected = null;
        return selected;
    };
    clearTarget=()=>{
        let target = this.target;
        this.target = null;
        return target;
    };

    getByRange=(x,y)=>{
        let pos = this.state.find((pos)=>{return pos.inRange(x,y) === true});
        return pos;
    };
    addPosition=(position)=>{
        this.state.push(position);
    };
    getByPosition=(id)=>{
       return this.state.find((pos)=>{return pos.id === id});
    };
    getByPiece=(id)=>{
        return this.state.find((pos)=>{return pos.piece.id === id});
    };
    getByCell=(col,row)=> {
        return this.state.find((pos) => {
            return pos.col === col && pos.row === row;
        });
    };
    getRow=(row)=>{
        return this.state.filter((pos)=>{return pos.row === row});
    };
    getColumn=(col)=>{
        return this.state.filter((pos)=>{return pos.col === col});
    };
    setByCell=(row,col,piece)=>{
        let position = this.getByCell(row,col);
        position.setPiece(piece);
    };
    setByPosition=(id,piece)=>{
       let position = this.getByPosition(id);
       position.setPiece(piece)
    };
    swapByPositions=(posId1,posId2)=>{
        this.swap(this.getByPosition(posId1),this.getByPosition(posId2));
    };
    swapByCells=(col1,row1,col2,row2)=>{
        this.swap(this.getByCell(col1,row1),this.getByCell(col2,row2));
    };
    swapByPieces=(pieceId1,pieceId2)=>{
        this.swap(this.getByPiece(pieceId1),this.getByPiece(pieceId2));
    };
    swap=(selection,target)=>{
        let selectionPiece = selection.getPiece();
        let targetPiece = target.getPiece();
        selection.setPiece(targetPiece);
        target.setPiece(selectionPiece);
    };
}