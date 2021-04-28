
describe('Text bill factory function', function() {
    it('should return a cost of "0.75" for sms total, if the value in the textbox is "sms" & 1 sms has been sent.', function() {
        let textBillWidget = textBill();

        textBillWidget.textAddCost('sms');

        assert.equal(0.75, textBillWidget.textAddTotal());
        assert.equal(0.75, textBillWidget.getTextSmsTotal());
        assert.equal(0.00, textBillWidget.getTextCallTotal());

    });

    it('should return a cost of "2.75" for call total, if the value in the textbox is "call" & 1 call has been made.', function() {
        let textBillWidget = textBill();

        textBillWidget.textAddCost('call');

        assert.equal(2.75, textBillWidget.textAddTotal());
        assert.equal(0.00, textBillWidget.getTextSmsTotal());
        assert.equal(2.75, textBillWidget.getTextCallTotal());

    });

    it('should update call total to "11.00", if the value in the textbox is "call" & 4 calls have been made.', function() {
        let textBillWidget = textBill();

        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('call');

        assert.equal(11.00, textBillWidget.textAddTotal());
        assert.equal(0.00, textBillWidget.getTextSmsTotal());
        assert.equal(11.00, textBillWidget.getTextCallTotal());

    });

    it('should update sms total to "4.50", if the value in the textbox is "sms" & 6 SMSes have been sent.', function() {
        let textBillWidget = textBill();

        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');

        assert.equal(4.50, textBillWidget.textAddTotal());
        assert.equal(4.50, textBillWidget.getTextSmsTotal());
        assert.equal(0.00, textBillWidget.getTextCallTotal());

    });

    it('should update the global total to "15.50", if 6 SMSes and the 5 calls have been made.', function() {
        let textBillWidget = textBill();

        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('call');

        assert.equal(18.25, textBillWidget.textAddTotal());
        assert.equal(4.50, textBillWidget.getTextSmsTotal());
        assert.equal(13.75, textBillWidget.getTextCallTotal());

    });

    it('should update the global total to "29.50", if 10 SMSes and the 8 calls have been made.', function() {
        let textBillWidget = textBill();

        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('call');
        textBillWidget.textAddCost('sms');
        textBillWidget.textAddCost('sms');

        assert.equal(29.50, textBillWidget.textAddTotal());
        assert.equal(7.50, textBillWidget.getTextSmsTotal());
        assert.equal(22.00, textBillWidget.getTextCallTotal());

    });
});