import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

const ObjectTest = {
    1: {
        id : 1,
        name:'ABC',
        score: 102
    },
    2: {
        id: 2,
        name: 'TewPac',
        score: 202
    },
    3: {
        id: 3,
        name:'TreyWait',
        score: 333
    },
    4: {
        id : 4,
        name:'Fahour',
        score: 102
    },
    5: {
        id: 5,
        name: 'Fiive',
        score: 202
    },
    6: {
        id: 6,
        name:'SixBingo',
        score: 333
    },
    7: {
        id : 7,
        name:'SehVhenDiagram',
        score: 102
    },
    8: {
        id: 8,
        name: 'IAteHalf',
        score: 202
    },
    9: {
        id: 9,
        name:'NineYarn',
        score: 333
    },
    10: {
        id: 10,
        name: 'IamTEN',
        score: 1010
    }

}

export default class LastGames extends React.Component{

	_renderObject(){
		return Object.entries(ObjectTest).map(([key, value], i) => {
			return (
                <Row key={key}>
                <Col>{value.name} </Col>
                <Col>{value.score}</Col>
                    </Row>
			
			)
		})
	}

	render(){
		return(
			<div>
				{this._renderObject()}
			</div>
		)
	}
}
