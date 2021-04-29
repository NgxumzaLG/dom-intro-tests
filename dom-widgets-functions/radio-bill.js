
function radioBill() {
    var radioCallCost = 0;
    var radioSmsCost = 0;
    
    function radioAddCost(checkedRadio) {
        if (checkedRadio === "call") {
            radioCallCost += 2.75;

        } else if (checkedRadio === "sms") {
            radioSmsCost += 0.75;

        }
    }

    function getRadioCallTotal() {
        return radioCallCost;

    }

    function getRadioSmsTotal() {
        return radioSmsCost;

    }

    function radioAddTotal() {
        return radioSmsCost + radioCallCost;

    }

    function totalRadioClassName(){
        if (radioAddTotal() >= 50){
            return 'critical';

        } else if (radioAddTotal() >= 30){
            return 'warning';

        }
    }

    return {
        getRadioCallTotal,
        getRadioSmsTotal,
        radioAddCost,
        radioAddTotal,
        totalRadioClassName

    }

}
