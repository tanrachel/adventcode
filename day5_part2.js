// data prep 
data =$("pre").innerHTML.split(",");
data_array =[];
data.forEach(function(each) {
    data_array.push(parseInt(each))});
// day5 code 

// test = [1,9,10,3,2,3,11,0,99,30,40,50]
test = data_array;
// test=[1101,100,-1,4,0]
// test = [3,3,1105,-1,9,1101,0,0,12,4,12,99,1]
// test = [3,3,1107,-1,8,3,4,3,99]
// test = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,
//     1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,
//     999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]
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
function OpCode_Function(opcode_array,i){
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
        f1 = parseInt(prompt("enter input:"));
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

var i = 0;
looper = false
while((looper==false)&&(i<test.length)){
    opcode_array = OpCode(test[i]);
    if(opcode_array[4]==1 || opcode_array[4]==2){
        test[test[i+3]]= OpCode_Function(opcode_array,i);
        i=i+4;
    }else if(opcode_array[4]==3){
        test[test[i+1]]=OpCode_Function(opcode_array,i);
        i=i+2;
    } else if(opcode_array[4]==4){
        opcode_4.push(OpCode_Function(opcode_array,i));
        i=i+2;
    }else if(opcode_array[4]==5 || opcode_array[4]==6 ){
        i = OpCode_Function(opcode_array,i);
    }else if(opcode_array[4]==7 || opcode_array[4]==8 ){
        test[test[i+3]] = OpCode_Function(opcode_array,i);
        i=i+4;
    }else if(opcode_array[4]==9 && opcode_array[3]==9){
        looper=true;
        console.log(opcode_4)
        break;
    }else{
        looper=true;
        break;
    };
}

