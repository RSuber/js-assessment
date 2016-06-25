exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
    indexOf: function(arr, item) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    },

    sum: function(arr) {

        var sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;

    },

    remove: function(arr, item) {
        let result = []
        for (i = 0; i < arr.length; i++) {
            if (arr[i] != item) {
                result.push(arr[i]);
            }
        }
        return result
    },

    removeWithoutCopy: function(arr, item) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1)
                i--;
            }
        }
        return arr
    },

    append: function(arr, item) {
        var newArray = []
        for (i = 0; i < arr.length; i++) {
            newArray.push(arr[i])
            if (i === arr.length - 1) {
                newArray.push(item)
            }
        }
        return newArray
    },

    truncate: function(arr) {
        var newArray = []
        for (i = 0; i < arr.length - 1; i++) {
            newArray.push(arr[i])
        }
        return newArray

    },

    prepend: function(arr, item) {
        var newArray = [item]
        for (i = 0; i < arr.length; i++) {
            newArray.push(arr[i])
        }
        return newArray
    },

    curtail: function(arr) {
        var newArray = []
        for (i = 0; i < arr.length; i++) {
            newArray.push(arr[i])
        }
        newArray.splice(0, 1);
        return newArray
    },

    concat: function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert: function(arr, item, index) {
        newArray = []
        for (i = 0; i < arr.length; i++) {
            newArray.push(arr[i]);
            if (i === index) {
                newArray.splice(index, 0, item)
            }
        }
        return newArray;
    },

    count: function(arr, item) {
        let newArray = []
        let newCount = 0
        for (i = 0; i < arr.length; i++) {
            newArray.push(arr[i]);
            if (arr[i] === item) {
                newCount = newCount + 1
            }
        }
        return newCount
    },

    duplicates: function(arr) {
        // let cache = []
        let exists= [];
        let doubles = [];
        for (i = 0; i < arr.length; i++) {
            // some condition determines whether we push
            // if this thing doesn't exist in cache yet, push it
            // if (cache.indexOf(arr[i]) !== arr[i]){
            // if it doesn't exist yet, add to exists
            // else add to double
            if (exists.indexOf(arr[i]) === -1) {
                exists.push(arr[i]);
            } else if (doubles.indexOf(arr[i]) === -1){
                doubles.push(arr[i]);
            }
        }
        return doubles;
    },
    square: function(arr) {
      var newArray=[]
      for(i=0; i<arr.length;i++){
        root = Math.pow(arr[i],2);
        newArray.push(root)
      }
    return newArray
    },

    findAllOccurrences: function(arr, target) {
        var newArray=[]
        for(i=0; i<arr.length;i++){
          if(arr[i] === target){
            newArray.push(i)
    }
    }
    return newArray
    }
};
