// This is the Link API
import Link from 'next/link'

import Layout from '../components/MyLayout'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js' },
    { id: 'deploy-nextjs', title: 'Deploy Next.js' }
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

const BlogDemo = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <style jsx>
    {`
      h1 {
        font-weight: normal;
      }
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
        list-style-type: none;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
      `}
    </style>
  </Layout>
)

export default BlogDemo
