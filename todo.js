
let fname =prompt("please enter your name")
let gender =prompt("please enter your gender from (male/female)")
let age=prompt("please enter your age")


if(age<=0){
  alert("inncorect your age is less than or eqal zero")
}
let choice=confirm("do you wont to scipt the welcsming message")
if(!choice){

    if(gender=="male"){
    alert("welom in our wepsite MR "+fname)}
    
    else if(gender=="female"){
    alert("welom in our wepsite MS "+fname)}
    }
    else{
      alert("welom in our wepsite "+fname)
    }
  



  