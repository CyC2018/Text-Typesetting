$(document).ready(function () {
    var inputTextarea = $('#input-textarea');
    var outputTextarea = $('#output-textarea');
    var addSpaceBtn = $('#add-space-btn');
    var convertPicBtn = $('#convert-pic-btn');

    /*
     * 添加空格
     */
    addSpaceBtn.click(function () {
        //每次点击的时候，将当前的元素类动态地添加或删除selected
        $(this).toggleClass('selected'); 

       var content = getOutputTextAreaVal() == '' ? getInputTextAreaVal() : getOutputTextAreaVal();
        //选中添加空格功能
        if ($(this).hasClass('selected')) {
            setOutputTextAreaVal(addSpace(content));
        } else {
            content = getInputTextAreaVal();
            //取消添加空格功能
            //保留转换图片功能
            if (convertPicBtn.hasClass('selected')) {
                content = changeImg(content);
            }
            setOutputTextAreaVal(content);
        }
    });
    /**
     * 添加空格
     */
    function addSpace(content) {
        content = content.replace(/([a-zA-Z0-9)'>)}\]])([\u4e00-\u9fa5])/g, "$1 $2");
        content = content.replace(/([\u4e00-\u9fa5])([a-zA-Z0-9('<{\]])/g, "$1 $2");
        return content;
    }

    /*
     * 转换图片
     */
    function changeImg(content) {
        var newContent = "";
        var picStartString = "![]";
        console.log(content);
        //var content = getInputTextAreaVal();
        var preIdx = 0;
        var curIdx = content.indexOf(picStartString);
        while (curIdx != -1) {
            var preContent = content.substring(preIdx, curIdx);
            newContent += preContent;
            console.log("preContent: " + preContent);
            var picString = getPicString(content, curIdx);
            var imgPic = buildImgPic(picString);
            console.info("imgPic: " + imgPic);
            newContent += imgPic;
            preIdx = content.indexOf(")", curIdx) + 1;
            curIdx = content.indexOf(picStartString, preIdx);
        }
        newContent += content.substring(preIdx, content.length);
        return newContent;
    }
    
    /*
     * 转换图片
     */
    convertPicBtn.click(function () {
        //每次点击的时候，将当前的元素切换selected样式 
        $(this).toggleClass('selected'); 

        var content = getOutputTextAreaVal() == '' ? getInputTextAreaVal() : getOutputTextAreaVal();
        //选中转换图片功能
        if ($(this).hasClass('selected')) {
            setOutputTextAreaVal(changeImg(content));
        } else {
            //取消转换图片功能
             //是否保留添加空格功能
             content = getInputTextAreaVal();
            if (addSpaceBtn.hasClass('selected')) {
                content = addSpace(content);
            }
            setOutputTextAreaVal(content);
        }
    });

    function getInputTextAreaVal() {
        return inputTextarea.val();
    }

    function getOutputTextAreaVal() {
        return outputTextarea.val();
    }

    function setOutputTextAreaVal(data) {
        outputTextarea.val(data);
    }

    function getPicString(content, idx) {
        var lastIdx = content.indexOf(")", idx);
        return content.substring(idx + 4, lastIdx);
    }

    function buildImgPic(picString) {
        return '<div align="center">  <img src="' + picString + '" width=""/> </div><br>';
    }

});
