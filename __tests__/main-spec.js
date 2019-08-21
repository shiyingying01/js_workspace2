const printReceipt = require('../main');

it('should return receipt when call printReceipt given ["0001","0002","0001"]', () => {
    expect(printReceipt(["0001","0002","0002"]))
        .toBe("Receipts\r\n--------------------------\r\nCoca Cola         3         2\r\nDiet Coke         4         1\r\n--------------------------\r\nPrice:10");});

it('should return "[ERROR]:输入异常" when call printReceipt given ""', () => {
    expect(printReceipt([]))
        .toBe('[ERROR]:输入异常');
});
it('should return "[ERROR]:商品不存在" when call printReceipt given ["0021"]', () => {
    expect(printReceipt(["0111"]))
        .toBe("[ERROR]:商品不存在");
});
