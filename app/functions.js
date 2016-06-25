exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {

  return fn.apply(this,arr)
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
  return function(str2){
        return `${str}, ${str2}`

  }
     },

  makeClosures: function(arr, fn) {
    var func = []
    var storedfunc= function(el){
      return function(){ return fn(el)  }
    }
      for(i=0; i<arr.length; i++){
           func.push(storedfunc(arr[i]));
      }
      return func
    },

  partial: function(fn, str1, str2) {
    var back = function(str3){
        return fn(str1,str2,str3)
      }
      return back;
  },

  useArguments: function() {
      arg= 0
  for (i=0; i<arguments.length; i++){
      arg += arguments[i]
  }
  return arg
  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
