module.exports = {
  sumOfMatrices: (m1,m2) => {
      if(m1.length != m2.length)
      {
      return;
      }
      let m3 = [];
      for(let i = 0;i<m1.length;i++)
      {
      let arr = [];
      for(let j = 0;j<m1.length;j++)
      {
        arr.push(m1[i][j]+m2[i][j]);
        
      }
      m3.push(arr);
      }
      return m3;
  },
  printMatrix: (mt) =>
  {
    let s = "";
    for(let i=0;i<mt.length;i++)
    {
    for(let j=0;j<mt.length;j++)
    {
      s+= mt[i][j] + " ";
    }
    s+= "\n";
    }
    return s;
  },

  matProduct:function(m1,m2){
    if(m1[0].length !== m2.length){
        console.log("wrong input.");
        return 0;
    }
    const result = [];
    for(let i = 0; i<m1.length;i++){
        result[i] = [];
        for(let j = 0; j < m2[0].length; j++){
            result[i][j] = 0;
            for(let k = 0; k<m2.length;k++){
                result[i][j] +=m1[i][k]*m2[k][j];
            }
        }
    }
    return result;
  },

  
  sumOfEachRow:function(mt){
    function sumOfArray(arr){
      let result = 0;
      for(let i = 0;i<arr.length;i++)
      {
          result += arr[i];
      }
      return result;
    }
    let resArr = [];
    for(let j = 0;j<mt.length;j++)
    {
        resArr.push(sumOfArray(mt[j]));
    }
    return resArr;
  }
}
