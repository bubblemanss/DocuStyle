var PDFDocument = require('pdfkit');
var blobStream  = require('blob-stream');

var doc = new PDFDocument;
var stream = doc.pipe(blobStream());

doc.text('Hi');

doc.end();
stream.on('finish', function(){
    url = stream.toBlobURL('application/pdf');
    ifirame.src = url;
});
