
const reshapeMatrix =(mat, r, c) => {
    const m = mat.length;
    const n = mat[0].length;

    if (m * n !== r * c) {
        return mat;
    }

    const refMat = [].concat(...mat);   
    // const refMat = [...mat]
    const answer = [];

    for (let i = 0; i < r; i++) {
        answer.push(refMat.splice(0, c));
    }

    return answer;
}

const mat1 = [[1, 2], [3, 4]];
console.log(reshapeMatrix(mat1, 1, 4)); 

const mat2 = [[1, 2], [3, 4]];
console.log(reshapeMatrix(mat2, 2, 4)); 
