class Templates{

    constructor(){}

    makeCanvas(config,width,height){
        return`<canvas id="${config.id}" width="${width}" height="${height}"></canvas>`;

    }
    makeHeader(config){
        return`<div id="${config.id}">
                <h1>${config.text}</h1>
            </div>`;

    }
    makeForm(config){
        return`<div id="${config.id}">
            <label for="${config.upload.id}">${config.upload.label}</label>
            <br>
            <br>
            <input id="${config.upload.id}" type="${config.upload.type}" name="${config.upload.id}">
            <br>
            <br>
            <input id="${config.submit.id}" type="${config.submit.type}" value="${config.submit.text}">
            <br>
        </div>`;
    }
}