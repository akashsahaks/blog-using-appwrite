import { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/config";

const Home = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      appwriteService.getPosts().then((posts) => {
         if (posts) {
            setPosts(posts.documents);
         }
      });
   }, []);

   if (posts.length === 0) {
      return (
         <div className="w-full py-8 mt-4 text-center bg-myYellow">
            <div className="w-full max-w-7xl mx-auto ps-4">
               <div className="flex flex-wrap">
                  <div className="p-2 w-full">
                     <h1 className="text-2xl font-semibold font-mono hover:text-gray-700">
                        Login to read posts!!
                     </h1>
                  </div>
               </div>
            </div>
         </div>
      );
   }

   return (
      <>
         <div className="w-full py-8">
            <div className="w-full max-w-5xl mx-auto ps-4">
               <div className="flex flex-wrap">
                  {posts.map((post) => (
                     <div key={post.$id} className="p-2 w-auto">
                        <PostCard {...post} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
