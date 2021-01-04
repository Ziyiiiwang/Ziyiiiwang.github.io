function namecheck() {
    var x = document.forms["myForm"]["fname"].value;
    var y = x.substr(0,1);
    if(!(('a'<=y && y<='z')||('A'<=y && y<='Z'))){
        alert("用户名只能用字母开头")
        x.value = "";
    }
    if(!(6<=x.length && x.length<=10)){
        alert("用户名长度需在6到10位之间")
        x.value = "";
    }
}

function check(){
    with(document.all){
        if(input1.value!=input2.value || (input1.value=="" && input2.value=="")){
            alert("两个密码必须相同且不能为空")
            input1.value = "";
            input2.value = "";
        }
        else document.forms[0].submit();
    }
}

function validateForm(){
    var x=document.forms["myForm"]["email"].value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        alert("不是一个有效的 e-mail 地址");
        return false;
    }
}

function telecheck() {
    var t = document.forms["myForm"]["telephone"].value;
    if(t.length != 11){
        alert("手机号码应为11位")
        t.value = "";
    }
}

function reset(){
    document.getElementById("myForm").reset();
}

function insRow(){
    var a=document.getElementById('myTable').insertRow(-1)
    var b=a.insertCell(0)
    var c=a.insertCell(1)
    var d=a.insertCell(2)
    var e=a.insertCell(3)
    b.innerHTML="新行1"
    c.innerHTML="新行2"
    d.innerHTML="新行3"
    e.innerHTML='<a href="#" class="remove" onclick="deleteTr(this)">删除</a>'
}

function deleteTr(obj) {
    //通过this找到父级元素节点
    var tr = obj.parentNode.parentNode;
    //找到表格
    var tbody = tr.parentNode;
    //删除行
    tbody.removeChild(tr);
}