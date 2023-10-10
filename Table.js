class Table{
    constructor(dadosProcessos){
        this.header = dadosProcessos[0];
        dadosProcessos.shift();
        this.rows = dadosProcessos;
    }
    get countRows(){
        return this.rows.length;
    }
    get countColumns(){
        return this.header.length;
    }
}

module.exports = Table;