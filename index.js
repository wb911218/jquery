(function(global,factory){

    if(typeof module === "object" && typeof module.exports === "object"){

        module.exports = global.document ? 
            factory(global,true) : 
            function(w){
                if(!w.document){
                    throw new error("need window");
                }
                return factory(w);
            }

    }else{
        factory(global);
    }

})(typeof window !== "undefined" ? window : this, function(window,noGlobal){

    var cTp = function(){

    }
    function extend(){

    }

    //练习extend 的方法

    var obj = {
        name:"王彬",
        age:"20",
        o:{
            o4:"第四个"
        }
    }
    var defaults = {
        sex:"男",
        arr:['数组1','数组2'],
        o:{
            o1:"对象1",
            o2:"对象2",
            o3:{
                a1:"第三层",
                a2:"第三层2"
            },

        },
        obj:{
            name:"王彬",
            age:"20"
        }
    }
    var opts = $.extend(true,obj,defaults,{});
    console.log($.isNumeric('6655'));
    var o = {};
    var getProto = Object.getPrototypeOf;
    console.log(getProto(defaults))
    console.log(getProto(Object.create(null)))
})