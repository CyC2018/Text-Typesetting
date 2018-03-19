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

<div class="container post-show" style="margin-top:50px">
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            <div class="media">
                <div class="media-left">
                    <a>
                        <img src="/dblog/Public/pics/<?php echo ($post['headshot_id']); ?>.png" style="width: 60px;height:60px">
                    </a>
                </div>
                <div class="media-body">
                    <?php $url = U('Post/content?postid=' . $post['postid']); ?>
                    <a href="<?php echo ($url); ?>" class="post-title"
                       style="font-size: 25px"><?php echo ($post['title']); ?></a>
                    <br>
                    <div style="padding-top: 0px"><?php echo ($post['time']); ?> &nbsp; <?php echo ($post['read_count']); ?></div>
                </div>
            </div>
            <br>
            <?php echo ($post['content']); ?>
        </div>
        <div class="col-md-2"></div>
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