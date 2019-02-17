class Histogram {
    constructor(array) {
        this.users_data = array;
    }
    isIdenticalFive() {
        let count = 0;
        let first = this.users_data[0];
        for (let i = 0; i < this.users_data - 1; i++) {
            
            if (first!= this.users_data[i ]) {
                count++
            }
            if (count > 5 ) {
                return false;
            }
        }
        return true;
    }
    separateOnGroups() {
        let array = [];
        let data = this.users_data.sort(function (a, b) {
            return a - b;
        });
        let count = 0;
        if (this.isIdenticalFive()) {
            let arr = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i] == data[i + 1]) {
                    count++;

                }
                else if (data[i + 1] == undefined) {
                    count++;
                    arr.push(data[i]);
                    arr.push(count);
                    array.push(arr);
                }
                else {
                    arr.push(data[i]);
                    arr.push(count);
                    array.push(arr);
                    arr = [];
                    count = 1;
                }
                
            }
           
        }
        else {
            let step = (data[data.length - 1] - data[0])/20;
            let maxNow = data[0] + step;
            let arr = [];
            let count = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i] < maxNow) {
                    count++;
                }
                else {

                    arr.push(maxNow - step / 2);
                    arr.push(count)
                    maxNow += step;
                    array.push(arr);
                    arr = [];
                    count = 0;
                }
            }
           
        }
        return array;
    }
}