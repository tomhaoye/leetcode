/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(sNum1, sNum2) {
    /*增加一位数位以记录最高位进一的情况*/
  var sNum1 = ['0', sNum1].join(''), sNum2 = ['0', sNum2].join('');

  /*给短的数字字符串加补0*/
  var len1 = sNum1.length, len2 = sNum2.length,
    zeroArr = function(len){
      var arr = new Array(len), i=len;
      while(i--){arr[i] = 0;}
      return arr;
    };

  if(len1 > len2){
    var arrTemp = zeroArr(len1 - len2);
    arrTemp.push(sNum2),
    sNum2 = arrTemp.join('');
  }
  else if(len2 > len1){
    var arrTemp = zeroArr(len2 - len1);
    arrTemp.push(sNum1),
    sNum1 = arrTemp.join('');
  }


  /*将字符串转换为数组，以相应数位来相加*/
  var arr1 = sNum1.split(''), arr2 = sNum2.split('');

  var arrAddRes = new Array(arr1.length), i=arr1.length;

  var andone = 0, // 低位相加是否进一
    cur1, cur2, curAdd;

  while(i--){
    cur1 = +arr1[i], cur2 = +arr2[i];
    curAdd = cur1+cur2+andone;
    if(10 > curAdd)
      arrAddRes[i] = curAdd,
      andone = 0;
    else
      arrAddRes[i] = +curAdd.toString().slice(1,2),
      andone = 1;
  }

  if(!andone){ // 最后是否进一，否则截取前面的0
    if(arrAddRes[0] === 0){
        arrAddRes.splice(0,1);
    }
  }


  /*数组截取前19位如果有，用科学记数法来表示这个结果*/
  var keeplen = 19; // js的小数只保留小数点后的18位
  var eAfter = arrAddRes.length - 1; // e后面的倍数部分
  var eBefore, eBeforeStr = '';      // e前面的小数部分

  if(keeplen < arrAddRes.length)
    eBeforeStr = [arrAddRes[0], '.', arrAddRes.slice(1, keeplen).join('')].join('');
  else
    eBeforeStr = [arrAddRes[0], '.', arrAddRes.slice(1).join('')].join('');

  eBefore = +eBeforeStr;

  return String(arrAddRes.join(''));
};

