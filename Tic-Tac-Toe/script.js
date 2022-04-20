$( document ).ready(function() {
    console.log( "ready!" );

    var turn = 0;
    var x = 'x';
    var o = 'o';

    const box1 = $('#box1');
    const box2 = $('#box2');
    const box3 = $('#box3');
    const box4 = $('#box4');
    const box5 = $('#box5');
    const box6 = $('#box6');
    const box7 = $('#box7');
    const box8 = $('#box8');
    const box9 = $('#box9');
    const player = $('#player');

    var square = document.querySelectorAll('.grid div');
    square.forEach(square => {
        square.addEventListener('click',game);
    })
    
    // Set
    function set(){
        location.reload();
    }

    // Win O
    function winO(){
        if( box1.hasClass('o') && box2.hasClass('o') && box3.hasClass('o') ||
			box4.hasClass('o') && box5.hasClass('o') && box6.hasClass('o') ||
			box7.hasClass('o') && box8.hasClass('o') && box9.hasClass('o') ||
			box1.hasClass('o') && box4.hasClass('o') && box7.hasClass('o') ||
			box2.hasClass('o') && box5.hasClass('o') && box8.hasClass('o') ||
			box3.hasClass('o') && box6.hasClass('o') && box9.hasClass('o') ||
			box1.hasClass('o') && box5.hasClass('o') && box9.hasClass('o') ||
			box3.hasClass('o') && box5.hasClass('o') && box7.hasClass('o')
		){
            player.html('Player O Win');
            alert('Winner: O');
			set()
		}
    }

    // Win X
    function winX(){
        if( box1.hasClass('x') && box2.hasClass('x') && box3.hasClass('x') ||
			box4.hasClass('x') && box5.hasClass('x') && box6.hasClass('x') ||
			box7.hasClass('x') && box8.hasClass('x') && box9.hasClass('x') ||
			box1.hasClass('x') && box4.hasClass('x') && box7.hasClass('x') ||
			box2.hasClass('x') && box5.hasClass('x') && box8.hasClass('x') ||
			box3.hasClass('x') && box6.hasClass('x') && box9.hasClass('x') ||
			box1.hasClass('x') && box5.hasClass('x') && box9.hasClass('x') ||
			box3.hasClass('x') && box5.hasClass('x') && box7.hasClass('x')
		){
            player.html('Player X Win');
			alert('Winner: X');
			set()
		}
    }

    // Game Process
    function game(){
        // console.log('turn: '+turn);
        if($(this).text() == o || $(this).text() == x){
            alert('This spot is already filled');
        }
        else{
            if(winO());
            else if(winX());
            // else if(turn === 9) alert('Game is Tie!')
            else if(turn % 2 === 0){
                turn++;
                player.html('Player X turn');
                $(this).text(o);
                $(this).addClass('o');
                winO();
            }
            else{
                turn++;
                player.html('Player O turn');
                $(this).text(x); 
                $(this).addClass('x');
                winX();
            }
        }
    }
});