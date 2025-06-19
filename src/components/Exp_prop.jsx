// const Exp_prop = (props) => {
//   return (
//     <>
    
//       <div className="shadow-2xl rounded-3xl border-2 bg-[#e1e1e1] dark:bg-transparent border-[#00040f] h-[490px] max-sm:h-[450px] p-8 hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]">
        
//         <div className="HEADER flex ">
//           <div className=" max-w-[300px] pr-4 mr-50">
//             <img src={props.img} alt="" />
//             {props.link && (
//     <div className="mt-4">
//       <a
//         href={props.link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="inline-block whitespace-nowrap px-4 py-2 text-white text-sm bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:opacity-90 transition"
//       >
//         View Certificate
//       </a>
//     </div>
//   )}
//           </div>
          

//           <div className="max-w-[125px]">
//             <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold ">
//               {props.title}
//             </h1>
//             <p className="text-[#00040f] dark:text-white text-lg my-2">
//               {props.subtitle}
//             </p>
//             <p className="italic text-sm text-slate-700 dark:text-slate-300">
//               {props.date}
//             </p>
//           </div>
//         </div>
        
//         <p className="text-sm text-slate-700 dark:text-slate-300 mt-5 p-2 leading-10">
//           {props.para}
//         </p>
//         {/* {props.link && (
//           <div className="mt-6">
//             <a
//               href={props.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-4 py-2 text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:opacity-90 transition"
//             >
//               View Certificate
//             </a>
//           </div>
//         )} */}
        
//       </div>
      
//     </>
//   );
// };
// export default Exp_prop;






// const Exp_prop = (props) => {
//   return (
//     <>
//       <div className="shadow-2xl rounded-3xl border-2 bg-[#e1e1e1] dark:bg-transparent border-[#00040f] h-[520px] max-sm:h-[480px] p-8 w-full hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]">
        
//         <div className="HEADER flex">
          
//           {/* Left Side Image + Subtitle + Date + Button */}
//           <div className="max-w-[300px] pr-4 mr-50 flex flex-col items-center text-center">
//             <img src={props.img} alt="" />

//             {/* Subtitle + Date in one line */}
//             <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
//               <p className="text-[#00040f] dark:text-white text-lg">{props.subtitle}</p>
//               <p className="italic text-sm text-slate-700 dark:text-slate-300">{props.date}</p>
//             </div>

//             {/* View Certificate Button */}
//             {props.link && (
//               <div className="mt-4">
//                 <a
//                   href={props.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block whitespace-nowrap px-4 py-2 text-white text-sm bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:opacity-90 transition"
//                 >
//                   View Certificate
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Right Side Title */}
//           <div className="max-w-[220px] flex items-start">
//             <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold break-words whitespace-normal">
//               {props.title}
//             </h1>
//           </div>
//         </div>

//         {/* Description */}
//         <p className="text-sm text-slate-700 dark:text-slate-300 mt-5 p-2 leading-10">
//           {props.para}
//         </p>
//       </div>
//     </>
//   );
// };
// export default Exp_prop;


const Exp_prop = (props) => {
  return (
    <>
      <div className="shadow-2xl rounded-3xl border-2 bg-[#e1e1e1] dark:bg-transparent border-[#00040f] h-[520px] max-sm:h-[480px] p-8 w-full hover:bg-gradient-to-tl from-[#e1e1e1] to-[#fff] dark:from-[#00040F] dark:to-[#0B274C]">
        
        <div className="HEADER flex">
          
          {/* Left Side Image */}
          <div className="max-w-[300px] pr-4 mr-50 flex flex-col items-center text-center">
            <img src={props.img} alt="" />

            {/* View Certificate Button */}
            {props.link && (
              <div className="mt-4">
                <a
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block whitespace-nowrap px-4 py-2 text-white text-sm bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:opacity-90 transition"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>

          {/* Right Side Title, Subtitle, Date */}
          <div className="max-w-[220px] flex flex-col items-start">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r inline from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-2xl tracking-wide font-semibold break-words whitespace-normal">
              {props.title}
            </h1>

            {/* Subtitle */}
            <p className="text-[#00040f] dark:text-white text-lg mt-2">
              {props.subtitle}
            </p>

            {/* Date */}
            <p className="italic text-sm text-slate-700 dark:text-slate-300 mt-1">
              {props.date}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-700 dark:text-slate-300 mt-5 p-2 leading-10">
          {props.para}
        </p>
      </div>
    </>
  );
};
export default Exp_prop;



