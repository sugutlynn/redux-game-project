import { useAppSelector } from "../../store/store"

export default function GamesPage() {
    const {games} = useAppSelector(state => state.games);



    return(
        <div>
            <h2>GAME PAGE</h2>
            <ul>
                <h2>here</h2>

                {games && games.map(game => (
                    <div className="card">
                    <div className="card-header">{game.id}</div>
                    <div className="card-body">
                      <h5 className="card-title">{game.title}</h5>
                      <p className="card-text">{game.body}</p>
                      <div className="btn btn-primary"> Read More...</div>
                    </div>
                  </div>
                    // <li key={game._id}>
                    //     <h4>{game.body}</h4>
                        
                    // </li>
                ))}
            </ul>
        </div>
    )
}