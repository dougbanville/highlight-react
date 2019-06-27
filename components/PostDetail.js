import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import AudioButton from "../components/AudioButton";

const PostDetail = ({ post, full }) => {
  if (full) {
    return (
      <div>
        <img src={post.better_featured_image.source_url} />
        <div className="entry-wrap">
          <Link as={`/blog/${post.id}`} href={`/blog/?id=${post.id}`}>
            <h4>
              <span className="subheader">{ReactHtmlParser(post.acf.sub_heading)}</span> /{" "}
              {ReactHtmlParser(post.title.rendered)}
              <hr />
              {ReactHtmlParser(post.content.rendered)}
            </h4>
          </Link>
        </div>
        <AudioButton id={post.id} audioUrl={post.rte_mp3_audio} />
      </div>
    );
  } else {
    return (
      <div>
        <img src={post.better_featured_image.source_url} />
        <div className="entry-wrap">
          <Link as={`/blog/${post.id}`} href={`/blog/?id=${post.id}`}>
            <h4>
              <span className="subheader">{ReactHtmlParser(post.acf.sub_heading)}</span> /{" "}
              {ReactHtmlParser(post.title.rendered)}
            </h4>
          </Link>
        </div>
        <AudioButton id={post.id} audioUrl={post.rte_mp3_audio} />
      </div>
    );
  }
};

export default PostDetail;
