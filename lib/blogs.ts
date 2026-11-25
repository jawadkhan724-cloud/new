export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  body: { h?: string; p?: string; list?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "benefits-of-physiotherapy-at-home",
    title: "7 Benefits of Physiotherapy at Home",
    excerpt: "Why more patients in Rawalpindi and Islamabad choose home physiotherapy for recovery, elderly care and chronic pain.",
    image: "/images/physio-hero.jpg",
    date: "2026-11-10",
    category: "Home physiotherapy",
    body: [
      { p: "Travelling to a clinic is hard when you are in pain, recovering from surgery or caring for an elderly parent. Home physiotherapy brings a certified physiotherapist and the equipment you need to your door." },
      { h: "Why patients choose treatment at home" },
      { list: [
        "No travel or waiting rooms, which matters most after surgery or a stroke.",
        "Treatment in the place you actually live, so exercises fit your daily routine.",
        "One-to-one attention for the full session.",
        "Family members can learn how to help safely.",
        "Female physiotherapists available for women who prefer them.",
        "Flexible timings, including evenings and weekends.",
        "Lower risk of infection for elderly and post-operative patients.",
      ] },
      { h: "Who benefits most" },
      { p: "Home sessions suit elderly patients, people recovering from joint replacement or fractures, stroke and neurological patients, and anyone whose pain makes travel difficult." },
      { h: "Getting started" },
      { p: "Message us on WhatsApp with your condition and area. We will arrange an assessment at a time that suits you and build a treatment plan around your goals." },
    ],
  },
  {
    slug: "recovery-after-knee-replacement",
    title: "Recovering After Knee Replacement: What to Expect",
    excerpt: "A simple guide to the first weeks after knee surgery and how physiotherapy helps you walk confidently again.",
    image: "/images/physio-leg-stretch.jpg",
    date: "2026-10-28",
    category: "Post-operative care",
    body: [
      { p: "Knee replacement surgery relieves long-term pain, but the result depends a great deal on rehabilitation. Physiotherapy helps you regain movement, strength and confidence step by step." },
      { h: "The first two weeks" },
      { p: "Early sessions focus on controlling swelling, gentle bending and straightening of the knee, and walking safely with a walker or crutches." },
      { h: "Weeks three to six" },
      { list: [
        "Strengthening the thigh and hip muscles.",
        "Improving knee bend for stairs and sitting.",
        "Balance training to reduce the risk of falls.",
        "Moving from a walker to a stick, then walking unaided.",
      ] },
      { h: "Tips for a smoother recovery" },
      { list: [
        "Do your home exercises every day, even when sessions are not scheduled.",
        "Use ice after exercise if your physiotherapist recommends it.",
        "Report sudden swelling, redness or fever to your doctor straight away.",
      ] },
      { p: "Starting physiotherapy before surgery also helps. Stronger muscles going in usually means a faster recovery afterwards." },
    ],
  },
  {
    slug: "simple-exercises-for-lower-back-pain",
    title: "Simple Habits to Ease Lower Back Pain",
    excerpt: "Everyday changes that reduce back pain, and the signs that it is time to see a physiotherapist.",
    image: "/images/physio-exercise.jpg",
    date: "2026-10-12",
    category: "Pain relief",
    body: [
      { p: "Lower back pain is one of the most common reasons people visit a physiotherapist. Small daily habits make a real difference, and a proper assessment finds the cause rather than just treating the pain." },
      { h: "Habits that help" },
      { list: [
        "Keep moving: short walks are usually better than long bed rest.",
        "Change position every 30 to 45 minutes when sitting.",
        "Bend your knees, not your back, when lifting.",
        "Set up your desk so the screen is at eye level.",
        "Sleep on a supportive mattress, with a pillow between or under your knees.",
      ] },
      { h: "When to see a physiotherapist" },
      { list: [
        "Pain lasting more than two weeks.",
        "Pain spreading down one or both legs (sciatica).",
        "Numbness, tingling or weakness in the legs.",
        "Pain that keeps coming back.",
      ] },
      { p: "Seek urgent medical help if back pain comes with loss of bladder or bowel control, or follows a fall or injury." },
      { p: "Our physiotherapists assess your posture, movement and strength, then combine hands-on treatment with exercises you can continue at home." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const fmtDate = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
