const noneDataTpl = (tips)=>{
    if(!tips){
        tips = "暂无数据";
    }
    return `
        <div class="text-white d-flex flex-column align-items-center justify-content-center" style="min-height: 50vh;">
        <span class="yih yih-empty mb-4" style="font-size:3rem;color: #f8f9fa85;"></span>
        <div style="font-size: 1rem;">${tips}</div>
        </div>
    `
}

const noticeTpl = (notice)=>{
    let {title, created_at, content} = notice;
    created_at = dateStr(created_at);
    return `<div class="mui-card">
                <div class="mui-card-header" style="font-size: 14px;">
                    <span>${title}</span>
                    <span>${created_at}</span>
                </div>
                <div class="mui-card-content textOVerThree">${content}</div>
                <div class="mui-card-footer">详情</div>
        </div>`;
};

const teamTpl = (user) => {
    let {user_phone,user_number,real_name,createdTime, deep,levelText,total_invest} = user;
    real_name = real_name||'未实名';
    user_phone = user_phone||'未绑定';
    return `<li class="flex  bg-lightblue">
                <img src="/assets/user/wap/theme1/images/${deep}dai.png" alt="">
                <div class="mui-fensi-xx  d-flex flex-column text-white">
                    <p>ID:${user_number} </p>
                    <p>${createdTime}</p>
                </div>
                <div class="mui-fensi-xx ml-2 d-flex flex-column text-white ml-auto">
                    <p>业绩:${parseFloat(total_invest)} </p>
                    <p>级别:${levelText}</p>
                </div>
            </li>`;
};

const invTpl = (inv) =>{
    return ` <li class="bg-lightblue text-white flex justify-content-between align-items-center">
                <div class="text-white" style="width: 80px;">
                    <span class="rounded-circle text-center d-block bg-darkblue"
                          style="width: 50px;height: 50px;line-height: 50px;font-size: 1.3rem;"
                    >${inv.statusText}</span>
                </div>
                <div class="flex-grow-1">
                    <div>兑换额:${inv.total_num}</div>
                    <div>已分红:${inv.has_num}</div>
                    <div>预计:${inv.max_num}</div>
                </div>
                <div>${inv.createdTime}</div>
    </li>`;
}

const tfTpl = (item)=>{
    let showUser = '';
    if(item.showUser){
        showUser = `<div>${item.showUser.user_number}</div>`
    }

    let ccyTpl = '';
    if(item.ccyText){
        ccyTpl = `<div>币种 :${item.ccyText}</div>`;
    }

    let feeTpl = '';
    if(item.service_fee>0){
        feeTpl = `<div>费用:${item.service_fee}</div>`;
    }
    let factTpl = '';
    if(item.getMoney){
        factTpl = `<div>实得:${item.getMoney}</div>`;
    }
    return ` <li class="bg-lightblue text-white flex justify-content-between align-items-center">
                <div class="text-white" style="width: 80px;">
                    <span class="rounded-circle text-center d-block bg-darkblue"
                          style="width: 50px;height: 50px;line-height: 50px;font-size: 0.8rem;"
                    >${item.statusText}</span>
                </div>
                <div class="flex-grow-1">
                    <div>数量:${item.money}</div>
                    ${feeTpl}
                    ${factTpl}
                    ${ccyTpl}
                </div>
                <div>
                    <div>${item.createdTime}</div>
                    ${showUser}
                </div>
    </li>`;
}

const flowTpl = (item)=>{
    let moneyText = '';
    if(item.inout == 1){
        moneyText = `<div class="text-gold mui-text-right">+${item.money}</div>`;
    }else{
        moneyText = `<div class="text-white mui-text-right">-${item.money}</div>`;
    }
    return ` <li class="flex">
                <p class="flex-shrink-0">${item.date}</p>
                <div class="mui-ellipsis">
                    <div class="text-white">${item.changeText}</div>
                    <p>${item.time}</p>
                </div>
               ${moneyText}
            </li>`;
}


const friendTpl = (item)=>{
    let moneyText = `<div class="d-flex justify-content-between  py-1">`;
     moneyText += `<a href="https://tronscan.io/#/address/${item.user_number}" style="display: inline-block;width:45vw;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;">
         ${item.user_number}</a><div>${item.bi}</div></div>
       `;
    return moneyText;
}
const fTpl = (item)=>{
    let moneyText = `<div class="d-flex justify-content-between  py-1">`;
    moneyText += `<div style="width:25vw; word-wrap:break-word">${item['time']}</div>
   <div style="width:28vw;">${item['money']}</div>`;

    if(item.status == 0){
        str = "提现";
    }else{
        str = "查看";
    }

    moneyText+=`<div class="tx" style="color: #00FF00" data-acc="${JSON.stringify(item)}">${str}</div>`
    return moneyText;
}

