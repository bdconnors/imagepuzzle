const STATE = {
    PIECE_SELECTED:'piece',
    TARGET_SELECTED:'target',
    NO_SELECTION:'none',
    SOLVED:'solved',
};
const ELEMENT = {
    BODY:'body',
    HEADER:'header',
    UPLOAD:'upload',
    FILE:'file',
    UPLOAD_BTN:'uploadBtn',
    CREATE_BTN:'createBtn',
    PUZZLE:'puzzle'
};
const EVNT = {
    CLICK:'click',
    KEY_UP:'keyup',
    KEY_DOWN:'keydown',
    SUBMIT:'submit'
};
const SEL = {
    ID:'#',
    CLASS:'.'
};
const PROP ={
    FILES:'files',
    DISPLAY:'display',
    COLOR:'color'
};
const PUZZLE ={
    ID:'puzzle',
    CTX:'2d',
    COL:4,
    ROW: 4,
    CONTAINER_ID:'puzzle-container',
    OUTLINE_COLOR:'#000',
    OUTLINE_STROKE:2,
    SHUFFLE_BTN_ID:'createBtn',
    SHUFFLE_BTN_TYPE:'submit',
    SHUFFLE_BTN_TXT:'Shuffle Pieces',
    RESET_BTN_ID:'resetBtn',
    RESET_BTN_TYPE:'reset',
    RESET_BTN_TXT:'Display Solution'
};
const HEADER = {
    ID:'header',
    TXT:'Image Puzzle',
    STATUS_ID:'gameStatus',
    STATUS_SOLVED_TXT:'Puzzled Solved',
    STATUS_SOLVED_COLOR:'#00ff00',
    STATUS_UNSOLVED_TXT:'Puzzle Unsolved',
    STATUS_UNSOLVED_COLOR:'#ff0000'
};
const TMPL = {
    HEADER:'header',
    UPLOAD:'upload',
    PUZZLE:'puzzle'
};
const UPLOAD = {
    ID:'upload',
    INPUT_ID:'file',
    INPUT_TYPE:'file',
    SUBMIT_BTN_ID:'uploadBtn',
    SUBMIT_BTN_TYPE:'submit',
    SUBMIT_BTN_TXT:'Upload Image'
};
const DISPLAY = {
    HIDE:'none',
    SHOW:''
};
