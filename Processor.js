class Processor{
    static process(data){
        let array = data.split("\n");
        let rows = [];

        array.forEach(row => {
            let arr = row.split(",");
            rows.push(arr);
        });
        
        return rows;
    }
}

module.exports = Processor;