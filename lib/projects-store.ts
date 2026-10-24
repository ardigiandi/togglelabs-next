import { projects as seed } from "@/data/projects";

export type Project = (typeof seed)[number];
export type NewProject = Omit<Project, "id">;


const db: Project[] = [...seed];

export async function getProjects(): Promise<Project[]> {
  return db;
}

export async function addProject(data: NewProject): Promise<Project> {
  const id = db.length ? Math.max(...db.map((p) => p.id)) + 1 : 1;
  const project: Project = { id, ...data };
  db.push(project);
  return project;
}