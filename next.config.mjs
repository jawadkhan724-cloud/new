/** Keep the original homephysiopro.com URLs; send short/new-style paths to them (301). */
const old = {
  "/services/physiotherapy-home-services": "/physiotherapy-home-services-in-rawalpindi-and-islamabad/",
  "/services/pre-post-operative-physiotherapy": "/pre-and-post-operative-physiotherapy/",
  "/services/women-health-physiotherapy": "/women-health-physiotherapy/",
  "/services/pediatric-physiotherapy": "/pediatric-physiotherapy-in-rawalpindi-and-islamabad/",
  "/services/neurological-rehabilitation": "/neurological-rehabilitation-in-rawalpindi-and-islamabad/",
  "/services/hijama-cupping-therapy": "/hijama-cupping-center-in-rawalpindi-and-islamabad/",
  "/shop/soothex-pain-relief-oil": "/product/soothex-pain-relief-oil/",
  "/shop": "/product/soothex-pain-relief-oil/",
  "/product-category/liquid": "/product/soothex-pain-relief-oil/",
  "/about": "/about-us/",
  "/contact": "/contact-us/",
  "/blog": "/blogs/",
};
export default {
  trailingSlash: true,
  async redirects() {
    return Object.entries(old).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};
