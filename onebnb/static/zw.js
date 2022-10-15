const zw = (function (layer) {
    const load =(text)=>{
        if(!text){
            return layer.open({type: 2});
        }else{
            return layer.open({type: 2,content:text});
        }

    };

    const msg = (msg)=>{
        return layer.open({
            content: msg,
            time: 3
            ,skin: 'footer'
        });
    }

    const alert = (msg,options)=>{
        if(options&&options.callback){
            options.callback();
        }
        return layer.open({
            content: msg
            ,btn: '我知道了'
        });
    }

    const confirm = (title,btn,callback)=>{
        return layer.open({
            content: title
            ,btn: btn||['删除', '取消']
            // ,skin: 'footer'
            ,yes: function(index){
                callback();
                layer.close(index);
            }
        });
    }

    const close = (index)=>{
        layer.close(index)
    }

    return {load,msg,alert,confirm,close}
})(layer);