import timelineData from '../data/timeline.json'

export const getTimelineItems = () =>
  [...timelineData].sort((left, right) => left.week - right.week)

export const getTimelineStatusTone = (status) => {
  switch (status?.toLowerCase()) {
    case 'done':
      return 'success'
    case 'in progress':
    case 'in-progress':
      return 'processing'
    case 'planned':
      return 'default'
    default:
      return 'warning'
  }
}
