class Templates{

    constructor(){}

    get(name){
        switch(name){
            case TMPL.PUZZLE:
                return this.getPuzzle();
            case TMPL.HEADER:
                return this.getHeader();
            case TMPL.UPLOAD:
                return this.getUpload();
            default:
                return false;
        }
    }
    getPuzzle(){
        return`<div id="${PUZZLE.CONTAINER_ID}">
            <canvas id="${PUZZLE.ID}" style="border: ${PUZZLE.OUTLINE_STROKE}px ${PUZZLE.OUTLINE_COLOR};"></canvas>
            <br>
            <br>
            <input id="${PUZZLE.SHUFFLE_BTN_ID}" type="${PUZZLE.SHUFFLE_BTN_TYPE}" value="${PUZZLE.SHUFFLE_BTN_TXT}">
            <input id="${PUZZLE.RESET_BTN_ID}" type="${PUZZLE.RESET_BTN_TYPE}" value="${PUZZLE.RESET_BTN_TXT}">
            <br>
        </div>`;

    }
    getHeader(){
        return`<div id="${HEADER.ID}">
                <h1>${HEADER.TXT}</h1>
                <h2 id="${HEADER.STATUS_ID}"></h2>
            </div>`;

    }
    getUpload(){
        return`<div id="${UPLOAD.ID}">
            <input id="${UPLOAD.INPUT_ID}" type="${UPLOAD.INPUT_TYPE}" name="${UPLOAD.INPUT_ID}">
            <br>
            <br>
            <input id="${UPLOAD.SUBMIT_BTN_ID}" type="${UPLOAD.SUBMIT_BTN_TYPE}" value="${UPLOAD.SUBMIT_BTN_TXT}">
            <br>
        </div>`;
    }
}