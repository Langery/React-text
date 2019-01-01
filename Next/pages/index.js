// This is the Link API
import Link from 'next/link'
// import Header from '../components/Header'

import Layout from '../components/MyLayout'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" id="hello-nextjs" />
      <PostLink title="Learn Next.js" id="learn-nextjs" />
      <PostLink title="deploy Next.js" id="deploy-nextjs" />
    </ul>
  </Layout>
)

export default Index
