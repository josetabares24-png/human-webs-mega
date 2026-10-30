import {
  projectSchema,
  workspaceSchema,
  type Project,
  type Site,
  type Version,
} from "./schema";
export const STORAGE_KEY = "human-webs.workspace.v1";
export function makeVersion(
  site: Site,
  label: string,
  source: Version["source"],
  durationMs = 0,
): Version {
  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    site,
    label: label.slice(0, 250),
    source,
    durationMs,
  };
}
export function newProject(
  site: Site,
  source: Version["source"],
  durationMs: number,
): Project {
  const now = new Date().toISOString();
  return projectSchema.parse({
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
    versions: [makeVersion(site, "Primera versión", source, durationMs)],
  });
}
export function addVersion(
  project: Project,
  site: Site,
  label: string,
  source: Version["source"],
  durationMs = 0,
): Project {
  return projectSchema.parse({
    ...project,
    updatedAt: new Date().toISOString(),
    versions: [
      ...project.versions.slice(-49),
      makeVersion(site, label, source, durationMs),
    ],
  });
}
export function readProjects(storage: Pick<Storage, "getItem">): Project[] {
  const raw = storage.getItem(STORAGE_KEY);
  return raw ? workspaceSchema.parse(JSON.parse(raw)).projects : [];
}
export function saveProjects(
  storage: Pick<Storage, "setItem">,
  projects: Project[],
): void {
  storage.setItem(
    STORAGE_KEY,
    JSON.stringify(workspaceSchema.parse({ schemaVersion: 1, projects })),
  );
}
