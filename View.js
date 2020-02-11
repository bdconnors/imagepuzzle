class View{
    constructor(templates){
        this.templates = templates;
    }
    loadHeader(){
        let container = this.templates.makeHeader(CONSTANTS.header);
        this.getBody().append(container);
    }
    loadForm(){
        let form = this.templates.makeForm(CONSTANTS.form);
        this.getBody().append(form);
    }

    loadCanvas(image){
        let canvas = this.templates.makeCanvas(CONSTANTS.canvas,image.width,image.height);
        this.removeElement(CONSTANTS.form.id);
        this.getBody().append(canvas);
    }
    drawPuzzle(image,jumbler){
        let width = jumbler.getRectangleWidth(image);
        let height = jumbler.getRectangleHeight(image);
        let puzzlePieces = jumbler.jumble;
        let context = this.getCanvasContext();
        context.strokeStyle = '#f00';  // some color/style
        context.lineWidth = 2;
        for(let i = 0; i < puzzlePieces.length; i++){
            let piece = puzzlePieces[i];
            let section = piece[1];
            let grid = piece[0];
            context.drawImage(image,section.srcX,section.srcY,width,height,grid.x,grid.y,width,height);
            context.strokeRect(grid.x,grid.y,width,height);
        }

    }
    drawImage(image,x,y,width,height){
        let context = this.getCanvasContext();
        context.drawImage(image,x,y,width,height);
    }
    clearCanvas(){
        let canvas = this.getElement(CONSTANTS.canvas.id);
        this.getCanvasContext().clearRect(0, 0, canvas.width, canvas.height);
    }
    getCanvasContext(){
        let canvas = document.getElementById(CONSTANTS.canvas.id);
        return canvas.getContext(CONSTANTS.canvas.context);
    }
    removeElement(id){
        this.getElement(id).remove();
    }
    emptyElement(id){
        this.getElement(id).empty();
    }
    getBody(){
        return $(CONSTANTS.body);
    }
    getElement(id){
        return $(CONSTANTS.selector+id);
    }
}