function rev(arr,n){
    var rev="";
    for(var i=0;i<n;i++){
       var c= arr.pop();
        rev+=c
    }
    return rev;
}
var arr=[1,2,3,4,5];
var n=arr.length;
console.log(rev(arr,n))

