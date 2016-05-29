// JavaScript Document
var tp=document.getElementById('return');
window.onscroll=function()
{	var scr=document.documentElement.scrollTop || document.body.scrollTop;
	
	if (scr>0) 
	{	tp.style.display='block';

	}
	else 
	{	tp.style.display='none';
		
	}
	
	tp.onclick=function()
	{	
		document.documentElement.scrollTop=document.body.scrollTop=0;
		
	}

}