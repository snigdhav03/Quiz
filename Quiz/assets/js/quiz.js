var count=1, ques,op1,op2,op3, score=0;
if(count==1) $("input").hide();

var answer=["op3","op1","op2","op3","op2"], choice;

function getAns(choice) {
  if(choice.localeCompare(answer[count-1])==0)
  return score+1;
  else
  return score;
}
  
  $("li").on("click", function(){  
  $("li").removeClass("select");
  $(this).addClass("select");
  $("input").show();
  score= getAns($(this).attr('id'));
  });



function next() {
	$("li").removeClass("select");
	 $("input").hide();
	
	if(count<6) {
		count=count+1;
	document.getElementById("num").innerHTML= "QUESTION "+count+" OUT OF 5";
	
	if(count==2)
		{ 	ques= "What is the real name of Jon Snow?"; 
			op1="Kit Harrington";
			op2="Luthas Marine";
			op3="David Peterson"; }
	if(count==3)
		{ 	ques= "Who is Regina Phalange?"; 
			op1= "Rachel Green";
			op2= "Phoebe Buffay";
			op3= "Monica Geller"; }

	if(count==4)
		{ 	ques= "In Breaking Bad, who owns a food joint chain?";
			op1= "Jessy Pinkman";
			op2= "Walter White";
			op3= "Gustavo Fring"; }

	if(count==5)
		{ 	ques= "Which colour sweat shirt does Arrow wear?";
			op1= "Blue";
			op2= "Green";
			op3= "Black"; 
			document.getElementById("next").value="SUBMIT"; }

	document.getElementById("ques").innerHTML= ques;
	document.getElementById("op1").innerHTML= op1;
	document.getElementById("op2").innerHTML= op2;
	document.getElementById("op3").innerHTML= op3;
	 }

	if(count==6) {
		document.getElementById("num").innerHTML="CONGRATULATIONS!";
		document.getElementById("ques").innerHTML="YOUR SCORE: ";
		$("#ans").addClass("score");
		document.getElementById("ans").innerHTML=score;
	}

};


  
