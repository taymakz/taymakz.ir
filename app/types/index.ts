export interface ProjectType {
    media: {
        url: string;
        alt?: string
    };
    seo?: {
        ariaLabel: string;
        title: string;
    }
    link: string;
    title: string;
    date: string;
    stacks: string[];
    github?: {
        url: string,
        text: string
    }
}
