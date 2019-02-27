$(document).ready(function() {
    var inputTextarea = $('#input-textarea');
    var outputTextarea = $('#output-textarea');
    var addSpaceBtn = $('#add-space-btn');
    var convertPicBtn = $('#convert-pic-btn');
    var checkResume = $('#check-resume');

    /*
     * 添加空格
     */
    addSpaceBtn.click(function() {
        var content = getInputTextAreaVal();
        setOutputTextAreaVal(addSpace(content));
    });

    /*
     * 检查简历
     */
    checkResume.click(function() {
        var keywords = keyword.split(",");
        var content = getInputTextAreaVal();
        var content_lowcase = content.toLowerCase();
        var res = "";
        var idx = -1;
        while (true) {
            var idx = indexOf(keywords, content_lowcase);
            if (idx == -1) break;
            content_lowcase = content_lowcase.substring(idx);
            var kw = findKeyWord(keywords, content_lowcase);
            console.log(kw);
            res += content.substring(0, idx);
            res += kw;
            content = content.substring(idx + kw.length);
            content_lowcase = content_lowcase.substring(kw.length);
        }
        res += content;
        setOutputTextAreaVal(addSpace(res));
    });

    /*
     * 转换图片
     */
    convertPicBtn.click(function() {
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

    function addSpace(content) {
        content = content.replace(/([a-zA-Z0-9)'>)}\]])([\u4e00-\u9fa5])/g, "$1 $2");
        content = content.replace(/([\u4e00-\u9fa5])([a-zA-Z0-9('<{\]])/g, "$1 $2");
        return content;
    }

    function indexOf(keywords, content) {
        console.log(content);
        var min_i = -1;
        for (i in keywords) {
            var kw = keywords[i];
            var kw_l = kw.toLowerCase();
            console.log(kw_l);
            var find_idx = content.indexOf(kw_l);
            if (min_i == -1 || (find_idx != -1 && find_idx < min_i)) {
                min_i = find_idx;
            }
        }
        return min_i;
    }

    function findKeyWord(keywords, content) {
        var res = "";
        for (i in keywords) {
            var kw = keywords[i];
            var kw_l = kw.toLowerCase();
            if (content.startsWith(kw_l) && kw.length > res.length) {
                res = kw;
            }
        }
        return res;
    }

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

    var keyword = '# 语言,Java,JDK,JVM,C++,STL,Golang,Python,PHP,MATLAB,C#,# Web 开发,Spring,SpringMVC,MyBatis,Hibernate,Struts2,Flask,Django,Tornado,# 数据库,MySQL,SQL,SQLServer,MongoDB,Redis,Memcached,Oracle,SQLite,# 前端开发,JavaScript,HTML,CSS,vue.js,jQuery,BootStrap,# 移动开发,Android,# 中间件,RabbitMQ,ZooKeeper,Kafka,Thrift,Storm,Streaming ,Samza,MyCat,Dubbo,RocketMQ,# 工具,Git,SVN,Maven,# 云计算,# 大数据,Hbase,Storm,Spark,Hadoop,Hive,# 运维,Linux,Unix,Nginx,Docker,KVM,OpenStack';
});