// vscode please let me access the top of my code
function setElementHTML(id, payload){
  document.getElementById(id).innerHTML = payload
}
function getElementContent(id){
  return document.getElementById(id).value
}
let correctLetter = ""
let started = 0
function generate(){
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h",
              "i", "j", "k", "l", "m", "n", "o", "p",
               "q", "r", "s", "t", "u", "v", "w", "x", "y"]
  let letterAmount = getElementContent("uniquechar")
  let lineBreakInterval = getElementContent("linebreak")
  let duplicate = Math.floor(Math.random()*(letterAmount-1))
  correctLetter = letters[duplicate]
  let newLetters = ["", "", "", "", "","", "", "", "", "",
    "", "", "", "", "","", "", "", "", "",
    "", "", "", "", ""
  ]
  for(i=0;i<letterAmount-1;i++){
    newLetters[i] = letters[i]
  }
  newLetters[letterAmount-1] = letters[duplicate]
  newLetters = newLetters.filter(function(a){return a !== ""})
  console.log(newLetters)
  let rows = Math.ceil(letterAmount/lineBreakInterval)
  let payload = ""
  for(i=1;i<=rows;i++){
    for(j=1;j<=lineBreakInterval;j++){
      if(newLetters.length >= 1){
        let rand = Math.floor(Math.random()*(newLetters.length-1))
        payload += newLetters[rand]
        newLetters.splice(rand, 1)
      }
    }
    payload += "<br>"
  }
  setElementHTML("payload", payload)
  started = Date.now()
}
function submit(){
  if(!(getElementContent("playerguess") == correctLetter)) return
  let time = (Date.now() - started)/1000
  setElementHTML("lasttime", time.toFixed(3))
  document.getElementById("playerguess").value = ""
}
