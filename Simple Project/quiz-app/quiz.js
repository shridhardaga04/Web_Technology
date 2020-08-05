$(document).ready(function() {
    console.log('Script Loaded');
    // var quizArr = [
    //     {
    //         "id": 1,
    //         "answer": 3,
    //         "question": "Which was not one of Voldemort's Horcruxes?",
    //         "options": ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"]
    //     },
    //     {
    //         "id": 2,
    //         "answer": 1,
    //         "question": "Which of these are not one of Hagrid's many pets?",
    //         "options": ["Grawp", "Fluffy", "Aragog", "Noberta"]
    //     },
    //     {
    //         "id": 3,
    //         "answer": 3,
    //         "question": "Which class did Severus Snape always want to teach?",
    //         "options": ["Potions", "Charms", "Defense Against Dark Arts", "Transfiguration"]
    //     },
    //     {
    //         "id": 4,
    //         "answer": 3,
    //         "question": "Which Hogwarts house did Moaning Myrtle belong in?",
    //         "options": ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
    //     },
    //     {
    //         "id": 5,
    //         "answer": 2,
    //         "question": "What class did Neville end up teaching at Hogwarts?",
    //         "options": [
    //             "Astronomy",
    //             "Herbology",
    //             "Charms",
    //             "Muggle Studies"
    //         ]
    //     }
    // ]
    // for(let i = 0; i < quizArr.length; i++){
        
    //     console.log(quizArr[i].id,quizArr[i].answer);
    // }
    
    var score = 0; 
    $('input[type=radio][name=q1]').change(function() {
        if (this.value == 3) {
            score += 1;
            // $('quiz-item').addClass('correct-answer');
            // console.log("correct");
        }
        // else{
        //     $('quiz-item').addClass('incorrect-answer');
        //     console.log("incorrect");
        // }
    });
    $('input[type=radio][name=q2]').change(function() {
        if (this.value == 1) {
            score += 1;
        }
    });
    $('input[type=radio][name=q3]').change(function() {
        if (this.value == 3) {
            score += 1;
        }
    });
    $('input[type=radio][name=q4]').change(function() {
        if (this.value == 3) {
            score += 1;
        }
    });
    $('input[type=radio][name=q5]').change(function() {
        if (this.value == 2) {
            score += 1;
        }
    });

    scoreModal = $('#score-wrapper');
    $('#btn-submit').on('click',function(){
        console.log("On click");
        if(confirm("Submit Quiz")){
            scoreModal.css("display", "block");
            $('#quiz-wrapper').css("opacity", "0.5");
            $(window).scrollTop(0);
            $('#score-count').html('Your Score<br>' + score + '/' + 5);
        } 
    })

    var span = document.getElementsByClassName("close")[0];
    span.addEventListener('click',function() {
        scoreModal.css("display", "none");
        $('#quiz-wrapper').css("opacity", "1");
        $('input[type=radio]').attr('disabled', true);
        $('input[type=radio]').css('cursor','not-allowed')
    });

    // window.onclick = function(event) {
    //     if (event.target == scoreModal) {
    //         scoreModal.css("display", "none");
    //         console.log("click",event.target.nodeName)
    //     } 
    //   }
});
