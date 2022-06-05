const moives = [
    {
        id: 1,
        name:"Dr.Strange",
        sname:"drstrange",
        desc:" Dr Stephen Strange casts a forbidden spell that opens a portal to the multiverse. However, a threat emerges that may be too big for his team to handle.",
        poster:"./images/strange.jpg",
        trailer:"window.open('https://youtu.be/aWzlQ2N6qqg');",
        category:"marvel",
    },
    {
        id: 2,
        name:"Spider-Man: No Way Home",
        sname:"spiderman",
        desc:"PeterParker seek DoctorStrange help to people forget Spiderman identity.but when spell he casts get corrupted,several unwanted guests enter universe.",
        poster:"./images/spidy.jpg",
        trailer:"window.open('https://youtu.be/JfVOs4VSpmA');",
        category:"marvel",
    },
    {
        id: 3,
        name:"Shang-Chi",
        sname:"shangchi",
        desc:"Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.",
        poster:"./images/shang-chi.jpg",
        trailer:"window.open('https://youtu.be/giWIr7U1deA');",
        category:"marvel",
    },
    {
        id: 4,
        name:"Eternals",
        sname:"eternals",
        desc:"The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants.",
        poster:"./images/eternals.jpg",
        trailer:"window.open('https://youtu.be/x_me3xsvDgk');",
        category:"marvel",
    },
    {
        id:5,
        name:"The Batman",
        sname:"thebatman",
        desc:"Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.",
        poster:"./images/batman.jpg",
        trailer:"window.open('https://youtu.be/mqqft2x_Aa4');",
        category:"dc",
    },
    {
        id:6,
        name:"Thor: Love and Thunder",
        sname:"thorloveandthunder",
        desc:"Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods.",
        poster:"./images/thor.jpg",
        trailer:"window.open('https://youtu.be/Go8nTmfrQd8');",
        category:"marvel",
    },
    {
        id:7,
        name:"Loki",
        sname:"loki",
        desc:"Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of Avengers: Endgame.",
        poster:"./images/loki.webp",
        trailer:"window.open('https://youtu.be/nW948Va-l10');",
        category:"marvel",
    },
    {
        id:8,
        name:"Moon Knight",
        sname:"moonknight",
        desc:"Steven Grant and mercenary Marc Spector investigate the mysteries of the Egyptian gods from inside the same body.",
        poster:"./images/moonk.webp",
        trailer:"window.open('https://youtu.be/x7Krla_UxRg');",
        category:"marvel",
    },
    {
        id:9,
        name:"Stranger Things",
        sname:"strangerthings",
        desc:"In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
        poster:"./images/strangerthings.jpg",
        trailer:"window.open('https://youtu.be/mVsJXiI60a0');",
        category:"tvshow",
    },
    {
        id:10,
        name:"Joker",
        sname:"joker",
        desc:"Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
        poster:"./images/joker.jpg",
        trailer:"window.open('https://youtu.be/zAGVQLHvwOY');",
        category:"dc",
    },
    {
        id:11,
        name:"Justice League",
        sname:"justice league",
        desc:"Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.",
        poster:"./images/JS.jpg",
        trailer:"window.open('https://youtu.be/3cxixDgHUYw');",
        category:"dc",
    },
    {
        id:12,
        name:"K.G.F: Chapter 2",
        sname:"kgf2",
        desc:"The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
        poster:"./images/kgf2.jpg",
        trailer:"window.open('https://youtu.be/bDTUFufX-1s');",
        category:"india",
        category:"telugu",
    },
    {
        id:13,
        name:"K.G.F: Chapter 1",
        sname:"kgf1",
        desc:"The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
        poster:"./images/kgf1.jpg",
        trailer:"window.open('https://youtu.be/fnGW4iQzVLw');",
        category:"india",
        category:"telugu",
    },
    {
        id:14,
        name:"Iron Man",
        sname:"ironman",
        desc:"When Tony Stark, an industrialist, is captured, he constructs a high-tech armoured suit to escape. Once he manages to escape, he decides to use his suit to fight against evil forces to save the world.",
        poster:"./images/ironman1.jpg",
        trailer:"window.open('https://youtu.be/8ugaeA-nMTc');",
        category:"marvel",
    },
    {
        id:15,
        name:"Iron Man 2",
        sname:"ironman2",
        desc:"Tony Stark is under pressure from various sources, including the government, to share his technology with the world. He must find a way to fight them while also tackling his other enemies.",
        poster:"./images/ironman2.jpg",
        trailer:"window.open('https://youtu.be/wKtcmiifycU');",
        category:"marvel",
    },
    {
        id:16,
        name:"Iron Man 3",
        sname:"ironman3",
        desc:"Tony Stark encounters a formidable foe called the Mandarin. After failing to defeat his enemy, Tony embarks on a journey of self-discovery as he fights against the powerful Mandarin.",
        poster:"./images/ironman3.jpg",
        trailer:"window.open('https://youtu.be/Ke1Y3P9D0Bc');",
        category:"marvel",
    },

]
const flexbox = document.querySelector(".flexbox")

window.addEventListener("DOMContentLoaded", function(){
        DisplayMoives(moives)
})

function DisplayMoives(MoivesItems){
    var DisplayMoive = MoivesItems.map(function(item){
        return `<div class="flex-item">
        <img src=${item.poster} class="flex-img" alt="" srcset="">
        <h3 class="flex-heading">${item.name}</h3>
        <p>
        ${item.desc}
        </p>
        <button type="button" onclick=${item.trailer} target="_blank" class="btn">Wacth Trailer</button>
    </div>`;
    });
    DisplayMoive = DisplayMoive.join("")
    // console.log(DisplayMoive);

    flexbox.innerHTML = DisplayMoive;
}


function SearchMoive(Mname){
    let filterMoive = moives.filter(function(Moive,i){
        return Moive.sname.toUpperCase().includes(Mname.toUpperCase());

    })
    DisplayMoives(filterMoive); 
}





function SearchMoives(Sname){
    let filterMoives = moives.filter(function(Moive,i){
        return Moive.category.toUpperCase().includes(Sname.toUpperCase());
    })
    DisplayMoives(filterMoives); 
}

