import { useContext } from 'react'
import { CountDown } from './components/CountDown'
import { StatsBlock } from './components/StatsBlock'
import { ResultsContext } from '../TypingTest/TypingTest'

interface StatsProps{
  time:number,
  start:boolean
}

export const Stats = ({time,start}:StatsProps) => {
  const {results, setResults} = useContext(ResultsContext)


  return (
    <div>
      {
        results.isFinished &&
        <StatsBlock results={results} />
      }
      <CountDown setResults={setResults} start={start} time={time}/>
    </div>
  )
}
