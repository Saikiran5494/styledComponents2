import {Component} from 'react'
import {
  Heading,
  BgContainer,
  Para,
  UnorderedList,
  Para2,
  OuterDiv,
  InnerDiv,
  Input,
  Button,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerater extends Component {
  state = {
    activePosition: gradientDirectionsList[0].value,
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    changeBackground: `to ${gradientDirectionsList[0].value}, #8ae323,#014f7b`,
    activeId: gradientDirectionsList[0].directionId,
  }

  onChangeFirstInput = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondInput = event => {
    this.setState({secondColor: event.target.value})
  }

  activeButtonId = id => {
    const {firstColor, secondColor} = this.state
    const activeId = gradientDirectionsList.filter(
      eachItem => eachItem.directionId === id,
    )
    const {value, directionId} = activeId[0]
    this.setState({
      changeBackground: `to ${value}, ${firstColor},${secondColor}`,
    })
    this.setState({activeId: directionId})
  }

  generateClicked = () => {
    const {firstColor, secondColor, activePosition} = this.state
    this.setState({
      changeBackground: `to ${activePosition}, ${firstColor},${secondColor}`,
    })
  }

  render() {
    const {firstColor, secondColor, changeBackground, activeId} = this.state
    return (
      <BgContainer
        changeBackground={changeBackground}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Para>Choose Direction</Para>

        <UnorderedList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              buttonItem={eachItem}
              activeButtonId={this.activeButtonId}
              isActive={eachItem.directionId === activeId}
            />
          ))}
        </UnorderedList>
        <Para2>Pick the Colors</Para2>
        <OuterDiv>
          <InnerDiv>
            <Para>{firstColor}</Para>
            <div>
              <Input
                type="color"
                bgcolor={firstColor}
                onChange={this.onChangeFirstInput}
                value={firstColor}
              />
            </div>
          </InnerDiv>
          <InnerDiv>
            <Para>{secondColor}</Para>
            <div>
              <Input
                type="color"
                bgcolor={secondColor}
                onChange={this.onChangeSecondInput}
                value={secondColor}
              />
            </div>
          </InnerDiv>
        </OuterDiv>
        <Button type="button" onClick={this.generateClicked}>
          Generate
        </Button>
      </BgContainer>
    )
  }
}

export default GradientGenerater
