function get_extenstion() {
    let fname = prompt("Please Enter your FileName: ");
    let cond = fname.includes('.');
    if (cond) {
        let filearr = fname.split('.');
        alert("your file extenstion is (" + filearr[filearr.length - 1] + ")");
    } else {
        alert("This file doesn't have an extension.")
    }
}
/*****************************************/
function remove_char() {
    let entry = prompt("Please enter a new string: ");
    let char = prompt("please enter the character that you want to remove: ");
    if (entry != '' && char != '') {
        let newtext = entry.split(char).join('');
        alert("The new text is : (" + newtext + ")");
    }
}

/********************************************/
function reverse() {
    let entry = prompt("Please enter a new string: ");
    if (entry == '') {
        alert('Please enter a string');
    } else {
        let chararr = entry.split("");
        let reversearr = chararr.reverse().join("");
        alert("The reverse of " + entry + " is " + reversearr);
    }
}
/***************************************************/
function check() {
    let entry = prompt("Please enter a new string: ");
    let sub = entry.slice(0, 4);
    if (sub === "NTI-") {
        alert("This entry is accepted");
    } else {
        alert("This entry is not accepted");

    }

}
/********************************/
function check_largest() {
    let Num_1 = Number(prompt("Please enter the first number: "));
    let Num_2 = Number(prompt("Please enter the second number: "));
    let Num_3 = Number(prompt("Please enter the third number: "));
    let arr = new Array(Num_1, Num_2, Num_3);
    let num = 0;
    for (x in arr) {
        if (arr[x] > num) {
            num = arr[x];
        }
    }
    alert("The largest number is " + num);
}
/***********************************************/
function mail_validation() {
    let entry = prompt("Please enter a your mail: ");
    let cond = entry.includes('@');
    if (cond) {
        let arr = entry.split('@');
        if (arr.length == 2 && arr[1] != "" && arr[0].length >= 2) {
            let subarray = arr[1].includes('.');
            if (subarray) {
                let arr1 = arr[1].split('.');
                if (arr1.length == 2 && arr1[1].length >= 2 && arr1[0].length >= 2) {
                    alert("This mail is vaild.");
                } else {
                    alert("This mail is not valid");
                }
            } else {
                alert("This mail is not valid not including . sign");
            }

        } else {
            alert("This mail is not valid");
        }
    } else {
        alert("This mail is not valid not including @ sign");
    }

}