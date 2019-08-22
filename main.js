function printReceipt(items) {
    countItems = countItems(items);
    fillItems = fillItems(countItems);
    receipt = generateItems(fillItems);
    return receipt;
}

function countItems(items) {
    var products = [];
    for (let i = 0; i < items.length; i++) {
        let index = products.findIndex(element => element.id === items[i])
        if (index > -1) {
            let product = products[index]
            product.count = product.count + 1;
        }
        else {
            products.push({
                id: items[i],
                count: 1
            })
        }
    }
    return products;
}

function getItems() {
    var data =
        [
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
        ]
    return data;
}
function fillItems(countItems) {
    var data = getItems();
    var allItems = [];
    for (let i = 0; i < countItems.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (countItems[i].id == data[j].id) {
                allItems.push({ id: data[j].id, count: countItems[i].count, name: data[j].name, price: data[j].price })
            }
        }
    }
    return allItems;
}

function generateItems(allItems) {
    var result = '';
    var price = 0;
    result += 'Receipts\r\n--------------------------\r\n';
    for (var i = 0; i < allItems.length; i++) {
        result += allItems[i].name + '         ' + allItems[i].price + '         ' + allItems[i].count + '\r\n';
        price += allItems[i].price * allItems[i].count;
    }
    result += '--------------------------' + '\r\n' + 'Price:' + price;
    return result;
}

module.exports = printReceipt;