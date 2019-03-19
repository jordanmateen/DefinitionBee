//Imports
import Play from '../components/Play'
import { connect } from 'react-redux';


const mapStateToProps=(state)=>{
    return {
        definition: state.question.definition,
        word : state.question.word,
        questionNumber : state.questionNumber,
        answer: state.answer,
        score: state.score,
        strike : state.strike,
        skips: state.skips
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        loadGame : (definition) => dispatch({ type: "LOAD_GAME", definition: definition }),
        answer : (answer) => dispatch({ type: "CHECK_ANSWER", submittedAnswer : answer }),
        loadDefinition : (definition) => {
            console.log(definition)   
            dispatch({ type: "LOAD_DEFINITION" , definition: definition})
        },
        skip : () => dispatch({ type: "SKIP" }),
        checkStrike : () => dispatch({type : "CHECK_STRIKE"})
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Play)