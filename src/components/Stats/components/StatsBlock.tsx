import { getAccuracy, getWordsPerMinute } from '../../../utils/functions'
import { ResultType } from '../../../types/results'

export const StatsBlock = ({results}:{results:ResultType}) => {

  return (
    <div className='stats-block'>
      <div className="words-per-minute">
        WPM:{getWordsPerMinute(results.wordsTyped,results.time)}
      </div>
      <div className="characters-statistic">
        {results.correctChars}/{results.incorrectChars}
      </div>
      <div className="accuracy">
        Accuracy:{getAccuracy(results.correctChars,results.incorrectChars)}%
      </div>
    </div>  
  )
}
