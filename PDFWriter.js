const pdf = require("html-pdf");

class PDFWriter{
    static writePDF(filename, html){
        pdf.create(html, {
            childProcessOptions: {
                env: {
                    OPENSSL_CONF: '/dev/null',
                },
          }}).toFile(filename, err => {
            if(err){
                console.log("Erro: " + err);
            }else{
                console.log("PDF criado");
            }
        });
    }
}

module.exports = PDFWriter;