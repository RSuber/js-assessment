exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var count = 0;
  var result = '';
  for (var i=0; i < str.length; i++){
    if (str[i] === str[i+1]){
      count++
      if (count < amount) {
        result += str[i];
      }
    } else {
      count =0;
      result += str[i];
    }
  };
  return result;
},

  wordWrap: function(str, cols) {
    var newStr = '';
       var newArr = [];

       newArr = str.split(' ');
       newStr = newArr[0];
       for (var i =1; i < newArr.length; i++) {
         if (newArr[i].length > cols) {
           newStr += '\n' + newArr[i];
         } else {
           if(newStr.length + newArr[i].length > cols) {
             newStr += '\n' + newArr[i];
           } else {
             newStr += ' ' + newArr[i];
           }
         }
       }
       return newStr;
  },

  reverseString: function(str) {
 return str.split('').reverse().join('');
  }
};
