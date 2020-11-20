const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function searchMinElement(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    let minElement = collection[0];
    for(let i = 0; i < collection.length; i++) {
        if(minElement > collection[i]) {
            minElement = collection[i];
        }
    }
    return minElement;
}
console.log(searchMinElement(collection));

function saerchMaxElement(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    let maxElement = collection[0];
    for(let i = 0; i < collection.length; i++) {
        if(maxElement < collection[i]) {
            maxElement = collection[i];
        }
    }
    return maxElement;
}
console.log(saerchMaxElement(collection));

function searchMinIndex(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    let minElement = collection[0];
    let minIndex = 0;
    for(let i = 0; i < collection.length; i++) {
        if(minElement > collection[i]) {
            minElement = collection[i];
            minIndex = i;
        }
    }
    return minIndex;
}
console.log(searchMinIndex(collection));

function searchMaxIndex(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    let maxElement = collection[0];
    let maxIndex = 0;
    for(let i = 0; i < collection.length; i++) {
        if(maxElement < collection[i]) {
            maxElement = collection[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}
console.log(searchMaxIndex(collection));

function sumOddElement(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    
    let sumElement = 0;
    for(let i = 0; i < collection.length; i++) {
        if(collection[i] % 2 >0) {
            sumElement += collection[i];
        }
    }
    return sumElement;
}
console.log(sumOddElement(collection));

function reversArray(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    let reverscollection = "";
    for(let i = collection.length - 1; i >= 0; i--) {
        reverscollection += (collection[i] + " "); 
    }
    return reverscollection;
}
console.log(reversArray(collection));

function sumOddIndex(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    let sumElement = 0;
    for(let i = 0; i < collection.length; i++) {
        if(i % 2 > 0) {
            sumElement += collection[i];
        }
    }
    return sumElement;
}
console.log(sumOddIndex(collection));

function reversHalf(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    let half = "";
    const halfcollection = Math.ceil(collection.length / 2);
    if(collection.length % 2 === 0) {
        for(let i = 0; i < collection.length; i++) {
           if(i < collection.length / 2) {
               half += collection[i + halfcollection] + " ";
           } else {
                half += collection[i - halfcollection] + " ";
           }
        }
    } else {
        for(let i = 0; i < collection.length; i++) {
            if(i < halfcollection - 1) {
                half += collection[i + halfcollection] + " ";
            } else if(i > halfcollection - 1) {
                half += collection[i - halfcollection] + " ";
            } else {
                half += collection[i] + " ";
            }
        }
    }
    return half;
}
console.log(reversHalf(collection));

function sortBubble(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    let temp = 0;
    for(let i = 0; i < collection.length; i++) {
        for(let j = i + 1; j < collection.length; j++) {
            if(collection[i] > collection[j]) {
                temp = collection[i];
                collection[i] = collection[j];
                collection[j] = temp;
            }
        }
    }
    return collection;
}
console.log(sortBubble(collection));

function sortSelect(collection) {
    if(!Array.isArray(collection)) {
        return "аргумент не являеться массивом";
    }
    for (let i = 0, l = collection.length, k = l - 1; i < k; i++) {
        let indexMin = i;
        for (let j = i + 1; j < l; j++) {
            if (collection[indexMin] > collection[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [collection[i], collection[indexMin]] = [collection[indexMin], collection[i]];
        }
    }
    return collection;
}
console.log(sortSelect(collection));

module.exports = {
    searchMinElement,
    saerchMaxElement,
    searchMinIndex,
    searchMaxIndex,
    sumOddElement,
    reversArray,
    sumOddIndex,
    reversHalf,
    sortBubble, 
    sortSelect
}