'use client'

import { createContext, useContext } from 'react';

import { Project } from '@/gql/graphql';

interface IProjectContext {
  project: Project | null;
}

const ProjectContext = createContext<IProjectContext | undefined>(undefined);

export function useProjectContext() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}

export const ProjectProvider = ({
  children,
  project
}: {
  children: React.ReactNode;
  project: Project;
}) => (
  <ProjectContext.Provider value={{ project }}>
    {children}
  </ProjectContext.Provider>
);


