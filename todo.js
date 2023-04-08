// "use strict"
// let name =prompt("please enter your name")

// let gender =prompt("please enter your gender from (male/female)")

// if(gender == "male" || gender == "female"){

//     let age=prompt("please enter your age" )
//     if(age <= 0){
//     alert("inncorect your age is less than or eqal zero")}
  

//     let x= confirm("You are welcome to skip the message, click OK")

//     if(x=true){
//       if(gender ="male")
//       alert("welcom MR "+ name )}

//     else if (gender="female"){
//        alert("welcom MS "+ name ) 
//     }
    
//     }
//     else{if(x=true){
//         if(gender ="male")
//         age=prompt("please enter your age" )
//     if(age <= 0){
//     alert("inncorect your age is less than or eqal zero")}
  

//     let x= confirm("You are welcome to skip the message, click OK")

//         alert("welcom  "+ name )}
  
//       else if (gender="female"){
//         age=prompt("please enter your age" )
//         if(age <= 0){
//         alert("inncorect your age is less than or eqal zero")}
  

//          let x= confirm("You are welcome to skip the message, click OK")

//          alert("welcom  "+ name ) }
//       }







      
      // let numberOfQuestions=[];
      // let answersArray =[];
      // while(numberOfQuestions.length-1 <= 2 ){

      //  let answers1= prompt("Are you married please enter (yes/no)")
      //   if (answers1 != ""){
      //        answersArray.push(answers1)
      //        console.log(answersArray)
      //        numberOfQuestions++;
      //   }
      //   else{alert( "invalid")}

      //   let answers2=prompt("Are you fasting? Please answer (yes/no)")
      //     if( answers2 != ""){
      //       answersArray.push(answers2)
      //       console.log(answersArray)
      //       numberOfQuestions++;}
         
      //     else{alert( "invalid")}

      //     let answers3=prompt("Are you a Muslim please answer (yes / no)")
      //     if( answers3 != ""){
      //       answersArray.push(answers3)
      //       console.log(answersArray)
      //       numberOfQuestions++;}
         
      //     else{alert( "invalid")}
      //   }



      
      var answersArray =[];
      Questions(answersArray);
      Checktheanswer();
      print();

      function Questions(answer){
        let answers1= prompt("Are you married please enter (yes/no)")
        let answers2=prompt("Are you fasting? Please answer (yes/no)")
        let answers3=prompt("Are you a Muslim please answer (yes / no)")
        answersArray.push(answers1,answers2,answers3)

      }

      function Checktheanswer(checkan){
        for(let x=0; x<answersArray.length;x++ )
        if( answersArray[x] !=""){
          console.log(answersArray)
              
              }
          else{answersArray[x]= "invalid"}  ;  

        }
        

      function print(){
        for(let x=0; x<answersArray.length;x++){
          console.log(answersArray[x])
        }
      }  