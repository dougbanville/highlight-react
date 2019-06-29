import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

const PostImage = ({ image, postId }) => (
  <div>
    <Link as={`/blog/${postId}`} href={`/blog/?id=${postId}`}>
      <img src={image} />
    </Link>
    <style jsx>{`
      img {
        cursor: pointer;
      }
    `}</style>
  </div>
);

export default PostImage;
