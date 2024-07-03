declare module "@/*"

declare type TLink = {
  label: string;
  href: string;
};

declare type TFeature = {
  color: string;
  feature: string;
  title: string;
  text: string;
  topics?: string[];
  statistics?: {
    data: string;
    label: string;
  }[];
  image: {
    src: string;
    alt: string;
    position: 'left' | 'right';
  };
};

declare type TPlan = {
  title: string;
  subtitle: string;
  price: string;
  buttonText: string;
  type: 'primary' | 'ghost';
  benefits?: string[];
  text?: string[];
}