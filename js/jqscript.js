 $(function(){

 $('.menu-button-click').on('click',function(){
 $('body').toggleClass('backToOriginal');


 });

 });




/*
$(function(){

Function apply on this line
<img src="img/our-icon.png" alt="Logo of Web" 
 id="change" class="change">
 
$('.move').hover(function(){


if($('#change').hasClass('change')){
$('#change').attr({src: 'img/logo-ohover.png'});
$('#change').removeClass('change');
}

else{
	
	 $('#change').addClass('change');
	 $('#change').attr({src: 'img/logo-o.png'});
}


});



});
*/



$(function(){


//Global Scope
var elements = []; //blank array

var count = $('.bitch').children().length;
	

for(i=0;i<count;i++){
//get all child elements of section class bitch
elements[i] = $('.bitch').children().get(i);
}



//----------------END----------------------

//Only One Time Work
if($("[id^='rad-']").is(':checked')){
	
	//getID of Value which is checked
	var getID = $("[id^='rad-']").attr('id');
		//Function calling Radio Desceions
		DescesionToggles(getID,elements);


}// if close
else{
	
	alert('Not Checked');
	
}

//----------------END----------------------

$("[id^='rad-']").change(function(){

//Check which Radio is check
if ($(this).is(':checked')){

var FetchId = $(this).attr('id');

//again Refresh section start from scratch
$('section').removeClass('control-that msk').addClass('bitch');

DescesionToggles(FetchId,elements);

}// if close

});//state change Function

});//self invoke Function

//----------------END----------------------



//custom function 1

function DescesionToggles(idPass,arr){

//radio toggle 1 per call hu
if(idPass==='rad-toggle-1'){

//Function calling first child appear
 ChildAppendDescesions(0,arr);


}//if end

else if(idPass==='rad-toggle-2'){

//Function calling second child appear
 ChildAppendDescesions(1,arr);

}

else if(idPass==='rad-toggle-3'){

//Function calling third child appear
 ChildAppendDescesions(2,arr);

}

	
}//function End

//----------------END----------------------

function ChildAppendDescesions(num,arr){


//all child of section elements are remove
$('.bitch').children().remove();
$('.bitch').removeClass('bitch').addClass('control-that');

/*
Section k end per element add ker dey ga Lekin Elements array
ka scope sirf wo selfInvoke Function tuk tha iss liye pass karey gey
*/
$('.control-that').append(arr[num]);

setTimeout(function(){
$('.control-that').addClass('msk');
},30);


}

//----------------END----------------------


/*get pixels values

 $(window).scroll(function() {
     var pixels = $(window).scrollTop(); 

     console.log(pixels);
 });



$(document).on('scroll',function(){





if($(this).scrollTop() >= 500){


	$('.t-border').addClass('animt-Border');
}

else if($(this).scrollTop() < 500){
	$('.t-border').removeClass('animt-Border');
}




});
*/


