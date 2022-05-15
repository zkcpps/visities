/** 1. 创建连接 **/
var xhr = null;
xhr = new XMLHttpRequest()
/** 2. 连接服务器 **/
xhr.open('get', url, true)
/** 3. 发送请求 **/
xhr.send(null);
/** 4. 接受请求 **/
xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
		if(xhr.status == 200){
			success(xhr.responseText);
		} else { 
			/** false **/
			fail && fail(xhr.status);
		}
	}
}

var xhr = new XMLHttpRequest();
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.open('get', url, true);
xhr.send(null);  //Post请求的话有传输data

xhr.onreadystatechange = function(){
    if(xhr.readystate === 4) {
        if(xhr.status === 200) {
            success(xhr.responseText);
        } else {
            fail && fail(xhr.status);
        }
    }
}