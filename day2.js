// day2 -----------------------------------------------------------
// data prepping---------------------------------------------------
data =$("pre").innerHTML.split(",");
data_array =[];
data.forEach(function(each) {
    data_array.push(parseInt(each))});
data_array[1] =12 ;
data_array[2]=2;
array=[];
temp_array = [];
for(i=0;i< data_array.length;i++){
    if(i%4==0 || i==0){
        if(temp_array.length> 0){array.push(temp_array)};
        temp_array=[];
        temp_array.push(data_array[i]);}
    else{
        temp_array.push(data_array[i])}
}
trailing_array=[];
for(i=(data_array.length - data_array.length%4);i<=data_array.length-1;i++){trailing_array.push(data_array[i])};
array.push(trailing_array); 
// array.forEach(function(each){console.log(each)})
// program -----------------------------------------------------
// test = [1,9,10,3,2,3,11,0,99,30,40,50]
// array = [[1,9,10,3],[2,3,11,0],[99,30,40,50]]
for(i=0;i<array.length;i++){    
	if(array[i][0]==1){
		data_array[array[i][3]] = data_array[array[i][1]]+data_array[array[i][2]]}
	else if(array[i][0]==2){
		data_array[array[i][3]] = data_array[array[i][1]]*data_array[array[i][2]]}
	else if(array[i][0]==99){break};
}
