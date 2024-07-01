import { colors } from "./colors";

export const features: TFeature[] = [
  {
    color: colors.blue,
    feature: "Sales Monitoring",
    title: "Simplify your sales monitoring",
    text: "Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. ",
    topics: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore ",
    ],
    image: {
      src: "sections/section-1.png",
      alt: "Preview",
      position: "right",
    },
  },
  {
    color: colors.green,
    feature: "Customer Support",
    title: "Get in touch with your customers",
    text: "Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. ",
    topics: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore ",
    ],
    image: {
      src: "sections/section-2.png",
      alt: "Preview",
      position: "left",
    },
  },
  {
    color: colors.pink,
    feature: "Growth Monitoring",
    title: "Monitor your site’s new subscribers ",
    text: "Stay on top of things and revamp your work process with our game-changing feature. Get a bird's eye view with our customizable dashboard. ",
    statistics: [
      {
        data: "100+",
        label: "Lorem ipsum dolor sit",
      },
      {
        data: "800+",
        label: "Conse adipiscing elit",
      }
    ],
    image: {
      src: "sections/section-3.png",
      alt: "Preview",
      position: "right",
    },
  },
]