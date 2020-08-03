module.exports.fizzbuzzLoop = (count) => {
  // 1. 0から、引数に与えられた数までをループする処理
  for(let i=0;i<count;i++){
    // 2. 数字をチェックして、数字に応じたテキスト出力する処理
    console.log(fizzbuzzString(i))
  }
}

module.exports.fizzbuzzString = (number) => {
  // もし、数字以外が来た場合は？
  // もし、負の数値が来た場合は？
  // もし、0が
  if(number % 15 == 0){
    return "fizzbuzz"
  }else if(number % 5 == 0){
    return "buzz"
  }else if(number % 3 == 0){
    return "fizz"
  }else{
    return `${number}`
  }
}