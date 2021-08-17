var ReadLineSync=require('readline-sync');
var count=0;
const questions =[{question:"Do you know Me",
answer:"no"},
{question:"Do i live in India",
answer:"yes"},
{question:"Am i Human",
answer:"yes"},
{question:"Am i older than 25",
answer:"no"}
]
const highScore =[
  {Name:"Anurag",
Score:3}
]
var Input1=ReadLineSync.question(
  "Enter your Name : ")

console.log("Welcome to the game of my life "+Input1)

const play=(q,a)=>{
userAnswer=ReadLineSync.question(q +":")
if(userAnswer.toLowerCase()===a.toLowerCase()){
  console.log("Right On")
  count=count+1;
}
else{
console.log("Wrong Answer")
 count=count-1;
}
}
for(var i=0;i<questions.length;i++){
let currq=questions[i].question;
let curra=questions[i].answer;
// console.log("andar")
play(currq,curra);
}
for(var k=0;k<highScore.length;k++)
{
  if(highScore[k].Score<count)
  {
    console.log("congrats you have beaten the high score ",highScore[k].Score)
     highScore.push({Name:Input1,Score:count
    })
  }
}
console.log("Your Score is: " + count)
console.log("HighScorers: ")
for(var k=0;k<highScore.length;k++){
  console.log(highScore[k].Name,highScore[k].Score)
}
// console.log(highScore.length)
