import { h } from 'preact'
import { useFetch } from './App/useFetch'
import { Calendar } from './App/Calendar'
import { Props } from './shared/Fish'
import { Loader } from './App/Loader'

type AppProps = {
  dataUrl: string
}

type DataType = {
  days: string[]
  fishes: Props[]
  troutIn: string[]
  troutOut: string[]
  calendar: Array<[]>
} | null

export function App({ dataUrl }: AppProps) {
  const { isLoading, data } = useFetch<DataType>(dataUrl)

  if (isLoading && !data) {
    return <Loader text="Načítám ryby..." />
  }

  if (data) {
    const date = new Date()
    const month = date.getMonth()
    const dateStr = data.days[date.getDay()] + ' ' + date.toLocaleDateString()
    const troutIn = data.troutIn[month]
    const troutOut = data.troutOut[month]
    const fishes_ = data.calendar[month][date.getDate()] as Array<number>
    const fishes = fishes_.map(id => data.fishes.find(fish => fish.id === id))

    return <Calendar date={dateStr} troutIn={troutIn} troutOut={troutOut} fishes={fishes} />
  }
}
