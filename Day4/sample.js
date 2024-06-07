
function
 sum(num1,num2){
    return num1+num2;
}


//console.time()
const result = sum(200,36767);
//console.timeEnd()

//console.log(result)


//function
//const
//return
//log
//console
//log
//time
//timeEnd
//Function name
//Variable Name
//Function Invoketion

function doubleTheLetters(name){
    //count the letters
    const nameLength = name.length;
    //take the notebook
    let notebook = "";
    
    //loop the letters
    for(let loopIndex=0;loopIndex<nameLength;loopIndex++){
        //take letter
        const letter = name[loopIndex];
        //write twice in the notebook
        notebook = notebook + letter.repeat(loopIndex+1)
    }
    return notebook
}

const result1 = doubleTheLetters("Senthil")

console.log(result1);
