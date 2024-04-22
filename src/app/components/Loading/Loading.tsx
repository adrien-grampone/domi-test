import React from 'react';
import './loading.css';
export default function Loading({ number, classe, heightValue}) {
    const elements = [];
    if (number) {
        for (let i = 0; i < number; i++) {
            elements.push(
                // @ts-ignore
                <div key={i} className={`load-wraper`} style={{height: heightValue}}>
                    <div className="activity"></div>
                </div>
            );
        }
    }
    return (
        <div className={`liste-principale ${classe}`}>
            {elements}
        </div>
    );
}