let name =prompt("please enter your name")

let gender =prompt("please enter your gender from (male/female)")

if(gender == "male" || gender == "female"){

    let age=prompt("please enter your age" )
    if(age <= 0){
    alert("inncorect your age is less than or eqal zero")}
  

    let x= confirm("You are welcome to skip the message, click OK")

    if(x=true){
      if(gender ="male")
      alert("welcom MR "+ name )}

    else if (gender="female"){
       alert("welcom MS "+ name ) 
    }
    
    }
    else{if(x=true){
        if(gender ="male")
        age=prompt("please enter your age" )
    if(age <= 0){
    alert("inncorect your age is less than or eqal zero")}
  

    let x= confirm("You are welcome to skip the message, click OK")

        alert("welcom  "+ name )}
  
      else if (gender="female"){
        age=prompt("please enter your age" )
        if(age <= 0){
        alert("inncorect your age is less than or eqal zero")}
  

         let x= confirm("You are welcome to skip the message, click OK")

         alert("welcom  "+ name ) }
      }
