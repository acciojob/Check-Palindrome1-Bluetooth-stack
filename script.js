// complete the given function

function palindrome(str){
	str = str.toLowerCase();
	let i = 0;
	let j = str.length;
	while(i<=j){
		if(str[i]!==str[j]){
			return false;
		}
		else{
			i++;
			j--;
		}
	}
	return true;
}
module.exports = palindrome
