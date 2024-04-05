import { useContext } from 'react'
import { CountDown } from './components/CountDown'
import { StatsBlock } from './components/StatsBlock'
import { ResultsContext } from '../TypingTest/TypingTest'
import "./components/styles/stats.style.scss"

interface StatsProps{
  time:number,
  start:boolean
}

export const Stats = ({time,start}:StatsProps) => {
  const {results, setResults} = useContext(ResultsContext)

  return (
    <div className='stats-container'>
      <CountDown setResults={setResults} start={start} time={time}/>
      {
        results.isFinished &&
        <StatsBlock results={results} />
      }
    </div>
  )
}
