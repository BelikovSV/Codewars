function persistence(num) {
  let count = 0;
  while(num.toString().length > 1){
    num = num.toString().split('').reduce((acc,el)=>acc *= +el,1)
    count++
  }
  return count
}