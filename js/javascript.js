function FoodFetcher() {
    var x = Math.floor(Math.random() * 5) + 1;
    var title = document.getElementById("title");
    var logo = document.getElementById("logo");
    
    if (title.style.display === "none"){
        title.style.display = "block";
    }
    switch (x) {
        case 1: title.innerHTML = "Zaxbys"; break;
        case 2: title.innerHTML = "Wendys"; break;
        case 3: title.innerHTML = "Maccas"; break;
        case 4: title.innerHTML = "peeza"; break;
        case 5: title.innerHTML = "ee a home"; break;
    }
}