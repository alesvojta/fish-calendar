import { h } from 'preact'

export type Props = {
  id: number | string
  name: string
  image: string
}

export function Fish(props: Props) {
  const { name, image } = props
  return (
    <div class="fish-calendar-item">
      <img src={image} alt={name} />
      <span>{name}</span>
    </div>
  )
}
