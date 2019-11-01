let a = 0;


async function c1(event) {
    event.preventDefault();
    a = document.getElementById("ans1").value;
    a = Number(a);
    postData({ id: 1, data: a }).then((ansjson) => {
        ansjson.json().then((ans) => {
            console.log(ans);
            if (ans.result == true) {
                document.getElementById("res1").innerHTML = " Accepted! Mail us your solution at sol@gmail.com";
                document.getElementById("res1").style.backgroundColor = "#6fd96f";
            } else {
                document.getElementById("res1").innerHTML = " Wrong Answer";
                document.getElementById("res1").style.backgroundColor = "#f06b67";
            }
        })

    });

}

function c2(event) {
    event.preventDefault();
    a = document.getElementById("ans2").value;
    a = Number(a);
    postData({ id: 2, data: a }).then((ansjson) => {
        ansjson.json().then((ans) => {
            console.log(ans);
            if (ans.result) {
                document.getElementById("res2").innerHTML = " Accepted! Mail us your solution at sol@gmail.com";
                document.getElementById("res2").style.backgroundColor = "#6fd96f";
            } else {
                document.getElementById("res2").innerHTML = " Wrong Answer";
                document.getElementById("res2").style.backgroundColor = "#f06b67";
            }
        })

    });
}

function c3(event) {
    event.preventDefault();
    a = document.getElementById("ans3").value;
    a = Number(a);
    postData({ id: 3, data: a }).then((ansjson) => {
        ansjson.json().then((ans) => {
            console.log(ans);
            if (ans.result) {
                document.getElementById("res3").innerHTML = " Accepted! Mail us your solution at sol@gmail.com";
                document.getElementById("res3").style.backgroundColor = "#6fd96f";
            } else {
                document.getElementById("res3").innerHTML = " Wrong Answer";
                document.getElementById("res3").style.backgroundColor = "#f06b67";
            }
        })

    });
}

function c4(event) {
    event.preventDefault();
    a = document.getElementById("ans4").value;
    a = Number(a);
    postData({ id: 4, data: a }).then((ansjson) => {
        ansjson.json().then((ans) => {
            console.log(ans);
            if (ans.result) {
                document.getElementById("res4").innerHTML = " Accepted! Mail us your solution at sol@gmail.com";
                document.getElementById("res4").style.backgroundColor = "#6fd96f";
            } else {
                document.getElementById("res4").innerHTML = " Wrong Answer";
                document.getElementById("res4").style.backgroundColor = "#f06b67";
            }
        })

    });
}

function c5(event) {
    event.preventDefault();
    a = document.getElementById("ans5").value;
    a = Number(a);
    postData({ id: 5, data: a }).then((ansjson) => {
        ansjson.json().then((ans) => {
            console.log(ans);
            if (ans.result) {
                document.getElementById("res5").innerHTML = " Accepted! Mail us your solution at sol@gmail.com";
                document.getElementById("res5").style.backgroundColor = "#6fd96f";
            } else {
                document.getElementById("res5").innerHTML = " Wrong Answer";
                document.getElementById("res5").style.backgroundColor = "#f06b67";
            }
        })

    });
}

// console.log(a1);

async function postData(obj) {
    let ansjson = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    });
    return ansjson;
}