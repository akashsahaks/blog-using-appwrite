import { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/config";

const AllPosts = () => {
   const [posts, setPosts] = useState([]);
   const [loader, setLoader] = useState(true);

   useEffect(() => {
      setLoader(true);
      appwriteService
         .getPosts([])
         .then((posts) => {
            if (posts) {
               setPosts(posts.documents);
               setLoader(false);
            }
         })
         .catch((error) => {
            console.log("Appwrite service :: getPosts([]) :: error", error);
         });
   }, []);

   return (
      <div className="w-full py-8">
         <div className="w-full max-w-5xl mx-auto ps-4">
            {!loader ? (
               <div className="flex flex-wrap">
                  {posts.map((post) => (
                     <div key={post.$id} className="p-2 w-1/4">
                        <PostCard {...post} />
                     </div>
                  ))}
               </div>
            ) : (
               <h1 className="text-3xl font-mono ">Loading...</h1>
            )}
         </div>
      </div>
   );
};

export default AllPosts;