const messageTpl = (item)=>{
    let replyText = '';
    if(item.is_reply == 1){
        replyText = `<span class="badge badge-success"> 已回复 </span>`;
    }else{
        replyText = `<span class="badge badge-danger"> 未回复 </span>`;
    }

    let replyBtn = '';
    if(item.isNeedReply){
        replyBtn =  ` <a href="${item.replyUrl}">回复</a>`;
    }

    let msgImg = '';
    if(item.msgImg){
        msgImg = '<div class="d-flex mt-2">'
        for (let i=0; i<item.msgImg; i++){
            msgImg += `<img class="flex-shrink-0 mr-2" style="width: 80px;height: 80px;" src="${item.msgImg[i]}" />`
        }
        msgImg += '</div>';
    }
    return `<div class="mui-card bg-lightblue">
                    <div class="mui-card-header text-white" style="font-size: 16px;">
                        <span>${item.title}${replyText}</span>
                        <span>${item.createdAt}</span>
                    </div>
                    <div class="mui-card-content message d-flex flex-column text-white ">
                        <div>${item.content}</div>
                        ${msgImg}
                    </div>
                    <div class="mui-card-footer">
                        <a href="${item.detailUrl}">详情</a>${replyBtn}
                    </div>
               </div>`;
}

const hallSellTpl = (item) => {
    let headPic = "/assets/user/wap/theme1/images/wo.png";
    if(item.user.head_pic){
        headPic = item.user.head_pic;
    }
    return `<li class="d-flex  bg-lightblue align-items-center">
                <div><img class="rounded-circle" src="${headPic}" alt=""/></div>
                <div class="mui-fensi-xx flex-grow-1  d-flex flex-column text-white">
                    <p>数量:${item.num} </p>
                    <p>价格:${item.price}</p>
                </div>
                <div style="width: 35px;">
                    <button style="font-size: 12px;" class="buy-btn mui-btns m-0 w-100" data-sell='${JSON.stringify(item)}'>购买</button>
                  </div>
            </li>`;
}

const tradeOrderTpl = (item)=>{
    let statusColorClass = 'badge-danger';
    if(item.status == 1){
        statusColorClass = `badge-success`;
    }else if(item.status == 0){
        statusColorClass = `badge-warning`;
    }
    let statusTpl = `<span class="ml-1 badge ${statusColorClass}"> ${item.statusText} </span>`;

    let buyText = "卖";
    if(item.isBuy){
        buyText = "买";
    }

    let replyBtn = '';
    if(item.isOpt==1){
        replyBtn =  ` <a href="${item.url}">确认付款</a>`;
    }else if(item.isOpt==2){
        replyBtn =  ` <a href="${item.url}">确认收款</a>`;
    }


    return `<div class="mui-card bg-lightblue mb-2">
                    <div class="mui-card-header text-white" style="font-size: 16px;">
                        <span>${item.trade_sn}${statusTpl}</span>
                        <span>${item.createdTime}</span>
                    </div>
                    <div class="mui-card-content message d-flex text-white align-items-center">
                        <div class="mr-2">
                            <span style="width: 45px;height: 45px;line-height: 45px; text-align: center;" class="rounded-circle d-block bg-darkblue">${buyText}</span>
                        </div>
                        <div class="d-flex flex-column">
                            <span class="mb-1">数量:${item.num}UT</span>
                            <span>总价:${item.totalPrice}CNY</span>
                        </div>
              
                    </div>
                    <div class="mui-card-footer">
                        <a href="${item.url}">详情</a>${replyBtn}
                    </div>
               </div>`;
}

const sellTpl = (item)=>{
    let statusColorClass = 'badge-danger';
    if(item.status == 1){
        statusColorClass = `badge-success`;
    }else if(item.status == 0){
        statusColorClass = `badge-warning`;
    }
    let statusTpl = `<span class="ml-1 badge ${statusColorClass}"> ${item.statusText} </span>`;


    let replyBtn = '';
    if(item.cancelBtn){
        replyBtn =  `<a class="cancel-btn" href="javascript:;" data-action="${item.cancelBtn}">取消出售</a>`;
    }

    let detailBtn = '';
    if(item.tradeBtn){
        detailBtn =  `<a href="${item.tradeBtn}">查看交易单</a>`;
    }

    // <div class="mr-2">
    //     <span style="width: 45px;height: 45px;line-height: 45px; text-align: center;" class="rounded-circle d-block bg-darkblue">${buyText}</span>
    // </div>
    return `<div class="mui-card bg-lightblue mb-2">
                    <div class="mui-card-header text-white" style="font-size: 16px;">
                        <span>${item.sell_sn}${statusTpl}</span>
                        <span>${item.createdTime}</span>
                    </div>
                    <div class="mui-card-content message d-flex text-white align-items-center">
                   
                        <div class="d-flex flex-column">
                            <span class="mb-1">数量:${item.num}UT</span>
                            <span>总价:${item.totalPrice}CNY</span>
                        </div>
              
                    </div>
                    <div class="mui-card-footer">
                        ${replyBtn}${detailBtn}
                    </div>
               </div>`;
}

