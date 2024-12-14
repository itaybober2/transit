import moment from 'moment'

export type Gap = {
  siriTime: moment.Moment | null
  gtfsTime: moment.Moment | null
}
export type GapsList = Gap[]
