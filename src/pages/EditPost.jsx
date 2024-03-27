import { useState, useEffect } from "react";
import { PostForm } from "../components/index";
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
   const [post, setPost] = useState(null);
   const { slug } = useParams();
   const navigate = useNavigate();

   useEffect(() => {
      if (slug) {
         appwriteService.getPost(slug).then((post) => {
            if (post) {
               setPost(post);
            }
         });
      } else {
         navigate("/");
      }
   }, [slug, navigate]);

   return post ? (
      <>
         <div className="py-8">
            <div className="w-full max-w-5xl mx-auto ps-4">
               <PostForm post={post} />
            </div>
         </div>
      </>
   ) : null;
};

export default EditPost;
