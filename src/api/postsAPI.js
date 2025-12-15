import { supabase } from "./supabaseClient";

// 전체 게시글
export const getPosts = async () => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, users(nickname)")
    .order("create_at", { ascending: false });

  if (error) throw new Error(error.message || "게시글 가져오기 오류");
  return data;
};

// 게시글 상세
export const getPostById = async (id) => {
  const { data, error } = await supabase
    .from("posts")
    .select("*, users(nickname)")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message || "게시글 상세 가져오기 오류");
  return data;
};

// 댓글
export const getComment = async (postID) => {
  const { data, error } = await supabase
    .from("comment")
    .select("*, users(nickname)")
    .eq("post_id", postID)
    .order("create_at", { ascending: false });

  if (error) throw new Error(error.message || "comments 데이터 가져오기 오류");
  return data;
}

export const createPost = async({title,content,userID})=>{
    const {data,error} = await supabase
    .from('posts')
    .insert([{
        title:title,
        content:content,
        user_id: userID
    }])
    .select();
    if(error){
        throw new Error('새 글 작성 시 insert error');
    }
    return data;
}
//게시글 수정 : title,content,update_at
export const updatePost = async({id,title,content})=>{
    
}

