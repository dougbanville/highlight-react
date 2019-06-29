import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import AudioButton from "../components/AudioButton";
import PostImage from "../components/PostImage";
import SmallPost from "../components/SmallPost";

const PostDetail = ({ post, full }) => {
  console.log(post.better_featured_image);
  let image = "no Image";
  if (post.better_featured_image != null) {
    image = post.better_featured_image.source_url;
  }
  let content = null;
  if (full) {
    content = ReactHtmlParser(post.content.rendered);
  }
  return (
    <div>
      <PostImage image={image} postId={post.id} />
      <div className="entry-wrap">
        <Link as={`/blog/${post.id}`} href={`/blog/?id=${post.id}`}>
          <h4>
            <span className="subheader">{ReactHtmlParser(post.acf.sub_heading)}</span> /{" "}
            {ReactHtmlParser(post.title.rendered)}
            <hr />
            {content}
          </h4>
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
