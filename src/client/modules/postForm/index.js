import CreatePostForm from './components/CreatePostForm';
import withStoreEnhancer from '../../common/hoc/withStoreEnhancer.hoc';
import { postForm } from './postForm.reducer';

export default withStoreEnhancer({ reducerName: 'postForm', reducer: postForm })(CreatePostForm);
