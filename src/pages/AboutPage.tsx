import React from 'react';
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory();
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolor, labore numquam officia tempore
                temporibus vel. Fugit quasi qui rerum!</p>
            <button
                className="btn"
                onClick={() => history.push('/')}
            >Обратно к списку дел</button>
        </>
    )
}