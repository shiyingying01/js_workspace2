const printReceipt = require('../main');

it('should return receipt when call printReceipt given ["0001","0001","0002"]', () => {
    expect(printReceipt(["0001","0001","0002"]))
        .toBe("Receipts\r\n--------------------------\r\nCoca Cola         3         2\r\nDiet Coke         4         1\r\n--------------------------\r\nPrice:10");});

