import './App.css'

function StatusBadge({ isBusy }) {
    const status = isBusy ? 'Busy learning' : 'Open to work'
    const statusClass = isBusy ? 'status-badge busy' : 'status-badge open'

    return <span className={statusClass}>{status}</span>
}

function App() {
    const name = 'Un Suning'
    const goal = 'Build strong React skills and create useful, thoughtful interfaces.'

    return (
        <main className="profile-page">
            <h1>{name}</h1>
            <p>{goal}</p>
            <StatusBadge isBusy={false} />
        </main>
    )
}

export default App