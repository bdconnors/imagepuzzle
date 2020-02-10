const templates = new Templates();
const view = new View(templates);

document.addEventListener('DOMContentLoaded',load);

function load() {
    view.loadContainer();
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
    console.log(image);
    view.loadCanvas();
    view.drawImage(image);
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
