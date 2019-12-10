// data wrangling
data =$("pre").innerHTML.split("\n");
// data = "COM)B\nB)C\nC)D\nD)E\nE)F\nB)G\nG)H\nD)I\nE)J\nJ)K\nK)L\nK)YOU\nI)SAN"
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
searchStart = []
for(var i = 0 ;i < dictLength; i++){
    children = []
    numOfChildren=0
    for(var x = 0; x<parent.length; x++){
        if(dict[parent[x]]){
            for(var c = 0;c< dict[parent[x]].length;c++){
                children.push(dict[parent[x]][c]);
                if(dict[parent[x]][c]=="YOU" || dict[parent[x]][c] == "SAN"){
                    searchStart.push([parent[x],dict[parent[x]][c]])
                }
            }
            numOfChildren += dict[parent[x]].length
        }
    }
    // console.log(parent)
    // console.log(children);
    parent = children;
}
// JN3 - YOU
// T1T - SAN

function arrayFinder(array,value){
    found = false
	array.forEach(function(each){
		if(each == value){
            found = true
        }
    });
    if(found == true){
        return array
    }else{
        return []
    }
}
    
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === arrayFinder(object[key],value));
  }



function santaMeFinder(starter, parents_array){
    endReached = false 
    while(endReached == false){
        addKey = (getKeyByValue(dict,starter));
        parents_array.push(addKey)
        starter = addKey;
        if(starter == "COM"){
            endReached = true
        }
    }
}
youParents = [] 
    santaMeFinder("YOU",youParents)
sanParents = []
    santaMeFinder("SAN",sanParents)
y_location = 0
s_location = 0
breaker = false
for(y = 0; y<youParents.length;y++){
    for(s = 0;s<sanParents.length;s++){
        if(youParents[y]==sanParents[s]){
            y_location = y;
            s_location = s;
            breaker = true
        }
        if(breaker==true){
            break
        }
    }
    if(breaker == true){
        break
    }
}
console.log(y_location, s_location, y_location+s_location)