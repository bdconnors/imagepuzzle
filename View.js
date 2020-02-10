class View{
    constructor(templates){
        this.templates = templates;
    }
    loadContainer(){
        let container = this.templates.makeContainer(CONSTANTS.container);
        this.getBody().append(container);
    }
    loadForm(){
        let form = this.templates.makeForm(CONSTANTS.form);
        let container = this.getElement(CONSTANTS.container.id);
        container.append(form);
    }

    loadCanvas(){
        let canvas = this.templates.makeCanvas(CONSTANTS.canvas);
        let container = this.getElement(CONSTANTS.container.id);
        this.removeElement(CONSTANTS.form.id);
        container.append(canvas);
    }
    drawImage(image){
        let context = this.getCanvasContext();
        context.drawImage(image,0,0,image.width,image.height);
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