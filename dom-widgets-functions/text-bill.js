
function textBill() {
    var textCallCost = 0;
    var textSmsCost = 0;

    function textAddCost(billTypeEntered) {
        if (billTypeEntered === "call"){
            textCallCost += 2.75;

        } else if (billTypeEntered === "sms"){
            textSmsCost += 0.75;

        }
    }

    function getTextCallTotal() {
        return textCallCost;

    }

    function getTextSmsTotal() {
        return textSmsCost;

    }

    function textAddTotal() {
        return textCallCost + textSmsCost;

    }

    function totalTextClassName(){
        if (textAddTotal() >= 50){
            return 'critical';

        } else if (textAddTotal() >= 30){
            return 'warning';

        }
    }

    return {
        textAddCost,
        getTextCallTotal,
        getTextSmsTotal,
        textAddTotal,
        totalTextClassName

    }

}