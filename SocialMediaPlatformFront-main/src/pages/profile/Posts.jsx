import CreatePost from "../../components/ui/CreatePost";
import Post from "../../components/post/Post";
import posts from "../../fake-data";

function Posts() {
  return (
    <div>
      <CreatePost />
      <div
        style={{
          backgroundColor: "var(--bs-secondary)",
          width: "100%",
          height: "20px",
        }}
      ></div>

      {posts.map((post, index) => (
        <>
          <Post key={index} {...post} />
          <div
            style={{
              backgroundColor: "var(--bs-secondary)",
              width: "100%",
              height: "20px",
            }}
          ></div>
        </>
      ))}
    </div>
  );
}

export default Posts;
