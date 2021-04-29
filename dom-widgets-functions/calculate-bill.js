
function calculateBill() {
    var billSmsTotal = 0;
    var billCallTotal = 0;
    var i = 0;

    function calculateAddCost(sentBill){
        var billItems = sentBill.split(',');  
        for (i; i<billItems.length;i++){
            var billItem = billItems[i].trim();

            if (billItem === "call"){
                billCallTotal += 2.75;

            }
            else if (billItem === "sms"){
                billSmsTotal += 0.75;

            }
        }
    }

    function getBillCallTotal() {
        return billCallTotal;

    }

    function getBillSmsTotal() {
        return billSmsTotal;

    }
     function getBillTotal() {
         return billCallTotal + billSmsTotal;
         
     }

     function totalCalClassName(){
        if (getBillTotal() >= 30){
            return 'critical';

        } else if (getBillTotal() >= 20){
            return 'warning';

        }
    }

    return {
        calculateAddCost,
        getBillCallTotal,
        getBillSmsTotal,
        getBillTotal,
        totalCalClassName
    }
}