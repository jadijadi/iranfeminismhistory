function emailCheck (emailStr) {
var emailPat=/^(.+)@(.+)$/
var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]"
var validChars="\[^\\s" + specialChars + "\]"
var quotedUser="(\"[^\"]*\")"
var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/
var atom=validChars + '+'
var word="(" + atom + "|" + quotedUser + ")"
var userPat=new RegExp("^" + word + "(\\." + word + ")*$")
var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$")
var matchArray=emailStr.match(emailPat)
if (matchArray==null) {
	alert("Email address seems incorrect.")
	return false
}
var user=matchArray[1]
var domain=matchArray[2]

if (user.match(userPat)==null) {
    alert("The username doesn't seem to be valid.")
    return false
}

var IPArray=domain.match(ipDomainPat)
if (IPArray!=null) {
	  for (var i=1;i<=4;i++) {
	    if (IPArray[i]>255) {
	        alert("Destination IP address is invalid!")
		return false
	    }
    }
    return true
}

var domainArray=domain.match(domainPat)
if (domainArray==null) {
	alert("The domain name doesn't seem to be valid.")
    return false
}

var atomPat=new RegExp(atom,"g")
var domArr=domain.match(atomPat)
var len=domArr.length
if (domArr[domArr.length-1].length<2 || 
    domArr[domArr.length-1].length>3) {
   alert("The address must end in a three-letter domain, or two letter country.")
   return false
}

if (len<2) {
   var errStr="This address is missing a hostname!"
   alert(errStr)
   return false
}

return true;
}

function checkform(element) {
  myelement = document.getElementById(element);
  
  switch(element) {
    case 'comment-author':
      if (myelement.value == 'NAME') {
        myelement.style.direction = 'rtl';
        myelement.value = '';
      }
      break;
    
    case 'comment-email':
      if (myelement.value == 'EMAIL') {
        myelement.value = '';
      }
      break;
      
    case 'comment-url':
      if (myelement.value == 'URL') {
        myelement.value = '';
      }
      break;
    
    case 'comment-text':
      if (myelement.value == 'MESSAGE') {
        myelement.style.direction = 'rtl';
        myelement.value = '';
      }
      break;
  }
}