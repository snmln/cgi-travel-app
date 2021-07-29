import React from 'react'
import CardList from "./CardList";
import Navigation from "./Navigation";
function Feed() {
    return (
        <div>
            {/* Hosting larger orgnaizational components */}
            <Navigation />
            <CardList />
        </div>
    )
}

export default Feed
