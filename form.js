const templates = new Templates();
const view = new View(templates);
const jumbler = new Jumbler(CONSTANTS.jumbler);

document.addEventListener('DOMContentLoaded',load);

function load() {
    view.loadHeader();
    view.loadForm();
    listenForImage();
}
function listenForImage(){
    let input = view.getElement(CONSTANTS.form.submit.id);
    input.on(CONSTANTS.events.click,upload);
}
async function upload(){
    let input = view.getElement(CONSTANTS.form.upload.id);
    let file = input.prop(CONSTANTS.files)[0];
    let image = await getImage(file);
    view.loadCanvas(image);
    jumbler.generate(image);
    view.drawPuzzle(image,jumbler);

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
                image.id = CONSTANTS.image.id;
                resolve(image)
            };
        };
    });
}
