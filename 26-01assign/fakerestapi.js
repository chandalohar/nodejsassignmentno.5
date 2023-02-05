function loadData() {

fetch("https://dummyjson.com/users")
.then(res=>res.json()).then(result=>console.log(result)).
catch(e=>console.log("Error generated"+e));

}

loadData();




