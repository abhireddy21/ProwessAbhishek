import score from './images/score.png'
import './css/score.css';
function ScoreBoard() {
    return (
        <div className="score-main">
            <div className="main-title">
                <h1 className="title">Scoreboard</h1>
            </div>
            <div className="score-cnt">
                <div className="score-img">
                    <img src={score}></img>
                </div>
                <div className="score-table">
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">Place</th>
                                <th scope="col">user</th>
                                <th scope="col">Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>223</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>220</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Abhi</td>
                                <td>190</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>Chandu</td>
                                <td>180</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>Abdul</td>
                                <td>170</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>Girish</td>
                                <td>170</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>Teju</td>
                                <td>150</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>Manju</td>
                                <td>110</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>charan</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default ScoreBoard