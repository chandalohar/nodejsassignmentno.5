function loadData() {
    
    fetch("http://api.weatherapi.com/v1/current.json?key=27bd79f026c2468787992447230502 &q=London&aqi=yes")
    .then(res=>res.json()).then(result=>console.log(result)).
    catch(e=>console.log("Error generated"+e));
    
    }
    
    loadData();
    
    
    
    
    
