import React from 'react';
import './Card.css';

function Card() {
    return (

        <div className="card__container" style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"})`,
            backgroundSize: "cover"
        }}>
            <div className="card__content">
            <div>
                 <div className="card__headshot" style={{
                    backgroundImage: `url(${"https://source.unsplash.com/featured/?headshot"})`,
                    backgroundSize: "cover"
                }} />
    <div className="card__location">Inca Trail , Peru</div>
</div>
                <div className="user__name">John Doe</div>

                <div className="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo ita: non posse honeste vivi, nisi honeste vivatur?</div>
            </div>
        </div>
    )
}

export default Card
