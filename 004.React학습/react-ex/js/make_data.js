// 데이터 유형에 맞게 만들기

// [vans 신발 데이터 생성]
// let category = ["men","woman","kids"]
// let gname = ["반스캐쥬얼","반스어얼리","반스뉴진스","반스토끼",]
// let gprice = ["55000","45000","75000","85000","95000",];

// [여성의류 데이터 생성]
let category = ["modern","casual"];
let gname = ["워닝드레스","워스비버든","코코샤스넬라","포코로와드"];
let gprice = ["123000","224000","253000","340000","520000"];


// 호출시 : rdm[아이템개수]
let rdm = (x)=> Math.floor(Math.random()*x)

let bb = '';

for(let x=1;x<=19;x++){
bb += `
    {
        "idx":${x},
        "gname":"${gname[rdm(4)]}",
        "category":"${category[rdm(2)]}",
        "gprice":"${gprice[rdm(5)]}"
    },
`;
}

console.log(bb)