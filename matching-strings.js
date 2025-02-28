// Complete the 'matchingStrings' function below.
//  *
//  * The function is expected to return an INTEGER_ARRAY.
//  * The function accepts following parameters:
//  *  1. STRING_ARRAY stringList
//  *  2. STRING_ARRAY queries

function matchingStrings(stringList, queries) {
  // Write your code here
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < stringList.length; j++) {
      if (queries[i] == stringList[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
}
