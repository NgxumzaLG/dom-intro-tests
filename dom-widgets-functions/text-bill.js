
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

    return {
        textAddCost,
        getTextCallTotal,
        getTextSmsTotal,
        textAddTotal

    }

}