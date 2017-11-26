import Layout from '../components/MyLayout.js'
import Link from 'next/link'

import withPosts from '../viewModels/withPosts';

const PostLink = (props) => (
  <li key={`props.post.sys.id`}>
    {console.log(props.post.fields.title)}
    <Link as={`/p/${props.post.fields.title}`} href={`/post?title=${props.post.fields.title}`}>
      <a>{props.post.fields.title}</a>
    </Link>
  </li>
)

const IndexPage = ({ items }) => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {items.map(item => (<PostLink post={item}/>))}
    </ul>
  </Layout>
);

export default withPosts(IndexPage);
