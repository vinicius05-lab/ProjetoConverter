const Reader =  require("./Reader.js");
const Processor = require("./Processor.js");
const Table = require("./Table.js");
const HtmlParser = require("./HtmlParser.js");
const Writer = require("./Writer.js");
const PDFWriter = require("./PDFWriter.js");
const leitor = new Reader();
const escritor = new Writer();
async function main(){
    let dados = await leitor.Read("./users.csv");
    let dadosProcessos = Processor.process(dados);
    const table = new Table(dadosProcessos);
    console.log(table.rows);
    console.log(table.countRows);
    let html = await HtmlParser.parser(table);
    console.log(html);
    escritor.write(Date.now() + ".html", html);
    PDFWriter.writePDF(Date.now() + ".pdf", html);
}

main();