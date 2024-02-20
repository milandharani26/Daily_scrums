
const binaryArr = [1,0,1,1,0,0,0,1]

const zeroIndices = function(array, index){

    const newArray = array.map((elem,i)=>{
        if(elem == 0 && index>0){
            index--;
            return 1
        }
        return elem
    })

    console.log(newArray)

    let maxOneCount = 0;

    newArray.map((elem,i)=>{
        if(elem){
            maxOneCount++
        }
        else{
            
        }
    })

    console.log(maxOneCount-1);
    
}

const answer = zeroIndices(binaryArr,1)