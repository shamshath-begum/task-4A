let request = new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.onload = ()=> {
    console.log(request.status);
    console.log(request.statusText);
    let result=JSON.parse(request.response);
    for (let n of result)
    console.log(n.flags.png);
}
request.onerror = (er)=> {
    console.log(er);
    console.log(request.statusText);
    console.log(request.response);
}
request.send();