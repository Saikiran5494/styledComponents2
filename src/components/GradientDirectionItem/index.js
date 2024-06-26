// Write your code here
import {Button, Li} from './styledComponents'

const GradientDirectionItem = props => {
  const {buttonItem, activeButtonId, isActive} = props
  const {directionId, displayText} = buttonItem

  const buttonClicked = () => {
    activeButtonId(directionId)
  }

  return (
    <Li key={directionId}>
      <Button isActive={isActive} onClick={buttonClicked}>
        {displayText}
      </Button>
    </Li>
  )
}

export default GradientDirectionItem
