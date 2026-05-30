import React from 'react';

import Thunderstorm from '../assets/Thunderstorm.gif';
import Rain from '../assets/Rain.gif';
import SnowDay from '../assets/Snow.gif';
import ClearDay from '../assets/ClearDay.gif';
import ClearNight from '../assets/ClearNight.gif';
import CloudsDay from '../assets/CloudsDay.gif';
import CloudsNight from '../assets/CloudsNight.gif';
import Haze from '../assets/Haze.gif';
import video from '../assets/video1.mp4'

const WeatherBackground = ({ condition, temperature }) => {
    const gifs = {
        Thunderstorm,
        Drizzle: Rain,
        Rain,
        Snow: SnowDay,
        Clear: { day: ClearDay, night: ClearNight },
        Clouds: { day: CloudsDay, night: CloudsNight },
        Mist: Haze,
        Smoke: Haze,
        Haze,
        Fog: Haze,
        default: video
    };

    const getTemperatureBackground = () => {
        if (temperature === undefined || temperature === null) return null;

        if (temperature <= 5) return SnowDay;
        if (temperature <= 16) return condition?.isDay ? CloudsDay : CloudsNight;
        if (temperature <= 28) return condition?.isDay ? ClearDay : ClearNight;
        if (temperature <= 36) return ClearDay;
        return Haze;
    }

    const getBackground = () => {
        const tempBackground = getTemperatureBackground();
        if (tempBackground) return tempBackground;

        if (!condition) return gifs.default;
        const weatherType = condition.main;
        const asset = gifs[weatherType];

        if (!asset) return gifs.default;
        if (typeof asset === 'object')
            return condition.isDay ? asset.day : asset.night;

        return asset;
    }

    const getTemperatureTheme = () => {
        if (temperature === undefined || temperature === null) {
            return 'from-slate-950/60 via-sky-950/30 to-indigo-950/60';
        }

        if (temperature <= 5) {
            return 'from-blue-950/70 via-cyan-900/40 to-slate-950/70';
        }

        if (temperature <= 16) {
            return 'from-sky-950/60 via-blue-800/35 to-cyan-950/60';
        }

        if (temperature <= 28) {
            return 'from-emerald-900/55 via-sky-800/35 to-teal-950/60';
        }

        if (temperature <= 36) {
            return 'from-yellow-700/45 via-orange-600/35 to-sky-900/45';
        }

        return 'from-red-900/65 via-orange-700/50 to-yellow-600/35';
    }

    const isHot = temperature > 36;

    const background = getBackground();

    return (
        <div className=' fixed inset-0 z-0 overflow-hidden'>
            {background === video ? (
                <video autoPlay loop muted className=' w-full h-full object-cover opacity-100 pointer-events-none
                 animate-fade-in'>
                    <source src={video} type='video/mp4' />
                </video>
            ) : (
                <img src={background} alt='Weather-bg' className=' w-full h-full object-cover opacity-20 pointer-events-none
                animate-fade-in' />
            )}
            <div className={` absolute inset-0 bg-gradient-to-br ${getTemperatureTheme()}`} />
            {isHot && (
                <div className=' heat-waves absolute inset-0 pointer-events-none' />
            )}
            <div className=' absolute inset-0 bg-black/20' />
        </div>
    )

}

export default WeatherBackground
