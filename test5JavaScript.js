function getHeaderElement() {
    // Get header element by its id.    
    var header = $("myHeader");
    if (header === null && typeof header === undefined) {
        console.log("header element exists!");
    }
    console.log("header element does not exist!");
    return header;
}
getHeaderElement();
