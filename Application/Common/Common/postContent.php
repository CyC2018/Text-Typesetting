<?php

function get_posts($page)
{
    $posts_id = M('post')->limit(5 * $page, 5)->order('time desc')->field('postid')->select();
    for ($i = 0; $i < count($posts_id); $i++) {
        $post_id = $posts_id[$i]['postid'];
        $contents[$i] = get_post($post_id);
    }
    return $contents;
}

function get_post($post_id)
{
    $redis_key = build_redis_key("post", $post_id);
    $cache = get_redis_cache($redis_key);
    if ($cache) {
        $content = $cache;
        $content['source'] = "Redis";
    } else {
        $map['postid'] = $post_id;
        $content = M('post')->where($map)->find();
        // 如果没缓存，需要将数据添加到缓存中
        set_redis_cache($redis_key, $content);
        $content['source'] = "MySQL";
    }
    $content['read_count'] = get_read_count($post_id);
    return $content;
}
