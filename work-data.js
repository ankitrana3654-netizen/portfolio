/* ==========================================================
   YOUR WORK SHOWCASE
   Add items to any list below and they appear on the Work page
   automatically. Empty lists show tidy "Add …" placeholder tiles.

   HOW TO ADD AN ITEM
   1. Put your image files in the matching folder, e.g. assets/work/branding/
   2. Copy an example line, remove the leading //, and edit the values.

   FIELDS YOU CAN USE
   title     Project name (required)
   desc      One short line: what it is + tool, e.g. "Landing page · Figma"
   image     One image file
   images    Several images; the first is the cover, visitors click through the rest
   link      Optional button: Figma prototype, live site, Behance post…
   linkText  Optional custom label for that button
   youtube   (videos only) Any YouTube link; the thumbnail is fetched automatically

   IMAGE TIPS
   • Export as .jpg or .webp, about 1600px wide (mobile screens ~800px wide)
   • Website designs: export the FULL page; it scrolls inside the preview
   • Keep each file under ~500 KB so the page stays fast
   ========================================================== */
window.WORK = {

  // FEATURED BRAND PROJECT, shown at the top of "Branding & logos".
  // Export these four images from Figma (about 1600px wide) and save them
  // with exactly these names; each board tile fills in automatically.
  featured: {
    name: "VocsNova",
    tag: "Brand identity + motion",
    summary: "Brand identity for VocsNova, a chat and voice communication brand: logo, a 10-page brand guidelines book and AI-assisted brand films.",
    role: "Brand & motion designer",
    deliverables: ["Logo & variants", "10-page brand guidelines", "Colour system", "Typography", "3 brand films"],
    tools: ["Figma", "Midjourney", "Premiere Pro", "After Effects"],
    process: [
      ["Logo", "Primary variants for dark and light backgrounds, with a 98px minimum size"],
      ["Colour", "5 core colours, 10 extended colours, shade and gradient palettes"],
      ["Typography", "Poppins Display for headlines, Jura for a technical feel"],
      ["Films", "Visuals in Midjourney, edited in Premiere Pro, motion in After Effects"]
    ],
    // Board tiles are drawn from the real guideline values. To use an exported
    // Figma image instead, add  image: "assets/work/branding/your-file.jpg"  to a tile.
    board: [
      { label: "Logo · dark & light", image: "assets/work/branding/vocsnova-logo-dark.jpg",
        images: ["assets/work/branding/vocsnova-logo-dark.jpg", "assets/work/branding/vocsnova-logo-light.jpg"] },
      { label: "Core palette", kind: "palette", colors: [
        ["Electric Violet", "#7F22FE"], ["Neon Purple", "#9810FA"], ["Electric Indigo", "#4B00ED"], ["Bright Azure", "#575CF7"], ["Cyan Blue", "#0092B8"] ] },
      { label: "Typography", kind: "type", font: "Poppins", weights: ["Regular", "Medium", "SemiBold"] },
      { label: "Shades", kind: "shades", colors: ["#7F22FE", "#4B00ED", "#0092B8"] }
    ]
  },

  // Website UI designs: full-page exports from Figma
  websites: [
    { title: "Lee County, Virginia", desc: "County government website · bold editorial type, task-first services",
      cover: "assets/work/websites/lee-county-cover.jpg", image: "assets/work/websites/lee-county.jpg",
      link: "https://designdigitalcompunnel.github.io/LeeCounty/", linkText: "View live prototype" },
    { title: "PolicyWise", desc: "Research & policy nonprofit · audience pathways, impact stats, stories",
      cover: "assets/work/websites/policywise-cover.jpg", image: "assets/work/websites/policywise.jpg",
      link: "https://www.figma.com/proto/gqqWtRMrjhp0kszKHHUyKt/All-Designs?node-id=236-19633&t=XszITrGrybenebr6-0&scaling=scale-down-width&content-scaling=fixed&page-id=236%3A2", linkText: "View prototype" },
    { title: "Idaho AEYC", desc: "Early childhood nonprofit · colour-coded pathways, regional impact map",
      cover: "assets/work/websites/idaho-aeyc-cover.jpg", image: "assets/work/websites/idaho-aeyc.jpg",
      link: "https://www.figma.com/proto/gqqWtRMrjhp0kszKHHUyKt/All-Designs?node-id=236-16193&t=XszITrGrybenebr6-0&scaling=scale-down-width&content-scaling=fixed&page-id=236%3A2", linkText: "View prototype" },
    // { title: "Travel booking homepage", desc: "Landing page · Figma", image: "assets/work/websites/travel-home.jpg", link: "https://www.figma.com/proto/..." },
  ],

  // Mobile app UI: 3–6 key screens per app, as a set
  mobile: [
    { title: "Texas Community Justice Worker", desc: "Secure sign-in for a legal-aid platform · SSO option, trust cues",
      image: "assets/work/mobile/texas-cjw.webp", link: "https://cost-blob-04061667.figma.site", linkText: "View live prototype" },
    { title: "Show My Fashion", desc: "Fashion shopping app · category browse, sale banner, product cards",
      image: "assets/work/mobile/show-my-fashion.webp",
      link: "https://www.figma.com/proto/gqqWtRMrjhp0kszKHHUyKt/All-Designs?node-id=4-3251&t=XszITrGrybenebr6-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1", linkText: "View prototype" },
    { title: "Sikh Regiment", desc: "Battalion heritage app · dark theme, card navigation, tab bar",
      image: "assets/work/mobile/sikh-regiment.webp",
      link: "https://www.figma.com/proto/gqqWtRMrjhp0kszKHHUyKt/All-Designs?node-id=21-6612&t=XszITrGrybenebr6-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1", linkText: "View prototype" },
    { title: "Sahkar Taxi", desc: "Driver app onboarding · welcome screen with key benefits",
      image: "assets/work/mobile/sahkar-taxi.webp", link: "#", linkText: "View prototype",
      unavailable: "The Sahkar Taxi prototype link isn't available right now. Please check back soon." },
    // { title: "Fitness tracker app", desc: "iOS concept · 5 screens", images: ["assets/work/mobile/fit-1.jpg", "assets/work/mobile/fit-2.jpg", "assets/work/mobile/fit-3.jpg"] },
  ],

  // Wireframes & UX: sketches, low/mid-fi wireframes, user flows, sitemaps
  wireframes: [
    { title: "NDI · Dashboard + AI panel", desc: "Annotated wireframe + user flow · mapped from the final design",
      images: ["assets/work/wireframes/ndi-dashboard-wireframe.jpg", "assets/work/wireframes/ndi-user-flow.jpg"] },
    { title: "Lee County · Homepage structure", desc: "Section-by-section page structure · mapped from the final design",
      image: "assets/work/wireframes/lee-county-wireframe.jpg" },
    { title: "Show My Fashion · Home screen", desc: "Annotated mobile wireframe · mapped from the final design",
      image: "assets/work/wireframes/show-my-fashion-wireframe.jpg" },
    // { title: "Clinic booking flow", desc: "User flow + mid-fi wireframes", images: ["assets/work/wireframes/flow.jpg", "assets/work/wireframes/wire-1.jpg"] },
  ],

  // Live websites you designed and built (WordPress etc.)
  developed: [
    { title: "National Solar Observatory", desc: "Science organisation · dark immersive theme, research and telescope stories · Built with Figma Sites",
      cover: "assets/work/developed/nso-cover.jpg", image: "assets/work/developed/nso.jpg",
      link: "https://admin-eraser-75540761.figma.site/" },
    { title: "Village of Schaumburg", desc: "Municipal website · search-first hero, task-based quick access",
      cover: "assets/work/developed/schaumburg-cover.jpg", image: "assets/work/developed/schaumburg.jpg",
      link: "https://designdigitalcompunnel.github.io/-VILLAGEOFSCHAUMBURG/index.html" },
    { title: "City of Summerside", desc: "City website · task-first services, department directory",
      cover: "assets/work/developed/summerside-cover.jpg", image: "assets/work/developed/summerside.jpg",
      link: "https://designdigitalcompunnel.github.io/summerside/index.html" },
    // { title: "Clinic website", desc: "Designed & built in WordPress", image: "assets/work/developed/clinic.jpg", link: "https://example.com" },
  ],

  // Branding & logos: cover = logo on colour, then brand board and mockups
  branding: [
    { title: "EZFAR", desc: "Government contract compliance · Capitol dome in a shield with a check mark, signalling trust and approval",
      image: "assets/work/branding/ezfar.jpg" },
    { title: "StyleVista", desc: "Fashion e-commerce · “SV” monogram built into a shopping cart, green-to-blue gradient badge",
      image: "assets/work/branding/stylevista.jpg" },
    { title: "AI Sangrah", desc: "India's AI data ecosystem · tricolour leaves and Ashoka Chakra flowing into data pixels",
      image: "assets/work/branding/ai-sangrah.jpg" },
    { title: "Sahkar Taxi", desc: "Cooperative taxi service · location pin and car combined into one mark, matched to the driver app",
      image: "assets/work/branding/sahkar-taxi-logo.jpg" },
    // { title: "Brew & Co. café", desc: "Logo + brand identity", images: ["assets/work/branding/brew-logo.jpg", "assets/work/branding/brew-board.jpg", "assets/work/branding/brew-mockup.jpg"] },
  ],

  // Social media creatives: 4:5 or square posts; carousels as image sets
  social: [
    { title: "AI fraud detection", desc: "Lead-gen post · gradient headline + AI visual", image: "assets/work/social/ai-fraud.jpg" },
    { title: "AI strategy guide", desc: "Compunnel × Microsoft · 2 layout variations", images: ["assets/work/social/ai-strategy-1.jpg", "assets/work/social/ai-strategy-2.jpg"] },
    { title: "Enterprise GenAI guide", desc: "Compunnel × Microsoft · glass card · 2 variations", images: ["assets/work/social/genai-guide-1.jpg", "assets/work/social/genai-guide-2.jpg"] },
    { title: "Banking automation", desc: "Service campaign · 3D growth visual", image: "assets/work/social/banking-automation.jpg" },
    { title: "GenAI on Azure eBook", desc: "eBook promotion · split layout", image: "assets/work/social/genai-azure-ebook.jpg" },
    { title: "Business intelligence services", desc: "Service promo · hexagon frame layout", image: "assets/work/social/bi-insights.jpg" },
    { title: "Transform your business with AI", desc: "Compunnel × Microsoft · eBook CTA", image: "assets/work/social/transform-ai.jpg" },
    { title: "AI isn't magic. It's method.", desc: "Compunnel × Microsoft · eBook campaign", image: "assets/work/social/ai-method.jpg" },
    // { title: "Diwali campaign", desc: "Instagram carousel", images: ["assets/work/social/diwali-1.jpg", "assets/work/social/diwali-2.jpg"] },
  ],

  // Videos: paste a YouTube link (thumbnail appears automatically)
  videos: [
    { title: "VocsNova · Film 01", desc: "Midjourney, Premiere Pro, After Effects", youtube: "https://www.youtube.com/watch?v=vfv_Q30Ja68" },
    { title: "VocsNova · Film 02", desc: "Midjourney, Premiere Pro, After Effects", youtube: "https://www.youtube.com/watch?v=EJDCWVvgnik" },
    { title: "VocsNova · Film 03", desc: "Midjourney, Premiere Pro, After Effects", youtube: "https://www.youtube.com/watch?v=HdTtfBZCWGU" },
    // { title: "Product promo", desc: "After Effects · 30s", youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
    // { title: "Brand reel", desc: "Premiere Pro", youtube: "https://youtu.be/XXXXXXXXXXX" },
  ]
};
