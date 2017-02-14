//定义队列数组
var queue = [];
//显示队列中的元素
function displayQueue() {
    var html = ""
    for (var index in queue) {
        html = html + "<buttton class='queue-ele'>" + queue[index] + "</button>";
    }
    document.getElementById("show-box").innerHTML = html;
}

//队列为空时提示
function isQueueEmpty() {
    if (queue.length==0){
        alert("队列为空");
        return true;
    }
    return false;
}
//输入为空及非数字时提示
function validateInput() {
    var inputNum = document.getElementsByClassName("queue-input")[0].value;
    if (inputNum == ""||inputNum==null) {
        alert("输入为空");
        return true;
    }
    if (/[^0-9/.\s]/g.test(inputNum)) {
        alert('请输入数字');
        return true;
    }
    return false;
}

//左侧增加:
function leftInQueue(num) {
    if (validateInput()) return;
    for (var i = queue.length;i>0; i--) {
        queue[i]=queue[i-1]
    }
    queue[0] = parseInt(num);
    rederQueue();
}
//右侧增加:
function rightInQueue(num) {
    if (validateInput()) return;
    queue[qunue.length] = parseInt(num);
    rederQueue();
}

//左侧移除:
function leftOutQueue() {
    if (isQueueEmpty()) return
    alert("从左侧移除的元素是" + queue[0]);
    for (var i = 0;i < queue.length - 1; i++) {
        queue[i]=queue [i+1]
    }
    queue.splice(queue.length - 1, 1);
    renderQueue();
}
//右侧移除: 
function rightOutQueue() {
    if (isQueueEmty()) return;
    alert("从右侧移除的元素是" + queue[queue.length - 1]);
    queue.splice(queue.length - 1, 1);
    renderQueue();
}

//点击任何一个按钮删除按钮数据
function removeAnyClick(index) {
    queue.splice(index, 1);
    renderQueue();
}
function init() {
    inputNum = document.getElementsByName('queue-input')[0].value;
    document.getElementById('left-in').onclick = function () {
        var inputNum = document.getElementsByName('queue-input')[0].value;
        leftInQueue(inputNum);
    }

    document.getElementById('right-in').onclick = function () {
        var inputNum = document.getElementsByName('queue-input')[0].value;
        rightInQueue(inputNum);
    }

    document.getElementById('left-out').onclick = leftOutQueue;
    /*/document.getElementById('left-out').onclick = function() {
        leftOutQueue();
    }
    */

    document.getElementById('right-out').onclick = rightOutQueue;

    //事件代理
    document.getElementById('show-box').addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "BUTTON") {
            var node = e.target;
            var delIndex = [].indexOf.call(node.parentNode.children, node);
            removeAnyClick(delIndex);
        }
    })

    renderQueue();
}

init();