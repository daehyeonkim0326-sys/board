import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById,getComment } from "../api/postsAPI";
const PostDetail = ({userID}) => {
    const {id} = useParams();
    const [post,setPost] = useState(null);
    const[comment,setComment] =useState([]);
    useEffect(()=>{
        const fetchData =async()=>{
            try{
            //게시글을 불러온다
            const postData = await getPostById(id);
            setPost(postData);
            const commentData = await getComment(id);
            setComment(commentData);} catch(error){
                console.error(error);
            }
        }
        fetchData();
    },[id]);
    if(!post){
        return;
    }
    const handleUpdate=()=>{
        const { data, error } = await supabase
  .from('posts')
  .update({ title: 'otherValue'  })
  .eq('some_column', 'someValue')
  .select()
    }
  return (
    <div className="post-detail">
        <h2>{post.title}</h2>
    <div className="post-info">
        <span>작성자:{post.users.nickname}</span>
    </div>
        <p className="post-contents">{post.contents}</p> 
        {/*로그인한 사용자가 */}
        {
            (userID === post.user_id) && (
                <div className="btn-wrap">
                    <button>삭제</button>
                    <button onClick={handleUpdate}>수정</button>
                </div>
            )
        }
        <h3>댓글</h3>
        {comment.length > 0 &&(
            <ul>
                {
                    comment.map((item)=>{
                        return(
                            <li key={item.id}>
                                <p>{item.content}</p>
                                <p>{item.users.nickname}</p>
                            </li>
                        )
                    })
                }
            </ul>
        )}
    </div>
  )
}

export default PostDetail