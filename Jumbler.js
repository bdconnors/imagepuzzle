class Jumbler{
    constructor(config){
        this.config = config;
        this.grid = [];
        this.image = [];
        this.jumble = [];
    }
    generate(image){
        let height = this.getRectangleHeight(image);
        let width = this.getRectangleWidth(image);
        for(let i = 0; i < this.config.columns; i++){
            let y = height * i;
            for(let j = 0; j < this.config.rows; j++){
                let x = width * j;
                this.image.push(new ImageSection(x,y));
                this.grid.push(new Position(x,y));
            }
        }
        let randomGrid = [...this.grid].sort(() => Math.random() - 0.5);
        let randomSections = [...this.image].sort(() => Math.random() - 0.5);
        for(let i = 0; i < randomGrid.length; i++){
            this.jumble.push([randomGrid[i],randomSections[i]]);

        }
        console.log(this);
    }

    getRectangleWidth(image){
        return image.width / this.config.columns;
    }
    getRectangleHeight(image){
        return image.height / this.config.rows
    }
}



