export type FeatureItem = {
  n?: number;
  title: string;
  description: JSX.Element;
  showcase: ShowCase;
  buttonText: string;
  shadowColor?: string;
};

export type ShowCase =
  | { code: string; language: string }
  | { img: React.ComponentType<React.ComponentProps<"img">> };
