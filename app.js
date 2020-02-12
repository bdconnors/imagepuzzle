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
    puzzle = makePuzzle(image);
    hide(UPLOAD.ID);
    show(PUZZLE.CONTAINER_ID);
    puzzle.displaySolution();
}
function makePuzzle(image){
    let board = new Board(PUZZLE.COL,PUZZLE.ROW);
    puzzle = new Puzzle(image,board);
    puzzle.createPieces();
    puzzle.createBoard();
    bindControls();
    return puzzle;
}
function bindControls(){
    addClickEvent(PUZZLE.SHUFFLE_BTN_ID,puzzle.shuffleBoard);
    addClickEvent(PUZZLE.RESET_BTN_ID,puzzle.displaySolution);
    addClickEvent(PUZZLE.ID,puzzle.clicked);
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
