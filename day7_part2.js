// data prep 
// data =$("pre").innerHTML.split(",");
// data_array =[];
// data.forEach(function(each) {
//     data_array.push(parseInt(each))});

// test = data_array;
// test =[3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
test =[3,9,8,9,10,9,4,9,99,-1,8]
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
function OpCode_Function(opcode_array,i,input_3){
    f1=0;
    f2=0;
    if(opcode_array[4]==1){
        if(opcode_array[2]==1){
            f1 = test[i+1]
        }else if(opcode_array[2]==0){
            f1 = test[test[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = test[i+2]
        }else if(opcode_array[1]==0){
            f2 = test[test[i+2]]
        };
        f = f1+f2
        return f
    }else if(opcode_array[4]==2){
        if(opcode_array[2]==1){
            f1 = test[i+1]
        }else if(opcode_array[2]==0){
            f1 = test[test[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = test[i+2]
        }else if(opcode_array[1]==0){
            f2 = test[test[i+2]]
        };
        f = f1*f2
        return f
    } else if(opcode_array[4]==3){
        f1 = input_3;
        return f1
    }  else if(opcode_array[4]==4){
        if(opcode_array[2]==1){
            f1 = test[i+1]
        }else if(opcode_array[2]==0){
            f1 = test[test[i+1]]
        };
        return f1
    } else if(opcode_array[4]==5){
        if(opcode_array[2]==1){
            f1 = test[i+1]
        }else if(opcode_array[2]==0){
            f1 = test[test[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = test[i+2]
        }else if(opcode_array[1]==0){
            f2 = test[test[i+2]]
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
            f1 = test[i+1]
        }else if(opcode_array[2]==0){
            f1 = test[test[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = test[i+2]
        }else if(opcode_array[1]==0){
            f2 = test[test[i+2]]
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
            f1 = test[i+1]
        }else if(opcode_array[2]==0){
            f1 = test[test[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = test[i+2]
        }else if(opcode_array[1]==0){
            f2 = test[test[i+2]]
        };
        if(f1 < f2){
            return 1
        }
        else{
            return 0
        }
    }else if(opcode_array[4]==8){
        if(opcode_array[2]==1){
            f1 = test[i+1]
        }else if(opcode_array[2]==0){
            f1 = test[test[i+1]]
        };
        if(opcode_array[1]==1){
            f2 = test[i+2]
        }else if(opcode_array[1]==0){
            f2 = test[test[i+2]]
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


async function intcode(input,starting_input,opcode_answer){
    try{
        var i = 0;
        looper = false
        input_counter = 0
        while((looper==false)&&(i<input.length)){
            input_3 = starting_input[input_counter];
            console.log(input_3,starting_input);
            opcode_array = await OpCode(input[i]);
            if(opcode_array[4]==1 || opcode_array[4]==2){
                input[input[i+3]]= await OpCode_Function(opcode_array,i,input_3);
                i=i+4;
            }else if(opcode_array[4]==3){
                input[input[i+1]]= await OpCode_Function(opcode_array,i,input_3);
                i=i+2;
                input_counter += 1;
                console.log("YOU HIT ME (3)")
            } else if(opcode_array[4]==4){
                await opcode_answer.push(OpCode_Function(opcode_array,i,input_3));
                i=i+2;
            }else if(opcode_array[4]==5 || opcode_array[4]==6 ){
                i = await OpCode_Function(opcode_array,i);
            }else if(opcode_array[4]==7 || opcode_array[4]==8 ){
                input[input[i+3]] = await OpCode_Function(opcode_array,i,input_3);
                i=i+4;
            }else if(opcode_array[4]==9 && opcode_array[3]==9){
                looper=true;
                console.log(opcode_answer)
                break;
            }else{
                looper=true;
                break;
            };
        }
        return opcode_answer
    }catch(error){
        alert(error)
    }
}

dupe_array =test.map((x)=>x)
results =[]
intcode(dupe_array,[8],results).then(result);
console.log(result)
