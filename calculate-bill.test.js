describe('Calculate bill with Factory function', function(){
    it('should update the bill total to "2.75", if 1 call has been made or passed to the parameter', function(){
        let calculateBill = calculateBills();
        
        calculateBill.setTotal("call");
        assert.equal(2.75,calculateBill.getTotalCost());
    });

    // it('should be able to calculate total call bill from a string of "call, call" ', function(){
    //     let calculateBill = calculateBills();
        
    //     calculateBill.setTotal("call,call");
    //     assert.equal(5.5,calculateBill.getTotalCallCost());
    // });

    // it('should be able to calculate total call bill from a string of "sms, sms" ', function(){
    //     let calculateBill = calculateBills();
        
    //     calculateBill.setTotal("sms,sms");
    //     assert.equal(1.5,calculateBill.getTotalSmsCost());
    // });

    // describe('warning & critical valvues', function(){
    //     it("it should return a class of 'critical' if critical level is been reached", function(){
    //         let calculateBill = calculateBills();
            
    //         calculateBill.setTotal("call,call,call,sms, call,call,call,sms,sms,call");
    //         assert.equal('warning',calculateBill.totalClassName());
    //     });
    //     it("it should return a class of 'critical' if warning level is been reached", function(){
    //         let calculateBill = calculateBills();
            
    //         calculateBill.setTotal("call,call,call,sms, call,call,call,sms,sms,call,call,call,call,sms,sms");
    //         assert.equal('critical',calculateBill.totalClassName());
    //     });
    // });

});