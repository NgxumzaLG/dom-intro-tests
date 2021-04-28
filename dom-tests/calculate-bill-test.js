describe('Calculate bill factory function', function() {
    it('should return a cost of "0.75" for sms total, if the value in the textbox is "sms" & 1 sms has been sent.', function() {
        let calculateBillWidget = calculateBill();

        calculateBillWidget.calculateAddCost('sms');

        assert.equal(2.75, calculateBillWidget.getBillTotal());
        assert.equal(0.75, calculateBillWidget.getBillSmsTotal());
        assert.equal(0.00, calculateBillWidget.getBillCallTotal());

    });
});