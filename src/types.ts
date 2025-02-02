export enum Tech {
  TypeScript = "TypeScript",
  ExpressJS = "ExpressJS",
  NodeJS = "NodeJS",
  React = "React",
  Angular = "Angular",
  Vue = "Vue",
}

export enum ContactType {
  Github = "github",
  Email = "email",
  LinkedIn = "linkedin",
  Phone = "phone",
}

export enum ContactIcon {
  Github = "GitHub",
  Email = "Email",
  LinkedIn = "LinkedIn",
  Phone = "Phone",
}

export interface DescriptionProps {
  title: string
  description: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  link: string;
  tech: Tech[];
}

export interface Contact {
  type: ContactType[];
  value: string;
  displayName?: string;
  icon?: ContactIcon;
}



export type ProjectWithoutId = Omit<Project, 'id'>;