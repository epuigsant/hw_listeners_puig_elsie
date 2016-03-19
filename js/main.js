var formInput = document.getElementById( 'eventForm' );

formInput.addEventListener( 'submit', function logAnswers( e ) {
    e.preventDefault();
    console.log( document.getElementsByClassName( 'input' ).value );

} );
