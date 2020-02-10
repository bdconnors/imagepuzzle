class Templates{

    constructor(){}

    makeCanvas(config){
        return`<div id="${config.container.id}">
            <canvas id="${config.id}"></canvas>
            <input id="${config.submit.id}" type="${config.submit.type}" value="${config.submit.text}">
        </div>`
    }
    makeContainer(config){
        return`<div id="${config.id}">
            <div id="${config.header.id}">
                <h1>${config.header.text}</h1>
            </div>
        </div>`
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