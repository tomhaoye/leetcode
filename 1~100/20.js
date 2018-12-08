/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    stack = [];
    for(var i in s){
        if(s[i]=='('){
            stack.push(')');
        }else if(s[i]=='['){
            stack.push(']');
        }else if(s[i]=='{'){
            stack.push('}');
        }else if(stack.length===0||stack.pop()!==s[i]){
            return false;
        }
    }
    
    return stack.length===0;
};