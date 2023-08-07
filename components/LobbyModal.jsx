
export default function LobbyModal(){

    let displayLobbyModal = true


    if (displayLobbyModal) {
        return (
            <div className="modal">
            <div className="text-box">
                <h1>lobby</h1>
                <h2>Welcome to Guess What?!</h2>
                <h3>Please share this room link with your friend to get started!</h3>

                <p id="room-name">Room101</p>
                <button>Click to Start</button>
                <button onClick={displayLobbyModal = false}>X</button>
                </div>
        </div>
        )
    }


}