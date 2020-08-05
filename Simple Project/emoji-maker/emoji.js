$(document).ready(function(){
    console.log('Script loaded');

    // Card Ids
    var selectSkin = $('#select-skin-card')
    var selectEyes = $('#select-eyes-card');
    var selectMouth = $('#select-mouth-card');
    var Emoji = $('#emoji');

    // Arrow Ids
    var showEyes = $('#show-eyes-card');
    var showMouth = $('#show-mouth-card');
    var showSkin = $('#show-skin-card');

    // Skin Ids
    var yellowSkin = $('#yellow-skin');
    var greenSkin = $('#green-skin');
    var redSkin = $('#red-skin');

    // Eyes Ids
    var normalEye = $('#eye-normal');
    var closedEye = $('#eye-closed');
    var longEye = $('#eye-long');
    var laughingEye = $('#eye-laughing');
    var rollingEye = $('#eye-rolling');
    var winkingEye = $('#eye-winking');

    // Mouth Ids
    var openMouth = $('#mouth-open');
    var smilingMouth = $('#mouth-smiling');
    var straightMouth = $('#mouth-straight');
    var sadMouth = $('#mouth-sad');
    var teethMouth = $('#mouth-teeth');

    // Emoji Content
    var emojiSkin = $('#skin');
    var emojiEyes = $('#eyes');
    var emojiMouth = $('#mouth');

    // Card Functions
    function eye(){
        selectEyes.css('display','block');
        selectSkin.css('display','none');
        selectMouth.css('display','none');
        console.log("in Eyes Card");
    }
    function mouth(){
        selectEyes.css('display','none');
        selectSkin.css('display','none');
        selectMouth.css('display','block');
        console.log("in Mouth Card");
    }
    function skin(){
        selectEyes.css('display','none');
        selectSkin.css('display','block');
        selectMouth.css('display','none');
        console.log("in Skin Card");
    }

    // Arrows Functionality
    showEyes.on('click',eye);
    showMouth.on('click',mouth);
    showSkin.on('click',skin);
    $('#back').on('click',eye);

    // Selecting Colors/Skin
    yellowSkin.on('click',function(){
        let source = yellowSkin.attr('src');
        emojiSkin.attr('src',source);
        console.log("Yello Skin");
        eye();
    });
    greenSkin.on('click',function(){
        let source = greenSkin.attr('src');
        emojiSkin.attr('src',source);
        console.log("green Skin");
        eye();
    });
    redSkin.on('click',function(){
        let source = redSkin.attr('src');
        emojiSkin.attr('src',source);
        console.log("red Skin");
        eye();
    });

    // Selecting Eyes
    normalEye.on('click',function(){
        let source = normalEye.attr('src');
        emojiEyes.attr('src',source);
        console.log("normal Eye");
        mouth();
    });
    closedEye.on('click',function(){
        let source = closedEye.attr('src');
        emojiEyes.attr('src',source);
        console.log("closed Eye");
        mouth();
    });
    longEye.on('click',function(){
        let source = longEye.attr('src');
        emojiEyes.attr('src',source);
        console.log("long Eye");
        mouth();
    });
    laughingEye.on('click',function(){
        let source = laughingEye.attr('src');
        emojiEyes.attr('src',source);
        console.log("laughing Eye");
        mouth();
    });
    rollingEye.on('click',function(){
        let source = rollingEye.attr('src');
        emojiEyes.attr('src',source);
        console.log("rolling Eye");
        mouth();
    });
    winkingEye.on('click',function(){
        let source = winkingEye.attr('src');
        emojiEyes.attr('src',source);
        console.log("winking Eye");
        mouth();
    });

    // Selecting Mouth
    openMouth.on('click',function(){
        let source = openMouth.attr('src');
        emojiMouth.attr('src',source);
        console.log("open Mouth");
    });
    smilingMouth.on('click',function(){
        let source = smilingMouth.attr('src');
        emojiMouth.attr('src',source);
        console.log("smiling Mouth");
    });
    straightMouth.on('click',function(){
        let source = straightMouth.attr('src');
        emojiMouth.attr('src',source);
        console.log("straight Mouth");
    });
    sadMouth.on('click',function(){
        let source = sadMouth.attr('src');
        emojiMouth.attr('src',source);
        console.log("sad Mouth");
    });
    teethMouth.on('click',function(){
        let source = teethMouth.attr('src');
        emojiMouth.attr('src',source);
        console.log("teeth Mouth");
    });
});