import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

const chars = '⣾⣽⣻⢿⡿⣟⣯⣷'.split('')

type Props = {
  text?: string
}

export function Loader(props: Props) {
  const { text } = props
  const [step, setStep] = useState<string>(chars[0])

  function spin() {
    const char = chars.shift()
    setStep(char)
    chars.push(char)
  }

  useEffect(() => {
    const timeout = setInterval(spin, 150)
    return () => clearInterval(timeout)
  }, [])

  return (
    <small class="fish-calendar-loader">
      {step} {text}
    </small>
  )
}
