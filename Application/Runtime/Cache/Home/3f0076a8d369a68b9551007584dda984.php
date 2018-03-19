<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>dblog</title>
    <link href="/dblog/Public/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <script src="/dblog/Public/jquery/jquery-1.11.3.min.js"></script>
    <link href="/dblog/Public/css/global.css?v=20161231204501" rel="stylesheet">
</head>

<body>
<!-- 导航栏 -->
<div class="row nav-top-container">
    <div class="col-lg-1 col-md-1 col-xs-0"></div>
    <div class="col-lg-10 col-md-10 col-xs-12">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="btn btn-default btn-lg nav-ico btn-nav-home" href="<?php echo U('Index/index');?>" role="button">
                        <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                    </a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">
                        <a class="btn btn-default nav-ico" href="<?php echo U('Post/add');?>"
                           role="button">
                            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div class="col-lg-1 col-md-1 col-xs-0"></div>
</div>

<link href="/dblog/Public/umeditor/themes/default/css/umeditor.css" type="text/css" rel="stylesheet">
<script type="text/javascript" charset="utf-8" src="/dblog/Public/umeditor/umeditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="/dblog/Public/umeditor/umeditor.min.js"></script>
<script type="text/javascript" src="/dblog/Public/umeditor/lang/zh-cn/zh-cn.js"></script>
<link href="/dblog/Public/css/post.css?v=20161231204509" rel="stylesheet">
<div class="container editor">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <!-- <form action="<?php echo U('Post/add_handle');?>" method="POST"> -->
            <input name="title" type="text" class="form-control title" id="" placeholder="标题">
            <br>
            <script type="text/javascript" src="/dblog/Public/js/post.js?v=20161231204509"></script>
            <script type="text/plain" id="myEditor" style="width:700px;height:500px;"></script>
            <script type="text/javascript">
                var um = UM.getEditor('myEditor');
                $(".edui-container").css("width", '100%');//编辑器宽度自适应
                $(".edui-editor-body").css("width", '100%');//高度自适应
            </script>
            <br>
            <div class="row">
                <?php $__FOR_START_18655__=1;$__FOR_END_18655__=5;for($i=$__FOR_START_18655__;$i < $__FOR_END_18655__;$i+=1){ ?><div class="col-xs-6 col-md-3">
                        <a class="thumbnail submit" headshot_id="<?php echo ($i); ?>">
                            <img src="/dblog/Public/pics/<?php echo ($i); ?>.png" alt="...">
                        </a>
                    </div><?php } ?>
            </div>

            <br>
            <!-- </form> -->
        </div>
        <div class="col-md-2">
        </div>
    </div>
</div>
<script src="/dblog/Public/js/footer.js?v=20161231204509"></script>
<footer class="bs-docs-footer">
    <div class="container">
        <div><a href="https://github.com/CyC2018/dblog">GitHub 仓库</a></div>
        <p>本项目源码受 <a rel="license" href="https://github.com/twbs/bootstrap/blob/master/LICENSE" target="_blank">MIT </a>开源协议保护，文档受
            <a rel="license" href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a> 开源协议保护。
        </p>
    </div>
</footer>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<script src="/dblog/Public/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>