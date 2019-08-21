function printReceipt(ID) {
    if(ID==''){
        return '[ERROR]:输入异常';
    }
    ItemCount = getCountByBar(ID)
    ItemInfo = getPrinceAndNameByBar(ItemCount)
    if(ItemInfo=='error'){
        return '[ERROR]:商品不存在';
    }
    result = getReceipt(ItemInfo)
    return result;
}

function getCountByBar(ID) {
    var obj = {};
    var key, result = [];
    for (var i = 0; i < ID.length; i++) {
        key = ID[i];
        if (obj[key]) {
            obj[key]++;
        }
        else {
            obj[key] = 1;
        }
    }
    for (var i in obj) {
        result.push({ bar: i, count: obj[i] });
    }
    return result;
}

function getPrinceAndNameByBar(ItemCount) {
    data = [
        { "id": "0001", "name": "Coca Cola", "price": 3 },
        { "id": "0002", "name": "Diet Coke", "price": 4 },
        { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
        { "id": "0004", "name": "Mountain Dew", "price": 6 },
        { "id": "0005", "name": "Dr Pepper", "price": 7 },
        { "id": "0006", "name": "Sprite", "price": 8 },
        { "id": "0007", "name": "Diet Pepsi", "price": 9 },
        { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
        { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
        { "id": "0010", "name": "Fanta", "price": 12 }
    ];
    var result = [];
    for (var i = 0; i < data.length; i++) {
        for(var j=0;j<ItemCount.length;j++){
            if (data[i].id == ItemCount[j].bar) {
                result.push({bar:ItemCount[j].bar, price: data[i].price, name: data[i].name,count:ItemCount[j].count});
            }
        }
    }
    if(result.length == 0){
        return 'error';
    }
    return result;
}
function getReceipt(ItemInfo) {
    var result = '';
    var price=0;
    result += 'Receipts\r\n--------------------------\r\n';
    for(var i=0;i<ItemInfo.length;i++){
        result +=ItemInfo[i].name+'         '+ ItemInfo[i].price+'         ' +ItemInfo[i].count+'\r\n'; 
        price+=   ItemInfo[i].price *ItemInfo[i].count;
    }
    result += '--------------------------' + '\r\n' + 'Price:'+price;
    return result
}

module.exports = printReceipt;