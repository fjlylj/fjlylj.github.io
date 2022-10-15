;
mui.init({
	pullRefresh: {
		container: '.mui-scroll-wrapper',
		down: {
			style:'circle',
			callback: function () {
				setTimeout(function() {
					window.location.reload()
					mui('.mui-scroll-wrapper').pullRefresh().endPulldownToRefresh(); //refresh completed
				}, 1500);
			}
		}
	}
});
mui('body').on('tap','a',function(){
    window.top.location.href=this.href;
});





function filterUrl(newData) {
	let url = window.location.href;
	//console.log(newData);
	if(!newData || newData == '' || newData == undefined){
		return  url;
	}
	let hostName = url;
	let paramsObj = '';
	if(url.indexOf("?") >= 1){
		let urlArr = url.split('?')
		hostName = urlArr[0];
		 paramsObj = urlToArr(urlArr[1]);
		if(paramsObj){
			$.extend(paramsObj,newData)
		}
	}else{
		paramsObj = newData;
	}
	let args = jQuery.param(filterData(paramsObj));
	if(args){
		return  hostName+"?"+args;
	}
	return hostName;
}

function filterData(data)
{
	let newData = {};
	if(data){
		Object.keys(data).map((key) => {
			if(data[key]||data[key] === 0) {
				newData[key] = data[key];
			}
			return key;
		});
	}
	return newData;
}

function urlToArr(uri) {

	uri = decodeURIComponent(uri);
	//拼接数组
	let arrUrl = uri.split('&');
	const urlObj = {};
	const len = arrUrl.length;
	for (let i=0; i<len; i++){
		if(arrUrl[i].indexOf('=')>=1){
			var params = arrUrl[i].split('=');
			if(params[0]!=''&&params[1]!=''){
				urlObj[params[0]] = params[1];
			}
		}
	}

	return $.isEmptyObject(urlObj)?false:urlObj;
}

function handleUrl(pageNum) {
	return filterUrl({"page_num":pageNum})
}

function uploadImg(options) {
	const imgTpl = (imgSrc)=>{
		return `<div class="upload-box">
                     <img src="${imgSrc}"/>
                </div>`
	}
	const load =  layer.open({type: 2});
	let {fileDom,formData,callback,imgField} = options;
	const uploadUrl = $(fileDom).data('url');
	//获取文件
	const file = fileDom.files[0];
	const imageType = /^image\//;
	//是否是图片
	if(!imageType.test(file.type)) {
		zw.close(load);
		mui.alert("请选择图片！");
		return false;
	}
	let quality = 1;
	if(file.size>2212473){
		quality = 0.6;
	}

	console.log(file);

	lrz(file,{quality:quality}).then(function (rst) {
		const imgHtml = imgTpl(e.target.result);
		$(fileDom).parents('.upload-box').before(imgHtml);
			formData.append(imgField,rst.file) ;
			$.ajax({
				url:uploadUrl,
				data:formData,
				method:"post",
				async: false,
				contentType : false,
				processData: false,
			}).done(function (response) {
				if(response.status==1){
					callback(response);
				}else{
					mui.alert(response.msg);
				}
			}).error(function () {
				mui.alert("图片上传失败！");
			}).always(()=>zw.close(load));
		}).catch(function (err) {
			console.log(err);
			mui.alert("文件读取失败请重试！");
		});
}

function uploadMoreImg(options) {
	const imgTpl = (imgSrc)=>{
		return `<img src="${imgSrc}"/>`
	}
	const load =  layer.open({type: 2});
	let {fileDom,formData,callback,imgField} = options;
	//判断是否支持FileReader
	if(!window.FileReader) {
		zw.close(load);
		mui.alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
		return false;
	}
	const reader = new FileReader();
	const uploadUrl = $(fileDom).data('url');
	//获取文件
	const file = fileDom.files[0];
	const imageType = /^image\//;
	//是否是图片
	if(!imageType.test(file.type)) {
		zw.close(load);
		mui.alert("请选择图片！");
		return false;
	}
	//读取完成
	reader.onload = function(e) {
		//获取图片dom
		const imgHtml = imgTpl(e.target.result);
		$(fileDom).prev('.previewBox').html(imgHtml);
		formData.append(imgField,file) ;
		$.ajax({
			url:uploadUrl,
			data:formData,
			method:"post",
			async: false,
			contentType : false,
			processData: false,
		}).done(function (response) {
			if(response.status==1){
				callback(response);
			}else{
				mui.toast(response.msg);
			}
		}).error(function () {
			mui.alert("图片上传失败！");
		}).always(()=>zw.close(load));
	};
	reader.readAsDataURL(file);
}

function dateStr(date){
	//获取js 时间戳
	let time=new Date().getTime();
	//去掉 js 时间戳后三位，与php 时间戳保持一致
	time=parseInt((time-date*1000)/1000);

	//存储转换值
	let s;
	if(time<60*10){//十分钟内
		return '刚刚';
	}else if((time<60*60)&&(time>=60*10)){
		//超过十分钟少于1小时
		s = Math.floor(time/60);
		return  s+"分钟前";
	}else if((time<60*60*24)&&(time>=60*60)){
		//超过1小时少于24小时
		s = Math.floor(time/60/60);
		return  s+"小时前";
	}else if((time<60*60*24*3)&&(time>=60*60*24)){
		//超过1天少于3天内
		s = Math.floor(time/60/60/24);
		return s+"天前";
	}else{
		//超过3天
		let date= new Date(parseInt(date) * 1000);
		return date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
	}
}

function confirmOrder(obj) {
	const url = $(obj).data('url');
	$.ajax({
		type: 'get',
		url: url,
		dataType: 'json',
	}).done(function (response) {
		if(response.status){
			mui.toast('确认收货成功！');
			window.location = response.url;
		}else{
			mui.toast(response.msg);
		}
	}).fail(function () {
		mui.toast('网络异常,请检查连接');
	});
}

function evaluateOrder(obj) {
	const url = $(obj).data('url');
	window.location = url;
}