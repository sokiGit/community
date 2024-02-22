import Main from "../../global/Main/Main";
import { useState } from "react";

const valid_cats = [
    [0, 3], // 100  // 100 - 103
    [       // 200
        [0, 8],     // 200 - 208
        26          // 226
    ],
    [0, 8], // 300  // 300 - 308
    [       // 400
        [0, 18],    // 400 - 418
        [20, 29],   // 429
        31,         // 431
        44,         // 444
        50,         // 450
        51,         // 451
        [97, 99]    // 497
    ],
    [       // 500
        [0, 11],    // 500 - 511
        [21, 23],   // 521 - 523
        25,         // 525
        30,         // 530
        99          // 599
    ]
]

function selectRandomFromArr(arr, index:number) {
    const i = Math.round(Math.random()*arr[index].length-1)
    console.log(arr);
    console.log(arr[index]);
    console.log(i)
    console.log(arr.length)
    console.log("yeah this thing's gonna spit out nonsense numbers sometimes sorry haha")
    if (typeof(arr[index][i]) != "number") {
        console.log(arr[index][i])
        if (arr[index][i] == undefined) arr[index][i] = [0,0]
        return Math.round(Math.random()*(arr[index][i][1]-arr[index][i][0]))+arr[index][i][0]   
    } else {
        return arr[index][i]
    }
}

export default function SuperSecretRoute() {
    const [cat_start, set_cat_start] = useState(Math.round(Math.random()*4));
    console.log(cat_start)
    const [cat_end, set_cat_end] = useState(selectRandomFromArr(valid_cats, cat_start));
    console.log(cat_end)
    return (
        <Main>
            {
                "Cat "+((cat_start+1)*100+cat_end)
            }
            <img id="CAAAAAT" src={"https://http.cat/"+((cat_start+1)*100+cat_end)} alt="cat"/>
            <button onClick={() => {
                set_cat_start(Math.round(Math.random()*4));
                set_cat_end(selectRandomFromArr(valid_cats, cat_start));
            }}>
                Recat
            </button>
        </Main>
    );
}