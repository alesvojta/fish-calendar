import { h } from 'preact'
import { Fish, Props as FishProps } from '../shared/Fish'

type Props = {
  date: string
  troutIn: string
  troutOut: string
  fishes: FishProps[]
}

export function Calendar(props: Props) {
  const { date, troutIn, troutOut, fishes } = props
  const fishElements = fishes.map(fish => <Fish {...fish} key={fish.id} />)

  return (
    <table class="fish-calendar">
      <tr>
        <th colSpan={2}>{date}</th>
      </tr>
      <tr>
        <td colSpan={2}>Denní lov na revírech</td>
      </tr>
      <tr>
        <td>
          <b>Pstruhový</b>
        </td>
        <td>
          <b>Mimopstruhový</b>
        </td>
      </tr>
      <tr>
        <td>{troutIn}</td>
        <td>{troutOut}</td>
      </tr>
      <tr>
        <td colSpan={2}>Hájeny jsou</td>
      </tr>
      <tr>
        <th colSpan={2}>{fishElements}</th>
      </tr>
    </table>
  )
}
