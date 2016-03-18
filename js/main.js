var count = 1;
var pageHeading = document.getElementById( 'heading' );

 pageHeading.addEventListener( 'click', function addParagraphs() {
    var myElement = document.createElement( 'p' );
    var myElementText = document.createTextNode( 'This is click number' + '' + count++ );
    myElement.appendChild( myElementText );
    document.getElementById( 'container' ).appendChild( myElement );
} );
