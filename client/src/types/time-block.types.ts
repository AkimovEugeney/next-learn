import { IBase } from './root.types'

export interface ITimeBlock extends IBase {
  name: string
  color?: string
  duration: number
  order: number
}

export type TTimeBlockFormState = Partial<Omit<ITimeBlock, 'createdAt' | 'updatedAt'>>