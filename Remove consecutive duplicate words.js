const removeConsecutiveDuplicates = s => {
  return s.split(' ').filter((w,i)=> w !== s.split(' ')[i+1]).join(' ')
}
