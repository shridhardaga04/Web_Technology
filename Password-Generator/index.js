function genPass(){
    
    let pass1 = document.getElementById("pass1")
    let pass2 = document.getElementById("pass2")
    let pass3 = document.getElementById("pass3")
    let pass4 = document.getElementById("pass4")
    
    let randomArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "?", ",", "{", "}", "[", "]", "<", ">", "/", "|", ":", ".", "~" ]
    
    let pass = []
    
    for (let j = 0; j < 4; j++){
        let msg = ""
        let t = 0
        for(let i = 0; i < 9; i++){
            t = Math.floor(Math.random() * 79)
            msg += randomArr[t]
        }
        pass.push(msg)
    }
    
    pass1.textContent = pass[0]
    pass2.textContent = pass[1]
    pass3.textContent = pass[2]
    pass4.textContent = pass[3]
    // console.log(pass)
}