!function(a,b){"use strict";var d,e,i,j,k,l,m,c=a.layui&&layui.define,f={getPath:function(){var b=document.currentScript&&"SCRIPT"===document.currentScript.tagName.toUpperCase()?document.currentScript.src:function(){var c,d,a=document.getElementsByTagName("script"),b=a.length-1;for(d=b;d>0;d--)if("interactive"===a[d].readyState){c=a[d].src;break}return c||a[b].src}(),c=a.LAYUI_GLOBAL||{};return c.layer_dir||b.substring(0,b.lastIndexOf("/")+1)}(),config:{removeFocus:!0},end:{},beforeEnd:{},events:{resize:{}},minStackIndex:0,minStackArr:[],btn:["确定","取消"],type:["dialog","page","iframe","loading","tips"],getStyle:function(b,c){var d=b.currentStyle?b.currentStyle:a.getComputedStyle(b,null);return d[d.getPropertyValue?"getPropertyValue":"getAttribute"](c)},link:function(b,c,d){var e,h,i,j,k,l;g.path&&(e=document.getElementsByTagName("head")[0],h=document.createElement("link"),"string"==typeof c&&(d=c),i=(d||b).replace(/\.|\//g,""),j="layuicss-"+i,k="creating",l=0,h.rel="stylesheet",h.href=g.path+b,h.id=j,document.getElementById(j)||e.appendChild(h),"function"==typeof c&&!function m(b){var d=100,e=document.getElementById(j);return++l>1e4/d?a.console&&console.error(i+".css: Invalid"):(1989===parseInt(f.getStyle(e,"width"))?(b===k&&e.removeAttribute("lay-status"),e.getAttribute("lay-status")===k?setTimeout(m,d):c()):(e.setAttribute("lay-status",k),setTimeout(function(){m(k)},d)),void 0)}())}},g={v:"2.10.2",ie:function(){var b=navigator.userAgent.toLowerCase();return a.ActiveXObject||"ActiveXObject"in a?(b.match(/msie\s(\d+)/)||[])[1]||"11":!1}(),index:a.layer&&a.layer.v?1e5:0,path:f.getPath,config:function(a){return a=a||{},g.cache=f.config=d.extend({},f.config,a),g.path=f.config.path||g.path,"string"==typeof a.extend&&(a.extend=[a.extend]),f.config.path&&g.ready(),a.extend?(c?layui.addcss("modules/layer/"+a.extend):f.link("css/"+a.extend),this):this},ready:function(a){var b="layer",d="",e=(c?"modules/":"css/")+"layer.css?v="+g.v+d;return c?layui["layui.all"]?"function"==typeof a&&a():layui.addcss(e,a,b):f.link(e,a,b),this},alert:function(a,b,c){var e="function"==typeof b;return e&&(c=b),g.open(d.extend({content:a,yes:c},e?{}:b))},confirm:function(a,b,c,e){var h="function"==typeof b;return h&&(e=c,c=b),g.open(d.extend({content:a,btn:f.btn,yes:c,btn2:e},h?{}:b))},msg:function(a,c,e){var h="function"==typeof c,j=f.config.skin,k=(j?j+" "+j+"-msg":"")||"layui-layer-msg",l=i.anim.length-1;return h&&(e=c),g.open(d.extend({content:a,time:3e3,shade:!1,skin:k,title:!1,closeBtn:!1,btn:!1,resize:!1,end:e,removeFocus:!1},h&&!f.config.skin?{skin:k+" layui-layer-hui",anim:l}:function(){return c=c||{},(-1===c.icon||c.icon===b&&!f.config.skin)&&(c.skin=k+" "+(c.skin||"layui-layer-hui")),c}()))},load:function(a,b){return g.open(d.extend({type:3,icon:a||0,resize:!1,shade:.01,removeFocus:!1},b))},tips:function(a,b,c){return g.open(d.extend({type:4,content:[a,b],closeBtn:!1,time:3e3,shade:!1,resize:!1,fixed:!1,maxWidth:260,removeFocus:!1},c))}},h=function(a){var b=this,c=function(){b.creat()};b.index=++g.index,b.config.maxWidth=d(e).width()-30,b.config=d.extend({},b.config,f.config,a),document.body?c():setTimeout(function(){c()},30)};h.pt=h.prototype,i=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"],i.anim={0:"layer-anim-00",1:"layer-anim-01",2:"layer-anim-02",3:"layer-anim-03",4:"layer-anim-04",5:"layer-anim-05",6:"layer-anim-06",slideDown:"layer-anim-slide-down",slideLeft:"layer-anim-slide-left",slideUp:"layer-anim-slide-up",slideRight:"layer-anim-slide-right"},i.SHADE="layui-layer-shade",i.MOVE="layui-layer-move",j="LAYUI-LAYER-SHADE-KEY",k="LAYUI_LAYER_CONTENT_RECORD_HEIGHT",h.pt.config={type:0,shade:.3,fixed:!0,move:i[1],title:"信息",offset:"auto",area:"auto",closeBtn:1,icon:-1,time:0,zIndex:19891014,maxWidth:360,anim:0,isOutAnim:!0,minStack:!0,moveType:1,resize:!0,scrollbar:!0,tips:2},h.pt.vessel=function(a,b){var c=this,e=c.index,g=c.config,h=g.zIndex+e,j="object"==typeof g.title,k=g.maxmin&&(1===g.type||2===g.type),l=g.title?'<div class="layui-layer-title" style="'+(j?g.title[1]:"")+'">'+(j?g.title[0]:g.title)+"</div>":"";return g.zIndex=h,b([g.shade?'<div class="'+i.SHADE+'" id="'+i.SHADE+e+'" times="'+e+'" style="'+"z-index:"+(h-1)+"; "+'"></div>':"",'<div class="'+i[0]+" layui-layer-"+f.type[g.type]+(0!=g.type&&2!=g.type||g.shade?"":" layui-layer-border")+" "+(g.skin||"")+'" id="'+i[0]+e+'" type="'+f.type[g.type]+'" times="'+e+'" showtime="'+g.time+'" conType="'+(a?"object":"string")+'" style="z-index: '+h+"; width:"+g.area[0]+";height:"+g.area[1]+";position:"+(g.fixed?"fixed;":"absolute;")+'">'+(a&&2!=g.type?"":l)+"<div"+(g.id?' id="'+g.id+'"':"")+' class="layui-layer-content'+(0==g.type&&-1!==g.icon?" layui-layer-padding":"")+(3==g.type?" layui-layer-loading"+g.icon:"")+'">'+function(){var b,d,a=["layui-icon-tips","layui-icon-success","layui-icon-error","layui-icon-question","layui-icon-lock","layui-icon-face-cry","layui-icon-face-smile"],c="layui-anim layui-anim-rotate layui-anim-loop";return 0==g.type&&-1!==g.icon?(16==g.icon&&(b="layui-icon layui-icon-loading "+c),'<i class="layui-layer-face layui-icon '+(b||a[g.icon]||a[0])+'"></i>'):3==g.type?(d=["layui-icon-loading","layui-icon-loading-1"],2==g.icon?'<div class="layui-layer-loading-2 '+c+'"></div>':'<i class="layui-layer-loading-icon layui-icon '+(d[g.icon]||d[0])+" "+c+'"></i>'):""}()+(1==g.type&&a?"":g.content||"")+"</div>"+'<div class="layui-layer-setwin">'+function(){var a=[];return k&&(a.push('<span class="layui-layer-min"></span>'),a.push('<span class="layui-layer-max"></span>')),g.closeBtn&&a.push('<span class="layui-icon layui-icon-close '+[i[7],i[7]+(g.title?g.closeBtn:4==g.type?"1":"2")].join(" ")+'"></span>'),a.join("")}()+"</div>"+(g.btn?function(){var b,c,a="";for("string"==typeof g.btn&&(g.btn=[g.btn]),b=0,c=g.btn.length;c>b;b++)a+='<a class="'+i[6]+b+'">'+g.btn[b]+"</a>";return'<div class="'+function(){var a=[i[6]];return g.btnAlign&&a.push(i[6]+"-"+g.btnAlign),a.join(" ")}()+'">'+a+"</div>"}():"")+(g.resize?'<span class="layui-layer-resize"></span>':"")+"</div>"],l,d('<div class="'+i.MOVE+'" id="'+i.MOVE+'"></div>')),c},h.pt.creat=function(){var a=this,b=a.config,c=a.index,h=b.content,k="object"==typeof h,l=d("body"),m=function(a){if(b.shift&&(b.anim=b.shift),i.anim[b.anim]){var c="layer-anim "+i.anim[b.anim];a.addClass(c).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d(this).removeClass(c)})}};if(b.id&&d("."+i[0]).find("#"+b.id)[0])return function(){var a=d("#"+b.id).closest("."+i[0]),c=a.attr("times"),e=a.data("config"),f=d("#"+i.SHADE+c),h=a.data("maxminStatus")||{};"min"===h?g.restore(c):e.hideOnClose&&(f.show(),a.show(),m(a),setTimeout(function(){f.css({opacity:f.data(j)})},10))}();switch(b.removeFocus&&document.activeElement&&document.activeElement.blur(),"string"==typeof b.area&&(b.area="auto"===b.area?["",""]:[b.area,""]),6==g.ie&&(b.fixed=!1),b.type){case 0:b.btn="btn"in b?b.btn:f.btn[0],g.closeAll("dialog");break;case 2:h=b.content=k?b.content:[b.content||"","auto"],b.content='<iframe scrolling="'+(b.content[1]||"auto")+'" allowtransparency="true" id="'+i[4]+c+'" name="'+i[4]+c+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+b.content[0]+'"></iframe>';break;case 3:delete b.title,delete b.closeBtn,-1===b.icon&&0===b.icon,g.closeAll("loading");break;case 4:k||(b.content=[b.content,"body"]),b.follow=b.content[1],b.content=b.content[0]+'<i class="layui-layer-TipsG"></i>',delete b.title,b.tips="object"==typeof b.tips?b.tips:[b.tips,!0],b.tipsMore||g.closeAll("tips")}a.vessel(k,function(e,g,j){l.append(e[0]),k?function(){2==b.type||4==b.type?function(){d("body").append(e[1])}():function(){h.parents("."+i[0])[0]||(h.data("display",h.css("display")).show().addClass("layui-layer-wrap").wrap(e[1]),d("#"+i[0]+c).find("."+i[5]).before(g))}()}():l.append(e[1]),d("#"+i.MOVE)[0]||l.append(f.moveElem=j),a.layero=d("#"+i[0]+c),a.shadeo=d("#"+i.SHADE+c),b.scrollbar||f.setScrollbar(c)}).auto(c),a.shadeo.css({"background-color":b.shade[1]||"#000",opacity:b.shade[0]||b.shade,transition:b.shade[2]||""}),a.shadeo.data(j,b.shade[0]||b.shade),2==b.type&&6==g.ie&&a.layero.find("iframe").attr("src",h[0]),4==b.type?a.tips():function(){a.offset(),parseInt(f.getStyle(document.getElementById(i.MOVE),"z-index"))||function(){a.layero.css("visibility","hidden"),g.ready(function(){a.offset(),a.layero.css("visibility","visible")})}()}(),b.fixed&&(f.events.resize[a.index]||(f.events.resize[a.index]=function(){a.resize()},e.on("resize",f.events.resize[a.index]))),a.layero.data("config",b),b.time<=0||setTimeout(function(){g.close(a.index)},b.time),a.move().callback(),m(a.layero)},h.pt.resize=function(){var a=this,b=a.config;a.offset(),(/^\d+%$/.test(b.area[0])||/^\d+%$/.test(b.area[1]))&&a.auto(a.index),4==b.type&&a.tips()},h.pt.auto=function(a){var h,j,k,l,b=this,c=b.config,f=d("#"+i[0]+a);switch((""===c.area[0]||"auto"===c.area[0])&&c.maxWidth>0&&(g.ie&&g.ie<8&&c.btn&&f.width(f.innerWidth()),f.outerWidth()>c.maxWidth&&f.width(c.maxWidth)),h=[f.innerWidth(),f.innerHeight()],j=f.find(i[1]).outerHeight()||0,k=f.find("."+i[6]).outerHeight()||0,l=function(a){a=f.find(a),a.height(h[1]-j-k-2*(0|parseFloat(a.css("padding-top"))))},c.type){case 2:l("iframe");break;default:""===c.area[1]||"auto"===c.area[1]?c.maxHeight>0&&f.outerHeight()>c.maxHeight?(h[1]=c.maxHeight,l("."+i[5])):c.fixed&&h[1]>=e.height()&&(h[1]=e.height(),l("."+i[5])):l("."+i[5])}return b},h.pt.offset=function(){var a=this,b=a.config,c=a.layero,d=[c.outerWidth(),c.outerHeight()],f="object"==typeof b.offset;a.offsetTop=(e.height()-d[1])/2,a.offsetLeft=(e.width()-d[0])/2,f?(a.offsetTop=b.offset[0],a.offsetLeft=b.offset[1]||a.offsetLeft):"auto"!==b.offset&&("t"===b.offset?a.offsetTop=0:"r"===b.offset?a.offsetLeft=e.width()-d[0]:"b"===b.offset?a.offsetTop=e.height()-d[1]:"l"===b.offset?a.offsetLeft=0:"lt"===b.offset?(a.offsetTop=0,a.offsetLeft=0):"lb"===b.offset?(a.offsetTop=e.height()-d[1],a.offsetLeft=0):"rt"===b.offset?(a.offsetTop=0,a.offsetLeft=e.width()-d[0]):"rb"===b.offset?(a.offsetTop=e.height()-d[1],a.offsetLeft=e.width()-d[0]):a.offsetTop=b.offset),b.fixed||(a.offsetTop=/%$/.test(a.offsetTop)?e.height()*parseFloat(a.offsetTop)/100:parseFloat(a.offsetTop),a.offsetLeft=/%$/.test(a.offsetLeft)?e.width()*parseFloat(a.offsetLeft)/100:parseFloat(a.offsetLeft),a.offsetTop+=e.scrollTop(),a.offsetLeft+=e.scrollLeft()),"min"===c.data("maxminStatus")&&(a.offsetTop=e.height()-(c.find(i[1]).outerHeight()||0),a.offsetLeft=c.css("left")),c.css({top:a.offsetTop,left:a.offsetLeft})},h.pt.tips=function(){var h,j,k,a=this,b=a.config,c=a.layero,f=[c.outerWidth(),c.outerHeight()],g=d(b.follow);g[0]||(g=d("body")),h={width:g.outerWidth(),height:g.outerHeight(),top:g.offset().top,left:g.offset().left},j=c.find(".layui-layer-TipsG"),k=b.tips[0],b.tips[1]||j.remove(),h.autoLeft=function(){h.left+f[0]-e.width()>0?(h.tipLeft=h.left+h.width-f[0],j.css({right:12,left:"auto"})):h.tipLeft=h.left},h.where=[function(){h.autoLeft(),h.tipTop=h.top-f[1]-10,j.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",b.tips[1])},function(){h.tipLeft=h.left+h.width+10,h.tipTop=h.top-(.75*h.height<21?21-.5*h.height:0),h.tipTop=Math.max(h.tipTop,0),j.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",b.tips[1])},function(){h.autoLeft(),h.tipTop=h.top+h.height+10,j.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",b.tips[1])},function(){h.tipLeft=h.left-f[0]-10,h.tipTop=h.top-(.75*h.height<21?21-.5*h.height:0),h.tipTop=Math.max(h.tipTop,0),j.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",b.tips[1])}],h.where[k-1](),1===k?h.top-(e.scrollTop()+f[1]+16)<0&&h.where[2]():2===k?e.width()-(h.left+h.width+f[0]+16)>0||h.where[3]():3===k?h.top-e.scrollTop()+h.height+f[1]+16-e.height()>0&&h.where[0]():4===k&&f[0]+16-h.left>0&&h.where[1](),c.find("."+i[5]).css({"background-color":b.tips[1],"padding-right":b.closeBtn?"30px":""}),c.css({left:h.tipLeft-(b.fixed?e.scrollLeft():0),top:h.tipTop-(b.fixed?e.scrollTop():0)})},h.pt.move=function(){var a=this,b=a.config,c=d(document),h=a.layero,i=["LAY_MOVE_DICT","LAY_RESIZE_DICT"],j=h.find(b.move),k=h.find(".layui-layer-resize");return b.move&&j.css("cursor","move"),j.on("mousedown",function(a){var c,e;a.button||(c=d(this),e={},b.move&&(e.layero=h,e.config=b,e.offset=[a.clientX-parseFloat(h.css("left")),a.clientY-parseFloat(h.css("top"))],c.data(i[0],e),f.eventMoveElem=c,f.moveElem.css("cursor","move").show()),a.preventDefault())}),k.on("mousedown",function(c){var e=d(this),g={};b.resize&&(g.layero=h,g.config=b,g.offset=[c.clientX,c.clientY],g.index=a.index,g.area=[h.outerWidth(),h.outerHeight()],e.data(i[1],g),f.eventResizeElem=e,f.moveElem.css("cursor","se-resize").show()),c.preventDefault()}),f.docEvent?a:(c.on("mousemove",function(a){var b,c,d,h,j,k,l,m;f.eventMoveElem&&(b=f.eventMoveElem.data(i[0])||{},c=b.layero,d=b.config,h=a.clientX-b.offset[0],j=a.clientY-b.offset[1],k="fixed"===c.css("position"),a.preventDefault(),b.stX=k?0:e.scrollLeft(),b.stY=k?0:e.scrollTop(),d.moveOut||(l=e.width()-c.outerWidth()+b.stX,m=e.height()-c.outerHeight()+b.stY,h<b.stX&&(h=b.stX),h>l&&(h=l),j<b.stY&&(j=b.stY),j>m&&(j=m)),c.css({left:h,top:j})),f.eventResizeElem&&(b=f.eventResizeElem.data(i[1])||{},d=b.config,h=a.clientX-b.offset[0],j=a.clientY-b.offset[1],a.preventDefault(),g.style(b.index,{width:b.area[0]+h,height:b.area[1]+j}),d.resizing&&d.resizing(b.layero))}).on("mouseup",function(){var b,c;f.eventMoveElem&&(b=f.eventMoveElem.data(i[0])||{},c=b.config,f.eventMoveElem.removeData(i[0]),delete f.eventMoveElem,f.moveElem.hide(),c.moveEnd&&c.moveEnd(b.layero)),f.eventResizeElem&&(f.eventResizeElem.removeData(i[1]),delete f.eventResizeElem,f.moveElem.hide())}),f.docEvent=!0,a)},h.pt.btnLoading=function(a,b){if(b){var c='<i class="layui-layer-btn-loading-icon layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></i>';if(a.find(".layui-layer-btn-loading-icon")[0])return;a.addClass("layui-layer-btn-is-loading").attr({disabled:""}).prepend(c)}else a.removeClass("layui-layer-btn-is-loading").removeAttr("disabled").find(".layui-layer-btn-loading-icon").remove()},h.pt.callback=function(){function j(){var a=h.cancel&&h.cancel(c.index,e,c);!1===a||g.close(c.index)}var c=this,e=c.layero,h=c.config;c.openLayer(),h.success&&(2==h.type?e.find("iframe").on("load",function(){h.success(e,c.index,c)}):h.success(e,c.index,c)),6==g.ie&&c.IE6(e),e.find("."+i[6]).children("a").on("click",function(){var k,l,i=d(this),j=i.index();i.attr("disabled")||(h.btnAsync?(k=0===j?h.yes||h["btn1"]:h["btn"+(j+1)],c.loading=function(a){c.btnLoading(i,a)},k?f.promiseLikeResolve(k.call(h,c.index,e,c)).then(function(a){!1!==a&&g.close(c.index)},function(c){c!==b&&a.console&&a.console.error("layer error hint: "+c)}):g.close(c.index)):0===j?h.yes?h.yes(c.index,e,c):h["btn1"]?h["btn1"](c.index,e,c):g.close(c.index):(l=h["btn"+(j+1)]&&h["btn"+(j+1)](c.index,e,c),!1===l||g.close(c.index)))}),e.find("."+i[7]).on("click",j),h.shadeClose&&c.shadeo.on("click",function(){g.close(c.index)}),e.find(".layui-layer-min").on("click",function(){var a=h.min&&h.min(e,c.index,c);!1===a||g.min(c.index,h)}),e.find(".layui-layer-max").on("click",function(){d(this).hasClass("layui-layer-maxmin")?(g.restore(c.index),h.restore&&h.restore(e,c.index,c)):(g.full(c.index,h),setTimeout(function(){h.full&&h.full(e,c.index,c)},100))}),h.end&&(f.end[c.index]=h.end),h.beforeEnd&&(f.beforeEnd[c.index]=d.proxy(h.beforeEnd,h,e,c.index,c))},f.reselect=function(){d.each(d("select"),function(){var c=d(this);c.parents("."+i[0])[0]||1==c.attr("layer")&&d("."+i[0]).length<1&&c.removeAttr("layer").show(),c=null})},h.pt.IE6=function(){d("select").each(function(){var c=d(this);c.parents("."+i[0])[0]||"none"===c.css("display")||c.attr({layer:"1"}).hide(),c=null})},h.pt.openLayer=function(){var a=this;g.zIndex=a.config.zIndex,g.setTop=function(a){var b=function(){g.zIndex++,a.css("z-index",g.zIndex+1)};return g.zIndex=parseInt(a[0].style.zIndex),a.on("mousedown",b),g.zIndex}},f.record=function(b){var c,d,e,g;return b[0]?(c=b.attr("type"),d=b.find(".layui-layer-content"),e=c===f.type[2]?d.children("iframe"):d,g=[b[0].style.width||f.getStyle(b[0],"width"),b[0].style.height||f.getStyle(b[0],"height"),b.position().top,b.position().left+parseFloat(b.css("margin-left"))],b.find(".layui-layer-max").addClass("layui-layer-maxmin"),b.attr({area:g}),d.data(k,f.getStyle(e[0],"height")),void 0):a.console&&console.error("index error")},f.setScrollbar=function(){i.html.css("overflow","hidden")},f.restScrollbar=function(a){if(i.html.css("overflow")){var b=d("."+i[0]).filter(function(){var b=d(this),c=b.data("config")||{};return!1===c.scrollbar&&"min"!==b.data("maxminStatus")&&b.attr("times")!==String(a)});0===b.length&&i.html.css("overflow","")}},f.promiseLikeResolve=function(a){var b=d.Deferred();return a&&"function"==typeof a.then?a.then(b.resolve,b.reject):b.resolve(a),b.promise()},a.layer=g,g.getChildFrame=function(a,b){return b=b||d("."+i[4]).attr("times"),d("#"+i[0]+b).find("iframe").contents().find(a)},g.getFrameIndex=function(a){return a?d("#"+a).parents("."+i[4]).attr("times"):void 0},g.iframeAuto=function(a){var b,c,e,f;a&&(b=g.getChildFrame("html",a).outerHeight(),c=d("#"+i[0]+a),e=c.find(i[1]).outerHeight()||0,f=c.find("."+i[6]).outerHeight()||0,c.css({height:b+e+f}),c.find("iframe").css({height:b}))},g.iframeSrc=function(a,b){d("#"+i[0]+a).find("iframe").attr("src",b)},g.style=function(a,b,c){var e=d("#"+i[0]+a),g=e.find(".layui-layer-content"),h=e.attr("type"),j=e.find(i[1]).outerHeight()||0,k=e.find("."+i[6]).outerHeight()||0;e.attr("minLeft"),h!==f.type[3]&&h!==f.type[4]&&(c||(parseFloat(b.width)<=260&&(b.width=260),parseFloat(b.height)-j-k<=64&&(b.height=64+j+k)),e.css(b),k=e.find("."+i[6]).outerHeight()||0,h===f.type[2]?e.find("iframe").css({height:("number"==typeof b.height?b.height:e.height())-j-k}):g.css({height:("number"==typeof b.height?b.height:e.height())-j-k-parseFloat(g.css("padding-top"))-parseFloat(g.css("padding-bottom"))}))},g.min=function(a,b){var j,k,l,m,n,o,p,q,r,c=d("#"+i[0]+a),h=c.data("maxminStatus");"min"!==h&&("max"===h&&g.restore(a),c.data("maxminStatus","min"),b=b||c.data("config")||{},j=d("#"+i.SHADE+a),k=c.find(".layui-layer-min"),l=c.find(i[1]).outerHeight()||0,m=c.attr("minLeft"),n="string"==typeof m,o=n?m:181*f.minStackIndex+"px",p=c.css("position"),q=180,r={width:q,height:l,position:"fixed",overflow:"hidden"},f.record(c),f.minStackArr.length>0&&(o=f.minStackArr[0],f.minStackArr.shift()),parseFloat(o)+q>e.width()&&(o=e.width()-q-function(){return f.minStackArr.edgeIndex=f.minStackArr.edgeIndex||0,f.minStackArr.edgeIndex+=3}(),0>o&&(o=0)),b.minStack&&(r.left=o,r.top=e.height()-l,n||f.minStackIndex++,c.attr("minLeft",o)),c.attr("position",p),g.style(a,r,!0),k.hide(),"page"===c.attr("type")&&c.find(i[4]).hide(),f.restScrollbar(a),j.hide())},g.restore=function(a){var o,c=d("#"+i[0]+a),e=d("#"+i.SHADE+a),h=c.find(".layui-layer-content"),j=c.attr("area").split(","),l=c.attr("type"),m=c.data("config")||{},n=h.data(k);c.removeData("maxminStatus"),g.style(a,{width:j[0],height:j[1],top:parseFloat(j[2]),left:parseFloat(j[3]),position:c.attr("position"),overflow:"visible"},!0),c.find(".layui-layer-max").removeClass("layui-layer-maxmin"),c.find(".layui-layer-min").show(),"page"===l&&c.find(i[4]).show(),m.scrollbar?f.restScrollbar(a):f.setScrollbar(a),n!==b&&(h.removeData(k),o=l===f.type[2]?h.children("iframe"):h,o.css({height:n})),e.show()},g.full=function(a){var b=d("#"+i[0]+a),c=b.data("maxminStatus");"max"!==c&&("min"===c&&g.restore(a),b.data("maxminStatus","max"),f.record(b),f.setScrollbar(a),setTimeout(function(){var c="fixed"===b.css("position");g.style(a,{top:c?0:e.scrollTop(),left:c?0:e.scrollLeft(),width:"100%",height:"100%"},!0),b.find(".layui-layer-min").hide()},100))},g.title=function(a,b){var c=d("#"+i[0]+(b||g.index)).find(i[1]);c.html(a)},g.close=function(c,h){var n,j=function(){var a=d("."+i[0]).children("#"+c).closest("."+i[0]);return a[0]?(c=a.attr("times"),a):d("#"+i[0]+c)}(),k=j.attr("type"),l=j.data("config")||{},m=l.id&&l.hideOnClose;j[0]&&(n=function(){var a={slideDown:"layer-anim-slide-down-out",slideLeft:"layer-anim-slide-left-out",slideUp:"layer-anim-slide-up-out",slideRight:"layer-anim-slide-right-out"}[l.anim]||"layer-anim-close",b=function(){var g,l,n,b="layui-layer-wrap";if(m)return j.removeClass("layer-anim "+a),j.hide();if(k===f.type[1]&&"object"===j.attr("conType")){for(j.children(":not(."+i[5]+")").remove(),g=j.find("."+b),l=0;2>l;l++)g.unwrap();g.css("display",g.data("display")).removeClass(b)}else{if(k===f.type[2])try{n=d("#"+i[4]+c)[0],n.contentWindow.document.write(""),n.contentWindow.close(),j.find("."+i[5])[0].removeChild(n)}catch(o){}j[0].innerHTML="",j.remove()}"function"==typeof f.end[c]&&f.end[c](),delete f.end[c],"function"==typeof h&&h(),f.events.resize[c]&&(e.off("resize",f.events.resize[c]),delete f.events.resize[c])},n=d("#"+i.SHADE+c);g.ie&&g.ie<10||!l.isOutAnim?n[m?"hide":"remove"]():(n.css({opacity:0}),setTimeout(function(){n[m?"hide":"remove"]()},350)),l.isOutAnim&&j.addClass("layer-anim "+a),6==g.ie&&f.reselect(),f.restScrollbar(c),"string"==typeof j.attr("minLeft")&&(f.minStackIndex--,f.minStackArr.push(j.attr("minLeft"))),g.ie&&g.ie<10||!l.isOutAnim?b():setTimeout(function(){b()},200)},m||"function"!=typeof f.beforeEnd[c]?(delete f.beforeEnd[c],n()):f.promiseLikeResolve(f.beforeEnd[c]()).then(function(a){!1!==a&&(delete f.beforeEnd[c],n())},function(c){c!==b&&a.console&&a.console.error("layer error hint: "+c)}))},g.closeAll=function(a,b){"function"==typeof a&&(b=a,a=null);var c=d("."+i[0]);d.each(c,function(e){var f=d(this),h=a?f.attr("type")===a:1;h&&g.close(f.attr("times"),e===c.length-1?b:null),h=null}),0===c.length&&"function"==typeof b&&b()},g.closeLast=function(a,b){var f,c=[],e=d.isArray(a);d("string"==typeof a?".layui-layer-"+a:".layui-layer").each(function(b,f){var g=d(f),h=e&&-1===a.indexOf(g.attr("type"))||"none"===g.css("display");return h?!0:(c.push(Number(g.attr("times"))),void 0)}),c.length>0&&(f=Math.max.apply(null,c),g.close(f,b))},l=g.cache||{},m=function(a){return l.skin?" "+l.skin+" "+l.skin+"-"+a:""},g.prompt=function(a,b){var h,i,j,k,c="",f="";return a=a||{},"function"==typeof a&&(b=a),a.area&&(h=a.area,c='style="width: '+h[0]+"; height: "+h[1]+';"',delete a.area),a.placeholder&&(f=' placeholder="'+a.placeholder+'"'),j=2==a.formType?'<textarea class="layui-layer-input"'+c+f+"></textarea>":function(){return'<input type="'+(1==a.formType?"password":"text")+'" class="layui-layer-input"'+f+">"}(),k=a.success,delete a.success,g.open(d.extend({type:1,btn:["确定","取消"],content:j,skin:"layui-layer-prompt"+m("prompt"),maxWidth:e.width(),success:function(b){i=b.find(".layui-layer-input"),i.val(a.value||"").focus(),"function"==typeof k&&k(b)},resize:!1,yes:function(c){var d=i.val();d.length>(a.maxlength||500)?g.tips("最多输入"+(a.maxlength||500)+"个字符",i,{tips:1}):b&&b(d,c,i)}},a))},g.tab=function(a){var b,c,e;return a=a||{},b=a.tab||{},c="layui-this",e=a.success,delete a.success,g.open(d.extend({type:1,skin:"layui-layer-tab"+m("tab"),resize:!1,title:function(){var a=b.length,d=1,e="";if(a>0)for(e='<span class="'+c+'">'+b[0].title+"</span>";a>d;d++)e+="<span>"+b[d].title+"</span>";return e}(),content:'<ul class="layui-layer-tabmain">'+function(){var a=b.length,d=1,e="";if(a>0)for(e='<li class="layui-layer-tabli '+c+'">'+(b[0].content||"no content")+"</li>";a>d;d++)e+='<li class="layui-layer-tabli">'+(b[d].content||"no  content")+"</li>";return e}()+"</ul>",success:function(b){var f=b.find(".layui-layer-title").children(),g=b.find(".layui-layer-tabmain").children();f.on("mousedown",function(b){b.stopPropagation?b.stopPropagation():b.cancelBubble=!0;var e=d(this),f=e.index();e.addClass(c).siblings().removeClass(c),g.eq(f).show().siblings().hide(),"function"==typeof a.change&&a.change(f)}),"function"==typeof e&&e(b)}},a))},g.photos=function(c,f,h){function r(a,b,c){var d=new Image;return d.src=a,d.complete?b(d):(d.onload=function(){d.onload=null,b(d)},d.onerror=function(a){d.onerror=null,c(a)},void 0)}var j,k,l,n,o,p,q,i={};if(c=d.extend(!0,{toolbar:!0,footer:!0},c),c.photos){if(j=!("string"==typeof c.photos||c.photos instanceof d),k=j?c.photos:{},l=k.data||[],n=k.start||0,o=c.success,i.imgIndex=(0|n)+1,c.img=c.img||"img",delete c.success,j){if(0===l.length)return g.msg("没有图片")}else if(p=d(c.photos),q=function(){l=[],p.find(c.img).each(function(a){var b=d(this);b.attr("layer-index",a),l.push({alt:b.attr("alt"),pid:b.attr("layer-pid"),src:b.attr("lay-src")||b.attr("layer-src")||b.attr("src"),thumb:b.attr("src")})})},q(),f||p.on("click",c.img,function(){q();var a=d(this),b=a.attr("layer-index");g.photos(d.extend(c,{photos:{start:b,data:l,tab:c.tab},full:c.full}),!0)}),!f)return;i.imgprev=function(a){i.imgIndex--,i.imgIndex<1&&(i.imgIndex=l.length),i.tabimg(a)},i.imgnext=function(a,b){i.imgIndex++,i.imgIndex>l.length&&(i.imgIndex=1,b)||i.tabimg(a)},i.keyup=function(a){if(!i.end){var b=a.keyCode;a.preventDefault(),37===b?i.imgprev(!0):39===b?i.imgnext(!0):27===b&&g.close(i.index)}},i.tabimg=function(a){return l.length<=1?void 0:(k.start=i.imgIndex-1,g.close(i.index),g.photos(c,!0,a))},i.isNumber=function(a){return"number"==typeof a&&!isNaN(a)},i.image={},i.getTransform=function(a){var b=[],c=a.rotate,d=a.scaleX,e=a.scale;return i.isNumber(c)&&0!==c&&b.push("rotate("+c+"deg)"),i.isNumber(d)&&1!==d&&b.push("scaleX("+d+")"),i.isNumber(e)&&b.push("scale("+e+")"),b.length?b.join(" "):"none"},i.event=function(b,c,f){var h,j;i.main.find(".layui-layer-photos-prev").on("click",function(a){a.preventDefault(),i.imgprev(!0)}),i.main.find(".layui-layer-photos-next").on("click",function(a){a.preventDefault(),i.imgnext(!0)}),d(document).on("keyup",i.keyup),b.off("click").on("click","*[toolbar-event]",function(){var e,a=d(this),b=a.attr("toolbar-event");switch(b){case"rotate":i.image.rotate=((i.image.rotate||0)+Number(a.attr("data-option")))%360,i.imgElem.css({transform:i.getTransform(i.image)});break;case"scalex":i.image.scaleX=-1===i.image.scaleX?1:-1,i.imgElem.css({transform:i.getTransform(i.image)});break;case"zoom":e=Number(a.attr("data-option")),i.image.scale=(i.image.scale||1)+e,0>e&&i.image.scale<0-e&&(i.image.scale=0-e),i.imgElem.css({transform:i.getTransform(i.image)});break;case"reset":i.image.scaleX=1,i.image.scale=1,i.image.rotate=0,i.imgElem.css({transform:"none"});break;case"close":g.close(c)}f.offset(),f.auto(c)}),i.main.on("mousewheel DOMMouseScroll",function(a){var b=a.originalEvent.wheelDelta||-a.originalEvent.detail,c=i.main.find('[toolbar-event="zoom"]');b>0?c.eq(0).trigger("click"):c.eq(1).trigger("click"),a.preventDefault()}),(a.layui||a.lay)&&(h=a.layui.lay||a.lay,j=function(a,b){var c=Date.now()-b.timeStart,d=b.distanceX/c,f=e.width()/3,g=Math.abs(d)>.25||Math.abs(b.distanceX)>f;g&&("left"===b.direction?i.imgnext(!0):"right"===b.direction&&i.imgprev(!0))},d.each([f.shadeo,i.main],function(a,b){h.touchSwipe(b,{onTouchEnd:j})}))},i.loadi=g.load(1,{shade:"shade"in c?!1:[.9,b,"unset"],scrollbar:!1}),r(l[n].src,function(e){g.close(i.loadi);var f=l[n].alt||"";h&&(c.anim=-1),i.index=g.open(d.extend({type:1,id:"layui-layer-photos",area:function(){var g,b=[e.width,e.height],f=[d(a).width()-100,d(a).height()-100];return!c.full&&(b[0]>f[0]||b[1]>f[1])&&(g=[b[0]/f[0],b[1]/f[1]],g[0]>g[1]?(b[0]=b[0]/g[0],b[1]=b[1]/g[0]):g[0]<g[1]&&(b[0]=b[0]/g[1],b[1]=b[1]/g[1])),[b[0]+"px",b[1]+"px"]}(),title:!1,shade:[.9,b,"unset"],shadeClose:!0,closeBtn:!1,move:".layer-layer-photos-main img",moveType:1,scrollbar:!1,moveOut:!0,anim:5,isOutAnim:!1,skin:"layui-layer-photos"+m("photos"),content:'<div class="layer-layer-photos-main"><img src="'+l[n].src+'" alt="'+f+'" layer-pid="'+(l[n].pid||"")+'">'+function(){var a=['<div class="layui-layer-photos-pointer">'];return l.length>1&&a.push(['<div class="layer-layer-photos-page">','<span class="layui-icon layui-icon-left layui-layer-photos-prev"></span>','<span class="layui-icon layui-icon-right layui-layer-photos-next"></span>',"</div>"].join("")),c.toolbar&&a.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-header">','<span toolbar-event="rotate" data-option="90" title="旋转"><i class="layui-icon layui-icon-refresh"></i></span>','<span toolbar-event="scalex" title="变换"><i class="layui-icon layui-icon-slider"></i></span>','<span toolbar-event="zoom" data-option="0.1" title="放大"><i class="layui-icon layui-icon-add-circle"></i></span>','<span toolbar-event="zoom" data-option="-0.1" title="缩小"><i class="layui-icon layui-icon-reduce-circle"></i></span>','<span toolbar-event="reset" title="还原"><i class="layui-icon layui-icon-refresh-1"></i></span>','<span toolbar-event="close" title="关闭"><i class="layui-icon layui-icon-close"></i></span>',"</div>"].join("")),c.footer&&a.push(['<div class="layui-layer-photos-toolbar layui-layer-photos-footer">',"<h3>"+f+"</h3>","<em>"+i.imgIndex+" / "+l.length+"</em>",'<a href="'+l[n].src+'" target="_blank">查看原图</a>',"</div>"].join("")),a.push("</div>"),a.join("")}()+"</div>",success:function(a,b,d){i.main=a.find(".layer-layer-photos-main"),i.footer=a.find(".layui-layer-photos-footer"),i.imgElem=i.main.children("img"),i.event(a,b,d),c.tab&&c.tab(l[n],a),"function"==typeof o&&o(a)},end:function(){i.end=!0,d(document).off("keyup",i.keyup)}},c))},function(){g.close(i.loadi),g.msg("当前图片地址异常，<br>是否继续查看下一张？",{time:3e4,btn:["下一张","不看了"],yes:function(){l.length>1&&i.imgnext(!0,!0)}})})}},f.run=function(b){var c,f,j;d=b,e=d(a),c=navigator.userAgent.toLowerCase(),f=/android|iphone|ipod|ipad|ios/.test(c),j=d(a),f&&d.each({Height:"height",Width:"width"},function(b,c){var d="inner"+b;e[c]=function(){return d in a?a[d]:j[c]()}}),i.html=d("html"),g.open=function(a){var b=new h(a);return b.index}},a.layui&&layui.define?(g.ready(),layui.define(["jquery","lay"],function(b){g.path=layui.cache.dir,f.run(layui.$),a.layer=g,b("layer",g)})):"function"==typeof define&&define.amd?define(["jquery"],function(){return f.run(a.jQuery),g}):function(){g.ready(),f.run(a.jQuery)}()}(window);