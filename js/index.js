var iconChange = document.getElementById('icon');
var arr = ['images/1.png', 'images/2.png'];
var tag = 1;

// 用户切换
iconChange.addEventListener('click', function() {
    if (tag == 0) {
        this.src = arr[tag];
        tag = 1;
    } else {
        this.src = arr[tag];
        tag = 0;
    }
});

var btn = document.getElementById('btn');
var text = document.getElementById('text');
var content = document.querySelector('.content');
var textVal;

// 控制消息发送按钮
btn.disabled = true;
text.addEventListener('keyup', function(event) {
    textVal = text.value;
    if (textVal == '') {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }

    // 消息回车按钮
    if (event.keyCode == '13' && textVal !== '') {
        if (tag == 0) {
            content.innerHTML += "<li><img src='" + arr[1] + "' alt='' class='imgRight'><span class='spanRight'>" + textVal + "</span></li>";
        } else {
            content.innerHTML += "<li><img src='" + arr[0] + "' alt='' class='imgLeft'><span class='spanLeft'>" + textVal + "</span></li>";
        }
        text.value = '';
        btn.disabled = true;
        content.scrollTop = content.scrollHeight - content.style.height;
    }
});

// 消息发送按钮
btn.addEventListener('click', function() {
    textVal = text.value;
    if (tag == 0) {
        content.innerHTML += "<li><img src='" + arr[1] + "' alt='' class='imgRight'><span class='spanRight'>" + textVal + "</span></li>";
    } else {
        content.innerHTML += "<li><img src='" + arr[0] + "' alt='' class='imgLeft'><span class='spanLeft'>" + textVal + "</span></li>";
    }
    text.value = '';
    btn.disabled = true;
    text.focus();
    content.scrollTop = content.scrollHeight - content.style.height;
});

// 右上角时间
var header = document.querySelector('.header');
var spanTime = header.children[header.children.length - 1];
nowTime();
setInterval(nowTime, 15000);

function nowTime() {
    var h = new Date().getHours() < 10 ? '0' + new Date().getHours() : new Date().getHours();
    var m = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
    spanTime.innerHTML = h + ':' + m;
}

// 返回顶部
header.addEventListener('click', function() {
    content.scrollTop = 0;
});