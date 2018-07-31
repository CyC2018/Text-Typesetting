$(document).ready(function () {
    var inputTextarea = $('#input-textarea');
    var outputTextarea = $('#output-textarea');
    var addSpaceBtn = $('#add-space-btn');
    var convertPicBtn = $('#convert-pic-btn');

    /*
     * 添加空格
     */
    addSpaceBtn.click(function () {
        var content = getInputTextAreaVal();
        content = content.replace(/([a-zA-Z0-9)'>)}\]])([\u4e00-\u9fa5])/g, "$1 $2");
        content = content.replace(/([\u4e00-\u9fa5])([a-zA-Z0-9('<{\]])/g, "$1 $2");
        setOutputTextAreaVal(content);
    });

    /*
     * 转换图片
     */
    convertPicBtn.click(function () {
        var newContent = "";
        var picStartString = "![]";
        var content = getInputTextAreaVal();
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
        newContent += 
        setOutputTextAreaVal(newContent);
    });

    function getInputTextAreaVal() {
        return inputTextarea.val();
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
