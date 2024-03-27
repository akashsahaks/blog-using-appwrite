import { forwardRef, useId } from "react";

const Input = forwardRef(
   ({ label, type = "text", className = "", ...props }, ref) => {
      const id = useId();
      return (
         <div className="w-full flex flex-wrap flex-col">
            {label && (
               <label
                  className="inline-block mb-1 pl-1 font-mono text-xl font-semibold"
                  htmlFor={id}
               >
                  {label}
               </label>
            )}

            <input
               type={type}
               className={`px-3 py-2 rounded-lg bg-white text-black outline-none 
               font-mono text-xl font-semibold focus:bg-gray-50 duration-200 border border-gray-200 w-full' ${className}`}
               {...props}
               id={id}
               ref={ref}
            />
         </div>
      );
   }
);

export default Input;
