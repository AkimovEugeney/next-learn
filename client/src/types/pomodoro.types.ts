import { IBase } from './root.types'

export interface IPomodoroRound extends IBase {
  isCompleted?: boolean
  totalSeconds: number
}

export interface IPomodoroSession extends IBase {
  isCompleted?: boolean
  rounds?: IPomodoroRound[]
}

export type TPomodoroSeesionState = Partial<Omit<IPomodoroSession, 'id' | 'createdAt' | 'updatedAt'>>

export type TPomodoroRoundState = Partial<Omit<IPomodoroRound, 'id' | 'createdAt' | 'updatedAt'>>