// data wrangling
data =$("pre").innerHTML.split("\n");
data_array =[];
data.forEach(function(each) {
	data_array.push(each.split(")"))})