import { IBase } from './root.types'

export enum EnumTaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high',
}

export interface ITask extends IBase {
  name: string
  priority?: EnumTaskPriority
  isCompleted: boolean
}

export type TTaskFormState = Partial<Omit<ITask, 'id' | 'updatedAt'>>