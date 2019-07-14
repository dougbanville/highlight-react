import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import AudioButton from "./AudioButton";
import PostImage from "./PostImage";
import moment from "moment";

const SmallPost = ({ post, full }) => {
  let image = "no Image";
  if (post.better_featured_image != null) {
    image = post.better_featured_image.source_url;
  }
  let content = null;
  if (full) {
    content = ReactHtmlParser(post.content.rendered);
  }
  return (
    <div className="small-post">
      <PostImage image={image} postId={post.id} post={post} />
      <div className="entry-wrap">
        <Link as={`/blog/${post.id}`} href={`/blog/?id=${post.id}`}>
          <h4>
            <span className="subheader">{ReactHtmlParser(post.acf.sub_heading)}</span> /{" "}
            {ReactHtmlParser(post.title.rendered)}
            <p className="date">{moment(post.date).format("MMM d, Y")}</p>
            <hr />
            {content}
          </h4>
        </Link>
      </div>
      <style jsx>{`
        h4 {
          cursor: pointer;
          font-size: 17px;
        }
        .small-post {
          width: 90%;
          padding: 3px;
          margin: 0 auto;
          background: white;
          background: white;
          border: 0px solid black;
          margin-bottom: 2em;
          box-shadow: 0 0.15em 0.35em 0 rgba(0, 0, 0, 0.135);
          border-radius: 4px;
        }
        .date {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.65);
        }
      `}</style>
    </div>
  );
};

export default SmallPost;
