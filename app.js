const templates = new Templates();
let puzzle;

$(document).ready(()=>{
    load();
});

function load() {
    appendBody(templates.get(TMPL.HEADER));
    appendBody(templates.get(TMPL.UPLOAD));
    appendBody(templates.get(TMPL.PUZZLE));
    addClickEvent(UPLOAD.SUBMIT_BTN_ID,upload);
    hide(PUZZLE.CONTAINER_ID);
}

async function upload(){
    let input = getElement(UPLOAD.INPUT_ID);
    let file = input.prop(PROP.FILES)[0];
    let image = await getImage(file);
    this.remove(UPLOAD.ID);
    show(PUZZLE.CONTAINER_ID);
    puzzle = constructPuzzle(image);
    addClickEvent(PUZZLE.CREATE_BTN_ID,puzzle.displayPuzzle.bind(puzzle));
    addClickEvent(PUZZLE.RESET_BTN_ID,puzzle.displaySolution.bind(puzzle));
    addClickEvent(PUZZLE.ID,puzzle.getClickPos.bind(puzzle));
    puzzle.displaySolution();

}
function constructPuzzle(image){
    let solution = new Board(PUZZLE.COL,PUZZLE.ROW);
    let board = new Board(PUZZLE.COL,PUZZLE.ROW);
    puzzle = new Puzzle(image,board,solution);
    puzzle.createPieces();
    puzzle.createSolution();
    puzzle.shuffleBoard();
    return puzzle;
}
function getImage(file){
    return new Promise((resolve,reject)=>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e)=>{
            let data = e.target.result;
            let image = new Image();
            image.src = data;
            image.onload=()=>{
                resolve(image)
            };
        };
    });
}
function addClickEvent(id,fn){
    this.getElement(id).on(EVNT.CLICK,fn);
}
function appendBody(template){
    getBody().append(template);
}
function appendTo(parentId,template){
    getElement(parentId).append(template);
}
function remove(id){
    getElement(id).remove();
}
function emptyBody(){
    getBody().empty();
}
function empty(id){
    getElement().empty();
}
function getBody(){
    return $(ELEMENT.BODY);
}
function getElement(id){
    return $(SEL.ID+id);
}
function hide(id){
    this.getElement(id).css(PROP.DISPLAY,DISPLAY.HIDE);
}
function show(id){
    this.getElement(id).css(PROP.DISPLAY,DISPLAY.SHOW);
}
