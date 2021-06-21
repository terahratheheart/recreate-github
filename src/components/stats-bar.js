import React from 'react';
import "./stats-bar.css"

const StatsBar = () => {
    return <div className="stats-bar__div">
        <div className="stat__div">
            <h2 className="stat__header">
            65+ million
            </h2>
            <p className="stat_pgraph">
            Developers
            </p>
        </div>
        <div className="stat__div">
            <h2 className="stat__header">
            3+ million 
            </h2>
            <p className="stat_pgraph">
            Organizations
            </p>
        </div>
        <div className="stat__div">
            <h2 className="stat__header">
            200+ million 
            </h2>
            <p className="stat_pgraph">
            Repositories
            </p>
        </div>
        <div className="stat__div">
            <h2 className="stat__header">
            72%
            </h2>
            <p className="stat_pgraph">
            Fortune 50
            </p>
        </div>
        <div className="stat__div">
        </div>
        <div className="stat__div">
        </div>
        <div className="stat__div">
        </div>
        <div className="stat__div">
        </div>
    </div>
}


export default StatsBar
