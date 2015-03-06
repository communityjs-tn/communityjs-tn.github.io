/**
 * Created by Anis on 25/01/2015.
 */
define([], function () {
    function Blog (blog) {
        blog = blog ||{};
        this.title = blog.title || ""; // generate automatic title if null
        this.slug = blog.slug || "";  // generate automatic slug if null
        this.dateCreated = blog.dateCreated || new Date().getTime();
        this.body = blog.body || "";
    }
    return Blog;
});
