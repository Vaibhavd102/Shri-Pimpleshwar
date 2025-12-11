// import { useState } from "react";
// import { X, ChevronLeft, ChevronRight } from "lucide-react";

// import templeExterior from "@/assets/gallery/temple-exterior.jpg";
// import festival from "@/assets/gallery/festival.jpg";
// import devotees from "@/assets/gallery/devotees.jpg";
// import aarti from "@/assets/gallery/aarti.jpg";
// import offerings from "@/assets/gallery/offerings.jpg";
// import templeInterior from "@/assets/gallery/temple-interior.jpg";

// const galleryImages = [
//   { src: templeExterior, alt: "Temple Exterior", category: "Temple" },
//   { src: templeInterior, alt: "Temple Interior", category: "Temple" },
//   { src: aarti, alt: "Aarti Ceremony", category: "Rituals" },
//   { src: festival, alt: "Festival Celebration", category: "Festivals" },
//   { src: devotees, alt: "Devotees in Prayer", category: "Devotees" },
//   { src: offerings, alt: "Sacred Offerings", category: "Rituals" },
// ];

// const GallerySection = () => {
//   const [lightboxOpen, setLightboxOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const openLightbox = (index: number) => {
//     setCurrentIndex(index);
//     setLightboxOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeLightbox = () => {
//     setLightboxOpen(false);
//     document.body.style.overflow = "auto";
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
//   };

//   const goToNext = () => {
//     setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Escape") closeLightbox();
//     if (e.key === "ArrowLeft") goToPrevious();
//     if (e.key === "ArrowRight") goToNext();
//   };

//   return (
//     <section id="gallery" className="py-20 bg-secondary/30">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">
//             Photo Gallery
//           </h2>
//           <div className="w-24 h-1 bg-accent mx-auto mb-6" />
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Glimpses of divine moments, sacred rituals, and joyous celebrations at our temple
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryImages.map((image, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
//               onClick={() => openLightbox(index)}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="absolute bottom-0 left-0 right-0 p-4">
//                   <span className="text-xs text-accent uppercase tracking-wider">
//                     {image.category}
//                   </span>
//                   <h3 className="text-foreground font-display text-lg">
//                     {image.alt}
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {lightboxOpen && (
//         <div
//           className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center"
//           onClick={closeLightbox}
//           onKeyDown={handleKeyDown}
//           tabIndex={0}
//           role="dialog"
//           aria-modal="true"
//         >
//           {/* Close Button */}
//           <button
//             onClick={closeLightbox}
//             className="absolute top-4 right-4 z-50 p-2 text-foreground/70 hover:text-foreground transition-colors"
//             aria-label="Close lightbox"
//           >
//             <X size={32} />
//           </button>

//           {/* Previous Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               goToPrevious();
//             }}
//             className="absolute left-4 z-50 p-2 text-foreground/70 hover:text-foreground transition-colors"
//             aria-label="Previous image"
//           >
//             <ChevronLeft size={48} />
//           </button>

//           {/* Image Container */}
//           <div
//             className="max-w-5xl max-h-[85vh] mx-4"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <img
//               src={galleryImages[currentIndex].src}
//               alt={galleryImages[currentIndex].alt}
//               className="max-w-full max-h-[85vh] object-contain rounded-lg animate-fade-in"
//             />
//             <div className="text-center mt-4">
//               <span className="text-accent text-sm uppercase tracking-wider">
//                 {galleryImages[currentIndex].category}
//               </span>
//               <h3 className="text-foreground font-display text-xl">
//                 {galleryImages[currentIndex].alt}
//               </h3>
//               <p className="text-muted-foreground text-sm mt-1">
//                 {currentIndex + 1} / {galleryImages.length}
//               </p>
//             </div>
//           </div>

//           {/* Next Button */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               goToNext();
//             }}
//             className="absolute right-4 z-50 p-2 text-foreground/70 hover:text-foreground transition-colors"
//             aria-label="Next image"
//           >
//             <ChevronRight size={48} />
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default GallerySection;