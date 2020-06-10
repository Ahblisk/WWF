function FoodFetcher() {
    var x = Math.floor(Math.random() * 5) + 1;
    var title = document.getElementById("title");
    var logo = document.getElementById("logo");
    switch (x) {
        case 1: title.innerHTML = "Zaxbys"; logo.src="./imgs/zaxbys.jpeg"; if (title.style.display === "none"){title.style.display = "block";} else {title.style.display = "block";} if (logo.style.display === "none"){logo.style.display = "block";} else {logo.style.display = "block";} break;
        case 2: title.innerHTML = "Wendys"; logo.src="./imgs/wedneys.jpg"; if (title.style.display === "none"){title.style.display = "block";} else {title.style.display = "block";} if (logo.style.display === "none"){logo.style.display = "block";} else {logo.style.display = "block";} break;
        case 3: title.innerHTML = "Maccas"; logo.src="./imgs/maccas.png"; if (title.style.display === "none"){title.style.display = "block";} else {title.style.display = "block";} if (logo.style.display === "none"){logo.style.display = "block";} else {logo.style.display = "block";} break;
        case 4: title.innerHTML = "peeza";  logo.src="./imgs/peeza.jpg"; if (title.style.display === "none"){title.style.display = "block";} else {title.style.display = "block";} if (logo.style.display === "none"){logo.style.display = "block";} else {logo.style.display = "block";} break;
        case 5: title.innerHTML = "ee a home"; logo.src="./imgs/Stef1.png"; if (title.style.display === "none"){title.style.display = "block";} else {title.style.display = "block";} if (logo.style.display === "none"){logo.style.display = "block";} else {logo.style.display = "block";} break;
    }
}