const wdTpl = (item)=>{
    let statusColorClass = 'mui-text-blue';
    if(item.status == 1){
        statusColorClass = `mui-text-green`;
    }else if(item.status == 0){
        statusColorClass = `mui-text-red`;
    }
    let statusTpl = `<span class="mui-pull-right ${statusColorClass}"> ${item.statusText} </span>`;

    let handleTpl = '';
    if(item.status !=0 ){
        handleTpl =  ` <div class="mui-text-left text-white"><span>处理时间：${item.handledTime}</span></div>`;
    }

    let numTpl = `<div class="text-gold">退回: ${parseFloat(item.total_num)}UT</div>`;
    if(item.status ==1){
        numTpl = `<div class="text-gold">到账: ${parseFloat(item.num)}USDT</div>`;
    }else if(item.status ==0){
        numTpl = `<div class="text-gold">预计到账: ${parseFloat(item.num)}USDT</div>`;
    }


    return ` <li class="bg-lightblue">
                <div class="dingdan-list-header text-white">申请时间：${item.createdTime}${statusTpl}</div>
                <div class="flex">
                    <div class="flex-right" style="width: 100%;">
                        <div>
                            ${numTpl}
                            <div class="d-flex mt-2 justify-content-between text-white">
                                <span>提取数量: ${parseFloat(item.total_num)}UT</span>
                                <span>手续费: ${parseFloat(item.fee)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                ${handleTpl}
            </li>`;
}

const rgTpl = (item)=>{
    let statusColorClass = 'mui-text-blue';
    if(item.status == 1){
        statusColorClass = `mui-text-green`;
    }else if(item.status == 0){
        statusColorClass = `mui-text-red`;
    }
    let statusTpl = `<span class="mui-pull-right ${statusColorClass}"> ${item.statusText} </span>`;

    let handleTpl = '';
    if(item.status !=0 ){
        handleTpl =  ` <div class="mui-text-left"><span>处理时间：${handledTime}</span></div>`;
    }


    return ` <li class="bg-lightblue">
                <div class="dingdan-list-header text-white">充币时间：${item.createdTime}${statusTpl}</div>
                <div class="flex">
                    <div class="flex-right" style="width: 100%;">
                        <div>
                            <div class="text-gold">充币数量: ${parseFloat(item.num)}USDT</div>                    
                        </div>
                    </div>
                </div>
                ${handleTpl}
            </li>`;
}

const loanTpl = (item)=>{
    let statusColorClass = 'mui-text-blue';
    if(item.status == 1){
        statusColorClass = `mui-text-green`;
    }else if(item.status == -1){
        statusColorClass = `mui-text-red`;
    }
    let statusTpl = `<span class="mui-pull-right ${statusColorClass}"> ${item.statusText} </span>`;

    let handleTpl = '';
    if(item.status !=0 ){
        handleTpl =  ` <div class="mui-text-left text-white"><span>处理时间：${item.handledTime}</span></div>`;
    }


    return ` <li class="bg-lightblue">
                <div class="dingdan-list-header text-white">申请时间：${item.createdTime}${statusTpl}</div>
                <div class="flex">
                    <div class="flex-right" style="width: 100%;">
                        <div>
                        
                            <div class="d-flex mt-2 justify-content-between text-white">
                                <span>申请数量: ${parseFloat(item.money)}U</span>
                                <span>日利率: ${parseFloat(item.rates)}%</span>
                                <span>周期: ${parseFloat(item.day)}天</span>
                            </div>
                        </div>
                    </div>
                </div>
                ${handleTpl}
            </li>`;
}

const stockTpl = (item,mt)=>{
    let content = ''
    if (mt==1){
        content = `<div class="w-20">${item.zgDate}</div><div class="w-20">${item.ssDate}</div><div class="w-20">${item.price}</div>`;
    }else {
        content = `<div class="w-30">${item.localNum}</div><div class="w-30">${item.total_num}</div>`;
    }
    return `
    <a href="${item.url}" class="d-flex text-white align-items-center justify-content-between py-2 mt-2 border-bottom zw-border-color">
                        <div class="d-flex justify-content-start w-40">
                            <div class="d-flex rounded align-items-center justify-content-center mr-2"
                                 style="height: 40px;width:40px;background: dodgerblue;"
                            >HK</div>
                            <div class="d-flex flex-column">
                                <span>${item.name}</span>
                                <span>${item.code}</span>
                            </div>
                        </div>
                        ${content}
    </a>
    `
}