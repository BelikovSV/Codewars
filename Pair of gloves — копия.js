function numberOfPairs(gloves){

  var glovesObj = gloves.reduce((acc, el)=> {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {})

  let r = 0;

  for(color in glovesObj){
    r+=Math.floor(glovesObj[color] / 2)
  }

  return r
}
