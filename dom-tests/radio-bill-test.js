
describe('Radio bill factory function', function() {
    it('should return a cost of "0.75" for sms total, if the value for radio button checked is "sms" & 1 sms has been sent.', function() {
        let radioBillWidget = radioBill();

        radioBillWidget.radioAddCost('sms');

        assert.equal(0.75, radioBillWidget.radioAddTotal());
        assert.equal(0.75, radioBillWidget.getRadioSmsTotal());
        assert.equal(0.00, radioBillWidget.getRadioCallTotal());


    });

    it('should return a cost of "2.75" for call total, if the value for radio button checked is "call" & 1 call has been made.', function() {
        let radioBillWidget = radioBill();

        radioBillWidget.radioAddCost('call');

        assert.equal(2.75, radioBillWidget.radioAddTotal());
        assert.equal(0.00, radioBillWidget.getRadioSmsTotal());
        assert.equal(2.75, radioBillWidget.getRadioCallTotal());


    });

    it('should update call total to "13.75", if the value for radio button checked is "call" & 5 calls have been made.', function() {
        let radioBillWidget = radioBill();

        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');

        assert.equal(13.75, radioBillWidget.radioAddTotal());
        assert.equal(0.00, radioBillWidget.getRadioSmsTotal());
        assert.equal(13.75, radioBillWidget.getRadioCallTotal());

    });

    it('should update sms total to "5.25", if the value for radio button checked is "sms" & 7 SMSes have been made.', function() {
        let radioBillWidget = radioBill();

        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');

        assert.equal(5.25, radioBillWidget.radioAddTotal());
        assert.equal(5.25, radioBillWidget.getRadioSmsTotal());
        assert.equal(0.00, radioBillWidget.getRadioCallTotal());

    });

    it('should update the global total to "14.75", if 5 SMSes and the 4 calls have been made.', function() {
        let radioBillWidget = radioBill();

        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('call');

        assert.equal(14.75, radioBillWidget.radioAddTotal());
        assert.equal(3.75, radioBillWidget.getRadioSmsTotal());
        assert.equal(11.00, radioBillWidget.getRadioCallTotal());

    });


    it('should update the global total to "33.50", if 8 SMSes and the 10 calls have been made.', function() {
        let radioBillWidget = radioBill();

        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('sms');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');
        radioBillWidget.radioAddCost('call');

        assert.equal(33.50, radioBillWidget.radioAddTotal());
        assert.equal(6.00, radioBillWidget.getRadioSmsTotal());
        assert.equal(27.50, radioBillWidget.getRadioCallTotal());

    });

    describe('Warning & critical level', function(){
        it('should return a class of "warning" if warning level has been reached.', function(){
            let radioBillWidget = radioBill();

            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
    
            assert.equal(33.50, radioBillWidget.radioAddTotal());
            assert.equal('warning', radioBillWidget.totalRadioClassName())
    
        });

        it('should return a class of "critical" if critical level has been reached.', function(){
            let radioBillWidget = radioBill();

            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('sms');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
            radioBillWidget.radioAddCost('call');
    
            assert.equal(53.75, radioBillWidget.radioAddTotal());
            assert.equal('critical', radioBillWidget.totalRadioClassName())
    
        });
    });

});