// data prep 
data =$("pre").innerHTML.split(",");
data_array =[];
data.forEach(function(each) {
    data_array.push(parseInt(each))});
test = data_array
// input = data_array;
// input =[3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
// test =[3,9,8,9,10,9,4,9,99,-1,8]
// test = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
// test= [3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,
//     1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0]
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


function intcode(input,starting_input,i){
    var i = i;
    looper = false
    input_counter = 0
    opcode_answer = []
    opcode_99 = false
    while((looper==false)&&(i<input.length)){
        input_3 = starting_input[input_counter];
        opcode_array = OpCode(input[i]);
        if(opcode_array[4]==1 || opcode_array[4]==2){
            input[input[i+3]]= OpCode_Function(opcode_array,i,input_3,input);
            i=i+4;
        }else if(opcode_array[4]==3){
            if(input_counter<= starting_input.length-1){
                input[input[i+1]]=OpCode_Function(opcode_array,i,input_3,input);
                i=i+2; 
                input_counter += 1;
            }else{
                looper=true}
        } else if(opcode_array[4]==4){
            opcode_answer.push(OpCode_Function(opcode_array,i,input_3,input));
            i=i+2;
        }else if(opcode_array[4]==5 || opcode_array[4]==6 ){
            i = OpCode_Function(opcode_array,i,input_3,input);
        }else if(opcode_array[4]==7 || opcode_array[4]==8 ){
            input[input[i+3]] = OpCode_Function(opcode_array,i,input_3,input);
            i=i+4;
        }else if(opcode_array[4]==9 && opcode_array[3]==9){
            opcode_99 = true
            looper=true;
            break;
        }else{
            looper=true;
            break;
        }
    };
    returnable = [opcode_answer,i,opcode_99]
    return returnable
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

// test= [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,
//     27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5]
permutations = permute([9,8,7,6,5]);
end_results = []
for(var p=0;p< permutations.length;p++){
    permutation = permutations[p]
    inputA = [permutation[0],0];inputB=[permutation[1]];inputC=[permutation[2]];inputD=[permutation[3]];inputE=[permutation[4]];
    Ai=0;Bi=0;Ci=0;Di=0;Ei=0;
    arrayA =test.map((x)=>x);
    arrayB =test.map((x)=>x);
    arrayC =test.map((x)=>x);
    arrayD =test.map((x)=>x);
    arrayE =test.map((x)=>x);

    E_stopper = false
    while(E_stopper==false){
        machineA = intcode(arrayA,inputA,Ai)
        Ai=machineA[1]
        inputB.push(machineA[0][0])

        machineB = intcode(arrayB,inputB,Bi)
        Bi=machineB[1]
        inputC.push(machineB[0][0])

        machineC = intcode(arrayC,inputC,Ci)
        Ci=machineC[1]
        inputD.push(machineC[0][0])

        machineD = intcode(arrayD,inputD,Di)
        Di=machineD[1]
        inputE.push(machineD[0][0])

        machineE = intcode(arrayE,inputE,Ei)
        Ei=machineE[1]
        E_stopper = machineE[2]

        // configuration 
        inputB=[];inputC=[];inputD=[];inputE=[];
        // 
        inputA=machineE[0]
    };
    end_results.push(inputA[0])
}
Math.max.apply(Math,end_results)