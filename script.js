$('.btn').mouseenter(()=>{
	$('.btn').css('background-color','blue')
})
$('.btn').mouseleave(()=>{
	$('.btn').css('background-color','#4CAF50')
})
 


 
 function ValidateEmail(inputText )
{
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

 

if(inputText.value.match(mailformat))
{
alert("Valid email address!");
 
return true;
}
else
{
alert("You have entered an invalid email address!");
 
return false;
}





}