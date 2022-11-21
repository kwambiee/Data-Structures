/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles){
    let count = 0;
    let max = Math.max(...candles);
    for(let i=0; i<candles.length; i++){
        if(candles[i] === max){
            count+=1;
        }
    }
}