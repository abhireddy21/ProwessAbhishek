import Card from './Card';
import CardHead from './CardHead';
import './css/challenges.css'
function Challenges() {
    const cardhead=["Programming","Linux"];
    const challengeNum=[1,2,3,4,5,6,7,8,9];
    const cardInfo=[
        {
            prg:"Server Addition!",
            pnum:"15",
            lix:"Read File",
            lnum:"10"
        },
        {
            prg:"Reverse Gear!",
            pnum:"15",
            lix:"Hidden Files",
            lnum:"20"
        },
        {
            prg:"Math Beauty!",
            pnum:"95",
            lix:"Unique Flag",
            lnum:"20"
        },
        {
            lix:"Pain in a dash!",
            lnum:"25"
        },
        {
            lix:"Eleven",
            lnum:"30"
        },

    ];


    return (
        <div className="cha-main">
            <div className="main-title">
                <h1 className="title">Challenges</h1>
            </div>

            {/* --------------------------------------------- */}
            <div className="challenges-cnt">
                <div className="card-heading">
                    <CardHead headname={cardhead[0]}></CardHead>
                </div>
                <div className="card-cnt">
                    <Card cardName={cardInfo[0].prg} cardNum={cardInfo[0].pnum} challNum={challengeNum[0]}></Card>
                    <Card cardName={cardInfo[1].prg} cardNum={cardInfo[1].pnum} challNum={challengeNum[1]}></Card>
                    <Card cardName={cardInfo[2].prg} cardNum={cardInfo[2].pnum} challNum={challengeNum[2]}></Card>
                </div>
            </div>

            <div className="challenges-cnt">
                <div className="card-heading">
                    <CardHead headname={cardhead[1]}></CardHead>
                </div>
                <div className="card-cnt">
                    <Card cardName={cardInfo[0].lix} cardNum={cardInfo[0].lnum} challNum={challengeNum[0]}></Card>
                    <Card cardName={cardInfo[1].lix} cardNum={cardInfo[1].lnum} challNum={challengeNum[1]}></Card>
                    <Card cardName={cardInfo[2].lix} cardNum={cardInfo[2].lnum} challNum={challengeNum[2]}></Card>
                    <Card cardName={cardInfo[3].lix} cardNum={cardInfo[3].lnum} challNum={challengeNum[3]}></Card>
                    <Card cardName={cardInfo[4].lix} cardNum={cardInfo[4].lnum} challNum={challengeNum[4]}></Card>
                </div>
            </div>
        </div>
    );
}
export default Challenges