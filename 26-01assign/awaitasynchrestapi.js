// fetch("http://api.weatherapi.com/v1/current.json?key=27bd79f026c2468787992447230502 &q=London&aqi=yes")
async function loadData() {

    try{
    var res = await fetch("http://api.weatherapi.com/v1/current.json?key=27bd79f026c2468787992447230502 &q=London&aqi=yes")
    var result = await res.json();
    console.log(result)
    }catch(ex){
        console.log(ex)
    }
    
    }
        
loadData();