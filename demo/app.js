let arr = ["aaa","bbb","ccc"];
const login = (params,callback) => {
    if (arr.includes(params.name)) {
        callback({code:1});
    }else {
        function create(code) {
            callback({code:0,data:code});
        }
        create('注册成功');
    }
}
const signup = (req,res) => {
    let params = req;
    login(params,(r) => {
        if (r.code == 1) {
            console.log({
                code : 1,
                data : '账号已存在'
            })
        }else if (r.code == 0) {
            console.log({
                code : 0,
                data : r.data
            })
        }

    })
}
let params = {name:"ddd",age:21};
let res = {};
let a = "one", b = "two";
[a, b] = [b, a];
console.log(a,b);
