import React from 'react';

const Logo: React.FC = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0C31.0457 0 40 8.9543 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0ZM20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36Z" fill="url(#paint0_linear_1_2)"/>
        <path d="M20 10C24.4183 10 28 13.5817 28 18C28 22.4183 24.4183 26 20 26C15.5817 26 12 22.4183 12 18C12 13.5817 15.5817 10 20 10ZM20 23C22.7614 23 25 20.7614 25 18C25 15.2386 22.7614 13 20 13C17.2386 13 15 15.2386 15 18C15 20.7614 17.2386 23 20 23Z" fill="url(#paint1_linear_1_2)"/>
        <defs>
            <linearGradient id="paint0_linear_1_2" x1="20" y1="0" x2="20" y2="40" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A759F5"/>
                <stop offset="1" stopColor="#F559A7"/>
            </linearGradient>
            <linearGradient id="paint1_linear_1_2" x1="20" y1="10" x2="20" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A759F5"/>
                <stop offset="1" stopColor="#F559A7"/>
            </linearGradient>
        </defs>
    </svg>
);


export const Header: React.FC = () => {
    return (
        <header className="text-center py-8 animate-fade-in">
             <div className="flex items-center justify-center gap-4 mb-4">
                <Logo />
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary">
                    تحويل القصة <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">الى مشاهد</span>
                </h1>
            </div>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
                 Leverage generative AI with a unique suite of tools to convey your ideas to the world.
            </p>
             <a 
                href="https://www.youtube.com/@TechTricksArabic/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 text-sm text-text-secondary hover:text-brand-purple transition-colors duration-300 inline-flex items-center gap-2"
            >
                <span>تم صناعته بواسطة Tech Tricks|تريكات</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FF0000">
                    <path d="M21.582,6.186c-0.23-0.814-0.908-1.492-1.722-1.722C18.25,4,12,4,12,4S5.75,4,4.14,4.464 c-0.814,0.23-1.492,0.908-1.722,1.722C2,7.796,2,12,2,12s0,4.204,0.418,5.814c0.23,0.814,0.908,1.492,1.722,1.722 C5.75,20,12,20,12,20s6.25,0,7.86-0.464c0.814-0.23,1.492-0.908,1.722-1.722C22,16.204,22,12,22,12S22,7.796,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
                </svg>
            </a>
        </header>
    );
};