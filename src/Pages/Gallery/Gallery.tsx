import { useState } from "react";
import { Box } from "@mui/material";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import PageBanner from "../../Pages/Pagebanner/PageBanner";
import CloseIcon from "@mui/icons-material/Close";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import "./Gallery.scss";
import FloatingContact from "../../Component/FloatingContact/FloatingContact";

// TEMPORARY placeholder photos (free-to-use Pexels stock, license-safe) —
// replace each src with your own event photos whenever you have them ready.
// Local path convention to switch to later: /images/gallery/<category>/<n>.jpg
// Every category below has 6+ images so no tab ever looks empty.
const galleryImages = [
  // ---------------- Wedding Gallery ----------------
  { src: "https://images.pexels.com/photos/27635496/pexels-photo-27635496.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Gallery" },
  { src: "https://images.pexels.com/photos/18925087/pexels-photo-18925087.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Gallery" },
  { src: "https://images.pexels.com/photos/13042430/pexels-photo-13042430.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Gallery" },
  { src: "https://images.pexels.com/photos/33485973/pexels-photo-33485973.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Gallery" },
  { src: "https://images.pexels.com/photos/20626529/pexels-photo-20626529.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Gallery" },
  { src: "https://images.pexels.com/photos/19670544/pexels-photo-19670544.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Gallery" },

  // ---------------- Wedding Stage ----------------
  { src: "https://images.pexels.com/photos/13156145/pexels-photo-13156145.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Stage" },
  { src: "https://images.pexels.com/photos/33417234/pexels-photo-33417234.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Stage" },
  { src: "https://images.pexels.com/photos/32073438/pexels-photo-32073438.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Stage" },
  { src: "https://images.pexels.com/photos/6266941/pexels-photo-6266941.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Stage" },
  { src: "https://images.pexels.com/photos/10888608/pexels-photo-10888608.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Stage" },
  { src: "https://images.pexels.com/photos/29002703/pexels-photo-29002703.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding Stage" },

  // ---------------- Haldi ----------------
  { src: "https://images.pexels.com/photos/37331187/pexels-photo-37331187.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Haldi" },
  { src: "https://images.pexels.com/photos/20465888/pexels-photo-20465888.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Haldi" },
  { src: "https://images.pexels.com/photos/30706025/pexels-photo-30706025.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Haldi" },
  { src: "https://images.pexels.com/photos/33508493/pexels-photo-33508493.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Haldi" },
  { src: "https://images.pexels.com/photos/30706032/pexels-photo-30706032.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Haldi" },
  { src: "https://images.pexels.com/photos/30705999/pexels-photo-30705999.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Haldi" },

  // ---------------- Mehandi ----------------
  { src: "https://images.pexels.com/photos/32315685/pexels-photo-32315685.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mehandi" },
  { src: "https://images.pexels.com/photos/12872538/pexels-photo-12872538.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mehandi" },
  { src: "https://images.pexels.com/photos/28496968/pexels-photo-28496968.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mehandi" },
  { src: "https://images.pexels.com/photos/5484966/pexels-photo-5484966.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mehandi" },
  { src: "https://images.pexels.com/photos/16814609/pexels-photo-16814609.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mehandi" },
  { src: "https://images.pexels.com/photos/7176352/pexels-photo-7176352.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mehandi" },

  // ---------------- Wedding DJ Night ----------------
  { src: "https://images.pexels.com/photos/28123410/pexels-photo-28123410.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding DJ Night" },
  { src: "https://images.pexels.com/photos/15964956/pexels-photo-15964956.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding DJ Night" },
  { src: "https://images.pexels.com/photos/30146471/pexels-photo-30146471.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding DJ Night" },
  { src: "https://images.pexels.com/photos/15964962/pexels-photo-15964962.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding DJ Night" },
  { src: "https://images.pexels.com/photos/32142659/pexels-photo-32142659.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding DJ Night" },
  { src: "https://images.pexels.com/photos/13434438/pexels-photo-13434438.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Wedding DJ Night" },

  // ---------------- Mandap ----------------
  { src: "https://images.pexels.com/photos/33417236/pexels-photo-33417236.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mandap" },
  { src: "https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mandap" },
  { src: "https://images.pexels.com/photos/36943247/pexels-photo-36943247.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mandap" },
  { src: "https://images.pexels.com/photos/11255470/pexels-photo-11255470.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mandap" },
  { src: "https://images.pexels.com/photos/12718058/pexels-photo-12718058.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mandap" },
  { src: "https://images.pexels.com/photos/33508474/pexels-photo-33508474.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Mandap" },

  // ---------------- Night Wedding Decoration ----------------
  { src: "https://images.pexels.com/photos/36943223/pexels-photo-36943223.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Night Wedding Decoration" },
  { src: "https://images.pexels.com/photos/36943227/pexels-photo-36943227.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Night Wedding Decoration" },
  { src: "https://images.pexels.com/photos/36943224/pexels-photo-36943224.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Night Wedding Decoration" },
  { src: "https://images.pexels.com/photos/36943219/pexels-photo-36943219.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Night Wedding Decoration" },
  { src: "https://images.pexels.com/photos/30146380/pexels-photo-30146380.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Night Wedding Decoration" },
  { src: "https://images.pexels.com/photos/9941146/pexels-photo-9941146.jpeg?auto=compress&cs=tinysrgb&w=1200", category: "Night Wedding Decoration" },
];

const categories = [
  "All",
  "Wedding Gallery",
  "Wedding Stage",
  "Haldi",
  "Mehandi",
  "Wedding DJ Night",
  "Mandap",
  "Night Wedding Decoration",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Navbar />
      <PageBanner title="Gallery" breadcrumb="Gallery" />

      <Box className="gallery_page">
        <Box className="row">
          <Box className="gallery_intro">
            <span className="eyebrow">Our Gallery</span>
            <h2>A Story Told In Every Detail</h2>
            <p>
              Every celebration we craft carries its own character — browse moments
              from weddings, haldi, mehandi, sangeet nights, and mandap decor we've
              brought to life.
            </p>
          </Box>

          <Box className="gallery_filters">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={activeCategory === cat ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </Box>

          {/* Uniform grid — every tile is the same aspect ratio (object-fit: cover),
              so rows always line up cleanly no matter how tall/short the source photo is. */}
          <Box className="gallery_grid">
            {filteredImages.map((img, index) => (
              <Box
                className="gallery_item"
                key={`${activeCategory}-${index}`}
                onClick={() => setLightboxImg(img.src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setLightboxImg(img.src);
                }}
              >
                <img src={img.src} alt={`${img.category} setup by BalaJi Tent House`} loading="lazy" />
                <Box className="gallery_item_overlay">
                  <ZoomInIcon />
                  <span>{img.category}</span>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Lightbox — click any photo to zoom, click backdrop or ✕ to close */}
      {lightboxImg && (
        <Box className="lightbox_overlay" onClick={() => setLightboxImg(null)}>
          <button className="lightbox_close" onClick={() => setLightboxImg(null)} aria-label="Close">
            <CloseIcon />
          </button>
          <img
            src={lightboxImg}
            alt="Zoomed event decor by BalaJi Tent House"
            onClick={(e) => e.stopPropagation()}
          />
        </Box>
      )}

      <Footer />
      <FloatingContact />
    </>
  );
}

export default Gallery;