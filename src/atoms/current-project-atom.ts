import { atom } from 'jotai';

import { ApprovedProject } from '@/core/types';

export const currentProjectAtom = atom<ApprovedProject | null>(null);
