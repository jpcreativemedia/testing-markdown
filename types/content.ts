export type NewsArticle = {
  slug: string;
  metadata: {
    id: number;
    uuid: string;
    title: string;
    description?: string;
    category?: string;
    postDate?: string;
    featuredImage?: string;
  };
};

export type Project = {
  slug: string;
  metadata: {
    id: number;
    uuid: string;
    title: string;
    description?: string;
    category?: string;
    postDate?: string;
    featuredImage?: string;
  };
};

export type TeamMember = {
  slug: string;
  biography: React.ComponentType;
  metadata: {
    id: number;
    uuid: string;
    order: number;
    name: string;
    title?: string;
    department?: string;
    photo?: string;
  };
};
