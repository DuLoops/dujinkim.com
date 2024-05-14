import { Timestamp } from "firebase/firestore";

export enum BlogType {
  Software,
  Design,
  Photography,
  Art,
  Writing,
  Study
}

export  interface BlogPostType {
    card: {
      image: string[];
    };
    id: string;
    title: string;
    description: string;
    tags: BlogType[];
    link: string;
    date: string; // Timestampp
  }