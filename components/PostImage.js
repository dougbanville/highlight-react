import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import AudioButton from "../components/AudioButton";

const PostImage = ({ image, postId, post }) => (
  <div className="postContainer">
    <Link as={`/blog/${postId}`} href={`/blog/?id=${postId}`}>
      <img src={image} />
    </Link>
    <div className="floatingButton">
      <AudioButton id={post.id} audioUrl={post.rte_mp3_audio} />
    </div>
    <style jsx>{`
      .postContainer {
        position: relative;
      }
      .floatingButton {
        position: absolute;
        top: 0;
      }
      img {
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default PostImage;
