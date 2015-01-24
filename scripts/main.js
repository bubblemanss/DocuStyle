module.exports = function (iframe, PDFDocument, blobStream){
var doc = new PDFDocument();
var stream = doc.pipe(blobStream());

doc.text('You');

doc.end();
stream.on('finish', function(){
    url = stream.toBlobURL('application/pdf');
    iframe.src = url;
});
}