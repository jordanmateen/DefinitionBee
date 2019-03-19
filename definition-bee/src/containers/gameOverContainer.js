import GameOver from '../components/GameOver';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return{
        score : state.score
    }

}

export default connect(
    mapStateToProps, 
    null
)(GameOver)