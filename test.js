        var from=document.getElementById("from");
        var to=document.getElementById("to");
        var amount=document.getElementById("amount");
        var convert=document.getElementById("convert");
        var result=document.getElementById("result");
        var res;
        var data;
        function working(){
           var fromcurrency=from.value;
           var tocurrency=to.value;
           var amt=amount.value;
           fetch(`https://open.er-api.com/v6/latest/${fromcurrency}`)
           .then(res=>{return res.json();})
           .then(data=>{
            var rate=data.rates[tocurrency];
            var total=rate*amt;
            result.innerHTML="The converted amount is: "+total;
           })
           
        }
