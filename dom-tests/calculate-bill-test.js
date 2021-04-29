describe('Calculate bill factory function', function() {
    it('should update the bill total and sms total to "0.75", if 1 sms has been sent or passed to the parameter.', function() {
        let calculateBillWidget = calculateBill();

        calculateBillWidget.calculateAddCost('sms');

        assert.equal(0.75, calculateBillWidget.getBillTotal());
        assert.equal(0.75, calculateBillWidget.getBillSmsTotal());
        assert.equal(0.00, calculateBillWidget.getBillCallTotal());

    });

    it('should update the bill total and call total to "2.75", if 1 call has been made or passed to the parameter.', function() {
        let calculateBillWidget = calculateBill();

        calculateBillWidget.calculateAddCost('call');

        assert.equal(2.75, calculateBillWidget.getBillTotal());
        assert.equal(0.00, calculateBillWidget.getBillSmsTotal());
        assert.equal(2.75, calculateBillWidget.getBillCallTotal());

    });

    it('should update the bill total and call total to "11.00", if 4 calls have been made or passed to the parameter.', function() {
        let calculateBillWidget = calculateBill();

        calculateBillWidget.calculateAddCost('call, call,call, call');

        assert.equal(11.00, calculateBillWidget.getBillTotal());
        assert.equal(0.00, calculateBillWidget.getBillSmsTotal());
        assert.equal(11.00, calculateBillWidget.getBillCallTotal());

    });

    it('should update the bill total to "15.50", if 4 calls have been made & 6 SMSes have been sent or passed to the parameter.', function() {
        let calculateBillWidget = calculateBill();

        calculateBillWidget.calculateAddCost('call,sms ,sms, ,sms, call,call,sms, sms,sms, call');

        assert.equal(15.50, calculateBillWidget.getBillTotal());
        assert.equal(4.50, calculateBillWidget.getBillSmsTotal());
        assert.equal(11.00, calculateBillWidget.getBillCallTotal());

    });

    it('should update the bill total to "29.50", if 8 calls have been made & 10 SMSes have been sent or passed to the parameter.', function() {
        let calculateBillWidget = calculateBill();

        calculateBillWidget.calculateAddCost('call,sms ,sms, ,sms, call,call,sms, sms,sms, call, call,call, sms, sms, sms, call, call,sms');

        assert.equal(29.50, calculateBillWidget.getBillTotal());
        assert.equal(7.50, calculateBillWidget.getBillSmsTotal());
        assert.equal(22.00, calculateBillWidget.getBillCallTotal());

    });

    describe('Warning & critical level', function(){
        it('should return a class of "warning" if warning level has been reached.', function(){
            let calculateBillWidget = calculateBill();

            calculateBillWidget.calculateAddCost('call,sms ,sms, ,sms, call,call,sms, sms,sms, call, call,call, sms, sms, sms');
    
            assert.equal(23.25, calculateBillWidget.getBillTotal());
            assert.equal('warning', calculateBillWidget.totalCalClassName())
    
        });

        it('should return a class of "critical" if critical level has been reached.', function(){
            let calculateBillWidget = calculateBill();

            calculateBillWidget.calculateAddCost('call,sms ,sms, ,sms, call,call,sms, sms,sms, call, call,call, sms, sms, sms, call, call,call, sms,call,sms');
    
            assert.equal(35.75, calculateBillWidget.getBillTotal());
            assert.equal('critical', calculateBillWidget.totalCalClassName())
    
        });
    });
});