//This function and event listener changes text inside the table

var change = document.getElementById( 'fun-table' );
change.addEventListener( 'click', modifyTable, false
);

function modifyTable() {
  var t1 = document.getElementById( 't1' );
  if ( t1.firstChild.nodeValue == 'two' ) {
    t1.firstChild.nodeValue = 'awesome';
  } else {
    t1.firstChild.nodeValue = 'sweet';
  }
}

//Change color of h1 using the DOM

var color = document.getElementById( 'main-heading' );

color.addEventListener( 'mouseover', function changeColor() {
    color.className = 'heading';
} );

//Add paragraphs to article by clicking

var clickLink = document.getElementById( 'morelink' );
var newParagraph = document.getElementById( 'extra' );

clickLink.addEventListener( 'click', function( event ) {
    event.preventDefault();
    newParagraph.style.display = ( newParagraph.style.display === 'none' ) ? 'block' : 'none';
}, false );

newParagraph.style.display = 'none';
