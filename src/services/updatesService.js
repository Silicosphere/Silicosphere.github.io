import updatesData from '../data/updates.json'

export const getUpdates = () =>
  [...updatesData].sort((left, right) => new Date(right.date) - new Date(left.date))

export const getLatestUpdates = (count = 3) => getUpdates().slice(0, count)

export const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
