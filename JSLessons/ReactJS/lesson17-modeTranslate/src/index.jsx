import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/style.css';
import ModeBtn from "./components/mode/ModeBtn";
import ModeTop from "./components/mode/ModeTop";
import './langConfig/i18next'
import { useTranslation } from 'react-i18next';
import info from "./data/info";

const App = () => {
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }
    const [mode, setMode] = useState('light');
    useEffect(() => {
        document.body.className = mode;
    }, [mode])
    return <div className="container">
        <ModeTop color={mode} />
        <ModeBtn color={mode} setColor={setMode} />

        <div className="mt-5">
            <div className="lang-btns">
                <button onClick={() => handleClick('az')} className="btn btn-dark ms-3">AZ</button>
                <button onClick={() => handleClick('tr')} className="btn btn-dark ms-3">TR</button>
                <button onClick={() => handleClick('en')} className="btn btn-dark ms-3">EN</button>
            </div>
            <h1>{t('b.1')}{t('a.1')}</h1>

            <div className="movie">
                {info.data.map((a,index)=>{
                    return <ul>
                        <li>{t(`m.${index}`)}</li>
                        <li>{a.price}azn</li>
                        <li>{a.year}</li>
                    </ul>
                })}
            </div>

        </div>
    </div>
}

ReactDOM.render(<Suspense fallback={(<div>Loading</div>)}><App /></Suspense>, document.querySelector('#root'));