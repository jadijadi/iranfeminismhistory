var newwindow="_blank"

function hyperlinks(target){
   if (target) where = newwindow;
   else where = "_self";
   for (var i=0; i<=(document.links.length-1); i++){
	 var linkobj=document.links[i].href
   if ( linkobj.indexOf("javascript:") ==-1 && linkobj.indexOf("#") ==-1){
   	if (target && where!="_blank")
      	document.links[i].onclick=function(){
			if (window.window2 && !window2.closed)
			window2.location=this.href
			else
        	window2=window.open(this.href)
			window2.focus()
      		return false
      			}
   	else{
      	if (newwindow=="window2") document.links[i].onclick = "";    
      	document.links[i].target = where;
       	}
   	}
	}
}

function inithyperlinks() {
  if (document.targetform.targetnew.checked)
  hyperlinks(true)
}