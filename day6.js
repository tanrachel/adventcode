// data wrangling
data =$("pre").innerHTML.split("\n");
// data = "COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L"
// data = data.split("\n")
data_array =[];
data.forEach(function(each) {
    data_array.push(each.split(")"))})

var dict = {};

for(var i =0;i<data_array.length;i++){
    var item = data_array[i][1];
    var key = data_array[i][0];
    if(dict[key]){
        dict[key].push(item);
    }else{
        dict[key] = [item]
    }

}
dictLength = Object.keys(dict).length;
parent = ["COM"]
levels = 0
for(var i = 0 ;i < dictLength; i++){
    children = []
    numOfChildren=0
    for(var x = 0; x<parent.length; x++){
        if(dict[parent[x]]){
            for(var c = 0;c< dict[parent[x]].length;c++){
                children.push(dict[parent[x]][c]);}
            numOfChildren += dict[parent[x]].length
        }
    }
    // console.log(parent)
    // console.log(children);
    parent = children;
    levels += (i+1)*children.length

}
