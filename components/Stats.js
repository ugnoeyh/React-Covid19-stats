import useStats from "../utils/useStats";

export default function Stats({url}) {
    const stats = useStats(url) ;
    if(!stats) return <p> loading... </p>
    //    console.log(stats);
    return (
    <div>
        <div className="statBlock">
            <h3>확진환자:</h3>
            <span>{stats.confirmed.value}</span>
        </div>
        
        <div className="statBlock">
            <h3>사망자:</h3>
            <span>{stats.deaths.value}</span>
        </div>

        <div className="statBlock">
            <h3>격리해제:</h3>
            <span>{stats.recovered.value}</span>
        </div>
    </div>
    );
}