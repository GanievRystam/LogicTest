export interface Course {
    id: number;
    name: string;
    tags: string[];
    image: string;
    bgColor: string;
  }
  
  export interface Tag {
    name: string;
    selected: boolean;
  }