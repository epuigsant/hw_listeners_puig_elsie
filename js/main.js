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
