function countEven(arr,n){
    var countEven=0;
    for(var i=0;i<n;i++){
        if(arr[i]%2==0){
            countEven++;
        }
    }
    return countEven++;
  }
  function countOdd(arr,n){
    var countOdd=0;
    for(var i=0;i<n;i++){
        if(arr[i]%2!=0){
            countOdd++;
        }
    }
    return countOdd++;
  }
  var arr=[1,2,3,4,5];
  var n=arr.length;
  
  console.log("number of odd number "+ countOdd(arr,n));
  console.log("number of even number "+ countEven(arr,n));