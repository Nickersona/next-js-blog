import Layout from '../components/MyLayout.js'
import withPost from '../viewModels/withPost';

const PostPage = (props) => {
	const {
		title,
		content,
		id,
	} = props;
	return (
	    <Layout>
	    	{console.log('PROPS', props)}
	       <h1>{title}</h1>
	       <p>{content}</p>
	    </Layout>
	);
};

export default withPost(PostPage);

