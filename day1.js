var array = [] 
for(i=0;i<t.length;i++){array.push(parseInt(t[i].innerText))}
var calculated = [] 
array.forEach(function(each) {calculated.push(Math.floor(each/3)-2)})
var total = 0 
calculated.forEach(function(each){console.log(total = total+each)})

// -----------------------------------------------------------------
// part 2 
grand_array = [];
grand_counter= 0;
array.forEach(function(each){
    testing = []; 
    i=each;
	counter=0;
    while(i>0){
        i=Math.floor(i/3)-2;
        if(i> 0){testing.push(i);counter+=i}};
    grand_array.push(testing);
    grand_counter += counter;})

