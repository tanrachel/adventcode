// data prep 
// data =$("pre").innerHTML.split(",");
// data_array =[];
// data.forEach(function(each) {
//     data_array.push(parseInt(each))});
// test = data_array
// input = data_array;
// input =[3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
// test =[3,9,8,9,10,9,4,9,99,-1,8]
// test = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
// test= [3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,
//     1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0]

test= [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,
    27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5]
function OpCode(opcode){
    opcode_array= opcode.toString().split("").map(Number);
    x = 5 - opcode_array.length
    while(x>0){
        opcode_array.unshift(0);
        x--
    }
    return opcode_array;
}
opcode_4 = []
function OpCode_Function(opcode_array,i,input_3,input){
    f1=0;
    f2=0;
    if(opcode_array[4]==1){
        if(opcode_array[2]==1){
            f1 = input[i+1]
        }else if(opcode_array[2]==0){
            f1 = input[input[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = input[i+2]
        }else if(opcode_array[1]==0){
            f2 = input[input[i+2]]
        };
        f = f1+f2
        return f
    }else if(opcode_array[4]==2){
        if(opcode_array[2]==1){
            f1 = input[i+1]
        }else if(opcode_array[2]==0){
            f1 = input[input[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = input[i+2]
        }else if(opcode_array[1]==0){
            f2 = input[input[i+2]]
        };
        f = f1*f2
        return f
    } else if(opcode_array[4]==3){
        f1 = input_3;
        return f1
    }  else if(opcode_array[4]==4){
        if(opcode_array[2]==1){
            f1 = input[i+1]
        }else if(opcode_array[2]==0){
            f1 = input[input[i+1]]
        };
        return f1
    } else if(opcode_array[4]==5){
        if(opcode_array[2]==1){
            f1 = input[i+1]
        }else if(opcode_array[2]==0){
            f1 = input[input[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = input[i+2]
        }else if(opcode_array[1]==0){
            f2 = input[input[i+2]]
        };
        if(f1 != 0){
            i = f2
        }
        else{
            i = i+3
        }
        return i 
    } else if(opcode_array[4]==6){
        if(opcode_array[2]==1){
            f1 = input[i+1]
        }else if(opcode_array[2]==0){
            f1 = input[input[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = input[i+2]
        }else if(opcode_array[1]==0){
            f2 = input[input[i+2]]
        };
        if(f1 == 0){
            i = f2
        }
        else{
            i = i+3
        }
        return i 
    } else if(opcode_array[4]==7){
        if(opcode_array[2]==1){
            f1 = input[i+1]
        }else if(opcode_array[2]==0){
            f1 = input[input[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = input[i+2]
        }else if(opcode_array[1]==0){
            f2 = input[input[i+2]]
        };
        if(f1 < f2){
            return 1
        }
        else{
            return 0
        }
    }else if(opcode_array[4]==8){
        if(opcode_array[2]==1){
            f1 = input[i+1]
        }else if(opcode_array[2]==0){
            f1 = input[input[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = input[i+2]
        }else if(opcode_array[1]==0){
            f2 = input[input[i+2]]
        };
        if(f1 == f2){
            return 1
        }
        else{
            return 0
        }
    }
    else {
        console.log("I'm broken")
    }
}


function intcode(input,starting_input,opcode_answer,iteration){
    var i = 0;
    looper = false
    input_counter = 0
    while((looper==false)&&(i<input.length)){
        input_3 = starting_input[input_counter];
        opcode_array = OpCode(input[i]);
        checker = OpCode_Function(opcode_array,i,input_3,input)
         if(opcode_array[4]==1 || opcode_array[4]==2){
            input[input[i+3]]= OpCode_Function(opcode_array,i,input_3,input);
            i=i+4;
        }else if(opcode_array[4]==3){
            input_counter += 1;
            console.log(input_counter)
            if(input_counter==3 && iteration != 4){
                looper = true
            }else{
                input[input[i+1]]=OpCode_Function(opcode_array,i,input_3,input);
                i=i+2;} 
        } else if(opcode_array[4]==4){
            opcode_answer.push(OpCode_Function(opcode_array,i,input_3,input));
            i=i+2;
        }else if(opcode_array[4]==5 || opcode_array[4]==6 ){
            i = OpCode_Function(opcode_array,i,input_3,input);
        }else if(opcode_array[4]==7 || opcode_array[4]==8 ){
            input[input[i+3]] = OpCode_Function(opcode_array,i,input_3,input);
            i=i+4;
        }else if(opcode_array[4]==9 && opcode_array[3]==9){
            looper=true;
            break;
        }else{
            looper=true;
            break;
        }console.log(input)
    }
    return opcode_answer

}
function permute(permutation) {
    var length = permutation.length,
        result = [permutation.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;
  
    while (i < length) {
      if (c[i] < i) {
        k = i % 2 && c[i];
        p = permutation[i];
        permutation[i] = permutation[k];
        permutation[k] = p;
        ++c[i];
        i = 1;
        result.push(permutation.slice());
      } else {
        c[i] = 0;
        ++i;
      }
    }
    return result;
  }


first_permutations = permute([4,3,2,1,0])
second_permutations = permute([9,8,7,6,5])
full_permutations = []
for(var i =0;i< first_permutations.length;i++){
	for(var j=0;j< second_permutations.length;j++){
		temp = [first_permutations[i],second_permutations[j]]
        full_permutations.push(temp)}}
test_permutation = [9,8,7,6,5]
end_results = []
starting_input = [0]
for(var j=0; j< test_permutation.length;j++){
    dupe_array =test.map((x)=>x);
    starting_input.unshift(test_permutation[j]);
    opcode_answer_1 = []
    result = intcode(dupe_array,starting_input,opcode_answer_1,j)
    console.log(result)
    starting_input = [result[result.length -1]]
};
end_results.push(starting_input[0])


Math.max.apply(Math,end_results)


// for(var fp=0; fp<1;fp++){
//     first_permutation = full_permutations[fp][0]
//     second_permutation = full_permutations[fp][1]
//     console.log(first_permutation, second_permutation)
//     starting_input = [0]
//     console.log("STARTING FIRST PERMUTATION")
//     for(var p1=0; p1< first_permutation.length;p1++){
//         console.log("STARTING HERE!")
//         dupe_array =test.map((x)=>x);
//         starting_input.unshift(first_permutation[p1]);
//         opcode_answer_1 = []
//         result = intcode(dupe_array,starting_input,opcode_answer_1)
//         starting_input = [result[result.length -1]]
//     };
//     console.log("STARTING SECOND PERMUTATION")
//     second_permutation = full_permutations[fp][1]
//     second_starting_input = []
//     second_starting_input.push(result[result.length -1 ])
//     for(var p2=0; p2< second_permutation.length;p2++){
//         dupe_array =test.map((x)=>x);
//         second_starting_input.unshift(second_permutation[p2]);
//         opcode_answer_2 = []
//         result2 = intcode(dupe_array,second_starting_input,opcode_answer_2)
//         second_starting_input = [result2[result2.length -1]]
//     };
//     end_results.push(second_starting_input[0])
// }

// Math.max.apply(Math,end_results)



