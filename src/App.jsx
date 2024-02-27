import conf from "./conf/conf";
function App() {
   console.log(conf.appwriteUrl);
   return (
      <>
         <h1 className="font-bold text-3xl">My Blog</h1>
      </>
   );
}

export default App;
