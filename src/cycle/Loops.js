function getCountAndSum(){
    let count = 0;
    let sum = 0;
        for( let i = 1; i < 100 ; i++){
            let x = i % 2;
                if (x === 0){
                    count += 1;
                    sum = sum + i;
                }
        }

    return `Количество четных чисел от 1 до 99 равно: ${count}, а их сумма равна: ${sum}.`;
}

//2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function checkNumber(numb){
    let answer;
    if ((!numb)){
        answer = "Данные не были введены либо был введен ноль";

        return answer;
    } 
    if(typeof numb !== "number"){
        answer = "Данные не соответствуют условию задачи";

        return answer;
    }

    for (let i = 2; i < numb; i++){

        if (numb % i === 0 ){

             return "число является составным";
        }
    }

    return "число является простым";
}

//3. Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function findSqrt(numb){
    
    let answer;
    if ((!numb)){
        answer = "Данные не были введены либо был введен ноль";

        return answer;
    } 
    if(typeof numb !== "number"){
        answer = "Данные не соответствуют условию задачи";
        
        return answer;
    }
    /*for(let i = 1; i <= numb / 2; i ++){  //округление к ближнему
        if(i * i === numb){
            return i;
        }else if (i * i > numb){
          let half = ((i * i) + ((i - 1) * (i - 1))) / 2;
        }
        
        if (numb > half){
          return i;
        }else{
            return i - 1;
        }
    }*/
    for(let i = 1; i <= numb / 2; i ++){ // округление до целого
        if (i * i > numb){
          return i - 1;

        }else if(i * i === numb){

            return i;
        }
    }
}

//4.
function calcFactorial(num) {

    let answer;
    if ((!num)&& num!==0){
        answer = "Данные не были введены";

        return answer;
    } 
    if(typeof num !== "number"){
        answer = "Данные не соответствуют условию задачи";
        
        return answer;
    }
    
    let result = 1;
    
    if(num >= 0){
        
        for(let i = 1; i <= num; i++) {
            result *=i ;
        }
    }else{
            answer = "Введите положительное число";

            return answer;
    }

    return result;
}


//5.
function calcSumGivNum(num) {
    
    if(!num && num !== 0) {

        return "не указан аргумент";
    } 
    if(typeof num!=="number") {

        return "аргумен не являеться числом";       
    }
    let result = 0;
    while(num > 0) {
        result = result + (num % 10);
        num = Math.floor(num/10);
    }

    return result;
}

//6.
function reversNum(num) {
    if(!num && num !== 0) {

        return "не указан аргумент";
    } 
    if(typeof num!=="number") {
        
        return "аргумен не являеться числом";       
    }
    let result = 0;
    while(num > 0) {
        result *= 10;
        result += (num % 10);
        num = Math.floor(num/10);
    }
    return result;
}

module.exports = {
    getCountAndSum,
    checkNumber,
    findSqrt,
    calcFactorial,
    calcSumGivNum,
    reversNum,
};