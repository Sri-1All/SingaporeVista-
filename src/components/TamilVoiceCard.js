import { useState } from "react";

function TamilVoiceCard({ person }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* ================= CARD ================= */}
      <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

        {/* CARD IMAGE */}
        <div className="h-80 bg-gray-100 overflow-hidden flex items-center justify-center">

          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
          />

        </div>

        {/* CARD CONTENT */}
        <div className="p-7">

          <p className="text-green-700 uppercase tracking-widest text-xs font-bold">
            {person.category}
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-2">
            {person.name}
          </h3>

          <p className="text-gray-600 leading-7 mt-4 text-justify text-[15px]">
            {person.shortBio}
          </p>

          {/* DISCOVER BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-6 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
          >
            Discover Their Story
           
          </button>

        </div>

      </div>


      {/* ================= MODAL ================= */}

      {showModal && (

        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setShowModal(false)}
        >

          {/* MODAL BOX */}
          <div
            className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 text-xl hover:bg-gray-100 transition"
            >
              ×
            </button>


            {/* ================= MODAL GRID ================= */}

            <div className="grid md:grid-cols-2">


              {/* LEFT IMAGE */}
              <div className="bg-gray-50 min-h-[400px] md:min-h-[600px] flex items-center justify-center p-6">

                <img
                  src={person.image}
                  alt={person.name}
                  className="max-w-full max-h-[550px] w-auto h-auto object-contain rounded-2xl"
                />

              </div>


              {/* RIGHT CONTENT */}
              <div className="p-8 md:p-12 flex flex-col justify-center">

                {/* CATEGORY */}
                <p className="text-green-700 uppercase tracking-[0.2em] text-xs font-bold">
                  {person.category}
                </p>


                {/* NAME */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
                  {person.name}
                </h2>


                {/* GREEN LINE */}
                <div className="w-14 h-1 bg-green-600 rounded-full mt-5 mb-7"></div>


                {/* STORY TITLE */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                     The Journey
                </h3>


                {/* STORY */}
                <p className="text-gray-600 leading-8 text-[15px]">
                  {person.story}
                </p>


                {/* SOURCE */}
                {person.source && (

                  <div className="mt-8">

                    <p className="text-sm text-gray-500 mb-2">
                      Want to learn more?
                    </p>

                    <a
                      href={person.source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition"
                    >
                      {person.source.name}
                      <span>↗</span>
                    </a>

                  </div>

                )}


               

              </div>

            </div>

          </div>

        </div>

      )}

    </>
  );
}

export default TamilVoiceCard;


// import { useState } from "react";

// function TamilVoiceCard({ person }) {
//   const [showModal, setShowModal] = useState(false);

//   return (
//     <>
//       {/* CARD */}
//       <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

//         <div className="h-72 overflow-hidden">
//           <img
//             src={person.image}
//             alt={person.name}
//             className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
//           />
//         </div>

//         <div className="p-5">

//           <span className="text-sm font-semibold text-green-700">
//             {person.category}
//           </span>

//           <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
//             {person.name}
//           </h3>

//           <p className="text-gray-600 text-sm leading-6 mb-5">
//             {person.shortBio}
//           </p>

//           {/* BUTTON */}
//           <button
//             onClick={() => setShowModal(true)}
//             className="mt-6 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
//           >
//             Discover Their Story  ↗
//           </button>

//         </div>
//       </div>


//       {/* MODAL */}
//       {showModal && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-5"
//           onClick={() => setShowModal(false)}
//         >

//           <div
//             className="relative bg-white rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >

//             {/* CLOSE */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition"
//             >
//               ✕
//             </button>


//             {/* IMAGE */}
//             <div className="h-72">
//               <img
//                 src={person.image}
//                 alt={person.name}
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>


//             {/* MODAL CONTENT */}
//             <div className="p-7 md:p-8">

//               <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">
//                 {person.category}
//               </span>

//               <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
//                 {person.name}
//               </h2>

//               <div className="w-12 h-1 bg-green-600 rounded-full mb-6"></div>

//               <h3 className="text-lg font-bold text-gray-900 mb-3">
//                 Their Story
//               </h3>

//               <p className="text-gray-600 leading-7">
//                 {person.story}
//               </p>


//               {/* SOURCE */}
//               {person.source && (
//                 <div className="mt-6 pt-5 border-t border-gray-200">

//                   <p className="text-sm text-gray-500 mb-2">
//                     Want to know more?
//                   </p>

//                   <a
//                     href={person.source.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-6 inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
//                   >
//                     {person.source.name} ↗
//                   </a>

//                 </div>
//               )}

//             </div>

//           </div>

//         </div>
//       )}
//     </>
//   );
// }

// export default TamilVoiceCard;

// /*function TamilVoiceCard({ person }) {
//   return (
//     <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

//       <div className="h-72 overflow-hidden">
//         <img
//           src={person.image}
//           alt={person.name}
//           className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
//         />
//       </div>

//       <div className="p-5">

//         <span className="text-sm font-semibold text-green-700">
//           {person.category}
//         </span>

//         <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
//           {person.name}
//         </h3>

//         <p className="text-gray-600 text-sm leading-6">
//           {person.shortBio}
//         </p>

//       </div>

//     </div>
//   );
// }

// export default TamilVoiceCard;
// */