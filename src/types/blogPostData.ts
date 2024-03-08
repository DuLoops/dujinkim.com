import { Timestamp } from "firebase/firestore";

export interface BlogPostData {
    card: {
      type: string;
      data: string;
    };
    title: string;
    description: string;
    type: string;
    tags: string[];
    link: string;
    date: Timestamp; // Assuming you want a proper Date type
  }