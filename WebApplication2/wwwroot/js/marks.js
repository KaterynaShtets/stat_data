var canvas = document.getElementById('canvas3');
var c3 = canvas.getContext('2d'); 
let data = dataAll.users_data;
function f() {
    if (c3 != undefined) {
        c3.clearRect(0, 0, canvas.width, canvas.height);
    }
    var a = document.getElementById('s1').value;
    var arr = getResultArr(a);
    let histogram = new Histogram(arr);
    drawHistogram(histogram);
}
function getResultArr(filter) {
    let arr = [];
    switch (filter) {
        case "KT1":
            for (let j = 0; j < data.length; j++) {
                for (let i = 0; i < data[j].Marks.length; i++) {
                    arr.push(data[j].Marks[i].Cp1)
                }
            }
            break;
        case "KT2":
            for (let j = 0; j < data.length; j++) {
                for (let i = 0; i < data[j].Marks.length; i++) {
                    arr.push(data[j].Marks[i].Cp2)
                }
            }
            break;
        case "Lab":
            for (let j = 0; j < data.length; j++) {
                for (let i = 0; i < data[j].Marks.length; i++) {
                    arr.push(data[j].Marks[i].Lab)
                }
            }
            break;
        case "ZNO":
            for (let j = 0; j < data.length; j++) {
                for (let i = 0; i < data[j].Marks.length; i++) {
                    arr.push(data[j].Marks[i].Col1)
                }
            }
            break;
        case "Math":
            for (let j = 0; j < data.length; j++) {
                for (let i = 0; i < data[j].Marks.length; i++) {
                    arr.push(data[j].Marks[i].Col2)
                }
            }
            break;
    }
    return arr;
}
function drawHistogram(histogram) {
    let array = histogram.separateOnGroups();
    let k = 5;
    c3.fillStyle = "blue";
    for (var i = 0; i < array.length; i++) {
        c3.fillRect(k, 300 - array[i][1] * 2, 7, array[i][1] * 2);
        k +=8;
    }
}