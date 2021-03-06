avl = require("./avl");

asserts = function(funcs){
    funcs.forEach(function(func,i){
        i = i + 1;
        if(func()){
            console.log("pass",i);
        }else{
            console.log("fail",i);
            console.log(func.toString());
        }
    });
}

var tree = avl.create([1,8,6,2,3,5,7,9]);

// 1
// =>
//   1(1)
//     8(0)
// =>
//
//   1(2)
//     8(1)
//   6(0)
//
// => RL
//    6
// 1     8
// =>
//    6
//  1   8
//    2
// =>
//         6
//    1        8
//      2
//        3
// => LL
//
//         6
//    2        8
//  1   3
//
// =>
//         6
//    2        8
//  1   3
//        5
//
// => LR
//
//         6                      3
//      3     8                2     6
//    2   5                 1      5    8
//  1
//
// =>
//
//        3
//    2       6
//  1       5   8
//             7
//
// => RR
//
//        3                      3(3)
//    2       6               2(1)  6(2)
//  1       5   8          1(0)   5(1)  8(1)
//             7  9                   7(0) 9(0)
//

function toList(tree){
    var list = [];
    tree.inOrder(function(node){
        list.push(node.value);
    });
    var result = list.join(",");
    return result;
}


asserts([function(){
    return toList(tree) == "1,2,3,5,6,7,8,9";
}])