function calculateBills(){
    var billTotal = 0;   
   
    function setTotal(smsCallBill){
        var billString = smsCallBill.split(',');      
        for(var i = 0; i < billString.length; i++){
            var billItem = billString[i].trim();
            if (billItem === 'call'){
                billTotal += 2.75;
            }
            else if (billItem === 'sms'){
                billTotal += 0.75;
            }
        }
    }
    function getTotalCallCost(){
        return billTotal;
    }

    function getTotalSmsCost(){
        return billTotal;
    }
    function getTotalCost(){
        return billTotal;
    }
    
    function totalClassName(){
        if (getTotalCost() >= 30){
            return 'critical';
        }
        else if (getTotalCost() >= 20){
            return 'warning';
        }
    }
    return {               
        setTotal,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        totalClassName
    }
}