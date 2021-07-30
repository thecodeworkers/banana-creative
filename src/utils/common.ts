export const normalizedArray = response => response ? response : []

export const normalized = response => response ? response : {}

export const actionObject = (type: string, payload = null) => ({ type, payload })

export const parseHour = (date) => {
  const newDate = new Date(date)
  let hours = newDate.getHours()
  let minutes: any = newDate.getMinutes()
  let ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? `0${minutes}` : minutes
  
  const strTime = `${hours}:${minutes} ${ampm}`
  return strTime
}

export const caracasParseHour = () => {
  const date = new Date();
  const timeZone =  date.toLocaleString('en-US', { timeZone: 'America/Caracas' })
  const caracasDate = new Date(timeZone)
  const parseDate = parseHour(caracasDate)
  return parseDate
}
