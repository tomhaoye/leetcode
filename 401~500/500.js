/**
 * @param {string[]} words
 * @return {string[]}
 */
fl = {'q':1,'w':1,'e':1,'r':1,'t':1,'y':1,'u':1,'i':1,'o':1,'p':1};
sl = {'a':1,'s':1,'d':1,'f':1,'g':1,'h':1,'j':1,'k':1,'l':1};
tl = {'z':1,'x':1,'c':1,'v':1,'b':1,'n':1,'m':1};

var findWords = function(words) {
    var arr = [];
    for(var i in words){
        f=0,s=0,t=0;
        for(var j in words[i]){
            if(fl[words[i][j].toLowerCase()] !== undefined){
                f++;
            }else if(sl[words[i][j].toLowerCase()] !== undefined){
                s++;
            }else if(tl[words[i][j].toLowerCase()] !== undefined){
                t++;
            }
        }
        if((f==s&&s===0)||(s==t&&t===0)||(f==t&&t===0)){
            arr.push(words[i]);
        }
    }
    return arr;
};