// test = 123456789012
// test =test.toString().split("")
// data_array = [] 
// test.forEach(function(each) {
//     data_array.push(parseInt(each))});

// width = 3
// height = 2

raw_data = document.querySelectorAll(".cm-number");
data_array =[]
raw_data.forEach(function(each){data_array.push(each.innerText)})
d1 = data_array[0];d2=data_array[1];d3=data_array[2];
data = d1.concat(d2,d3)
data = data.split("")
data_array = []
data.forEach(function(each){data_array.push(parseInt(each))})

width = 25
height = 6

width_array = []
height_array = []

for(var w = 0; w<data_array.length;w += width){
    temparray = data_array.slice(w,w+width)
    width_array.push(temparray)
}

for(var h=0;h<width_array.length;h+=height){
    temparray = width_array.slice(h,h+height)
    height_array.push(temparray)
}
counter = []
for(var i=0;i<height_array.length;i++){
    counter0 = 0
    counter1 = 0
    counter2 = 0
    picture = height_array[i]
    for(var row = 0;row<picture.length;row++){
        picture_row = picture[row]
        for(var line = 0;line<picture_row.length;line++){
            value_comparison = picture_row[line];
            if(value_comparison==0){
                counter0 +=1
            }else if(value_comparison==1){
                counter1 +=1
            }else if(value_comparison==2){
                counter2 +=1 
            }
        }
    };
    values=[counter0,counter1,counter2]
    counter.push(values)
}

max_counter = counter[0]
for(var c =1;c<counter.length;c++){
    counter_0 = counter[c][0]
    if(counter_0 < max_counter[0]){
        max_counter = counter[c]
    }
}
console.log(max_counter)