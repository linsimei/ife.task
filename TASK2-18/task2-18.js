//�����������
var queue = [];
//��ʾ�����е�Ԫ��
function displayQueue() {
    var html = ""
    for (var index in queue) {
        html = html + "<buttton class='queue-ele'>" + queue[index] + "</button>";
    }
    document.getElementById("show-box").innerHTML = html;
}

//����Ϊ��ʱ��ʾ
function isQueueEmpty() {
    if (queue.length==0){
        alert("����Ϊ��");
        return true;
    }
    return false;
}
//����Ϊ�ռ�������ʱ��ʾ
function validateInput() {
    var inputNum = document.getElementsByClassName("queue-input")[0].value;
    if (inputNum == ""||inputNum==null) {
        alert("����Ϊ��");
        return true;
    }
    if (/[^0-9/.\s]/g.test(inputNum)) {
        alert('����������');
        return true;
    }
    return false;
}

//�������:
function leftInQueue(num) {
    if (validateInput()) return;
    for (var i = queue.length;i>0; i--) {
        queue[i]=queue[i-1]
    }
    queue[0] = parseInt(num);
    rederQueue();
}
//�Ҳ�����:
function rightInQueue(num) {
    if (validateInput()) return;
    queue[qunue.length] = parseInt(num);
    rederQueue();
}

//����Ƴ�:
function leftOutQueue() {
    if (isQueueEmpty()) return
    alert("������Ƴ���Ԫ����" + queue[0]);
    for (var i = 0;i < queue.length - 1; i++) {
        queue[i]=queue [i+1]
    }
    queue.splice(queue.length - 1, 1);
    renderQueue();
}
//�Ҳ��Ƴ�: 
function rightOutQueue() {
    if (isQueueEmty()) return;
    alert("���Ҳ��Ƴ���Ԫ����" + queue[queue.length - 1]);
    queue.splice(queue.length - 1, 1);
    renderQueue();
}

//����κ�һ����ťɾ����ť����
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

    //�¼�����
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