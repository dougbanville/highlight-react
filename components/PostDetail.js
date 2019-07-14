import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import AudioButton from "../components/AudioButton";
import PostImage from "../components/PostImage";

const PostDetail = ({ post, full }) => {
  let image = "no Image";
  if (post.better_featured_image != null) {
    image = post.better_featured_image.source_url;
  }
  let content = post.excerpt.rendered.replace("Read More", "");
  content = ReactHtmlParser(content);
  if (full) {
    content = ReactHtmlParser(post.content.rendered);
  }
  return (
    <div>
      <PostImage image={image} postId={post.id} post={post} />
      <div className="entry-wrap">
        <Link as={`/blog/${post.id}`} href={`/blog/?id=${post.id}`}>
          <div>
            <h4>
              <span className="subheader">{ReactHtmlParser(post.acf.sub_heading)}</span> /{" "}
              {ReactHtmlParser(post.title.rendered)}
            </h4>
            <hr />
            {content}
          </div>
        </Link>
      </div>
      <AudioButton id={post.id} audioUrl={post.rte_mp3_audio} />
      <style jsx>{`
        h4 {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PostDetail;
