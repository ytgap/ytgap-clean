
import React from 'react';
import Logo from './Logo';

const ArrowRightIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-white font-sans text-brand-charcoal overflow-x-hidden">
        <header className="absolute top-0 left-0 right-0 z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Logo />
                <a href="#" className="hidden md:inline-block bg-brand-charcoal text-white font-semibold py-2 px-5 rounded-lg hover:bg-gray-700 transition-colors">
                    Get Started
                </a>
            </div>
        </header>
        
        <main>
            <section className="relative bg-white pt-28 pb-20 lg:pt-36 lg:pb-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-charcoal leading-tight">
                                Find what's wanted.<br/> Create what's missing.
                            </h1>
                            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-600">
                                YTGAP is the strategic partner for creators who want to build an audience by making data-driven decisions. Stop guessing, start growing.
                            </p>
                            <div className="mt-10">
                                <a href="#" className="inline-flex items-center gap-3 bg-brand-red text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-red/40">
                                    Start Finding Gaps for Free
                                    <ArrowRightIcon className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                           <div className="relative bg-white p-2 rounded-xl shadow-2xl border border-gray-100">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                                        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                                        <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="bg-white p-4 rounded-md shadow">
                                            <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                                            <div className="flex justify-between items-end mt-3">
                                                <div className="space-y-2">
                                                    <div className="w-24 h-3 bg-gray-100 rounded"></div>
                                                    <div className="w-32 h-3 bg-gray-100 rounded"></div>
                                                </div>
                                                <div className="w-12 h-8 bg-brand-red/20 rounded-md"></div>
                                            </div>
                                        </div>
                                         <div className="bg-white p-4 rounded-md shadow opacity-70">
                                            <div className="w-5/6 h-4 bg-gray-200 rounded"></div>
                                            <div className="flex justify-between items-end mt-3">
                                                <div className="space-y-2">
                                                    <div className="w-28 h-3 bg-gray-100 rounded"></div>
                                                    <div className="w-20 h-3 bg-gray-100 rounded"></div>
                                                </div>
                                                <div className="w-12 h-8 bg-brand-red/20 rounded-md"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how-it-works" className="bg-brand-light-gray py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold">Your Workflow, Supercharged.</h2>
                        <p className="mt-4 text-gray-600">
                            Turn audience demand into your creative advantage in three simple, powerful steps.
                        </p>
                    </div>

                    <div className="mt-20 space-y-20">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="bg-white p-8 rounded-xl shadow-lg border">
                                <h4 className="text-sm font-bold text-brand-red uppercase tracking-wider">Step 1: Pinpoint</h4>
                                <h3 className="text-2xl font-bold mt-2">Filter Down to the Perfect Opportunity</h3>
                                <p className="mt-4 text-gray-600">Use our advanced filters to dial in your search. Target specific niches, set your desired search volume, and define an ultra-low saturation level to find the perfect content gap that others miss.</p>
                            </div>
                            <div className="text-center">
                                <svg className="inline-block h-48 w-48 text-gray-300" viewBox="0 0 200 200"><path fill="currentColor" d="M100 10c-50 0-90 40-90 90s40 90 90 90 90-40 90-90-40-90-90-90zm0 160c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70-31.4 70-70 70z"/><path fill="#FF0000" d="M100 50c-27.6 0-50 22.4-50 50s22.4 50 50 50 50-22.4 50-50-22.4-50-50-50zm0 85c-19.3 0-35-15.7-35-35s15.7-35 35-35 35 15.7 35 35-15.7 35-35 35z"/><path fill="currentColor" d="M125.8 74.2c-15.6-15.6-41-15.6-56.6 0-15.6 15.6-15.6 41 0 56.6l56.6-56.6z"/></svg>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="text-center md:order-last">
                               <svg className="inline-block h-48 w-48 text-gray-300" viewBox="0 0 200 200"><path fill="currentColor" d="M110 0H90v200h20V0z"/><path fill="#FF0000" d="m140 10-40 40-40-40-14 14 40 40-40 40 14 14 40-40 40 40 14-14-40-40 40-40z"/></svg>
                            </div>
                             <div className="bg-white p-8 rounded-xl shadow-lg border">
                                <h4 className="text-sm font-bold text-brand-red uppercase tracking-wider">Step 2: Analyze</h4>
                                <h3 className="text-2xl font-bold mt-2">See What's Wanted vs. What Exists</h3>
                                <p className="mt-4 text-gray-600">YTGAP instantly reveals topics with high viewer demand but critically low video supply. See daily searches versus existing videos in a clear, actionable format so you can be confident in your choice.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="bg-white p-8 rounded-xl shadow-lg border">
                                <h4 className="text-sm font-bold text-brand-red uppercase tracking-wider">Step 3: Create</h4>
                                <h3 className="text-2xl font-bold mt-2">Go From Data to Draft, Instantly</h3>
                                <p className="mt-4 text-gray-600">Overcome creator's block forever. Click 'Get Ideas' and our AI instantly generates click-worthy titles and a structured video outline to kickstart your creative process in seconds.</p>
                            </div>
                            <div className="text-center">
                                <svg className="inline-block h-48 w-48 text-gray-300" viewBox="0 0 200 200"><path fill="currentColor" d="M100 20L20 180h160L100 20zm0 30l60 110H40l60-110z"/><path fill="#FF0000" d="M100 80l-20 40h40l-20-40z"/></svg>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            
            <section className="bg-white py-20 lg:py-28">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold">What Creators Are Saying</h2>
                        <p className="mt-4 text-gray-600">
                            Don't just take our word for it. Here's how YTGAP is changing the game.
                        </p>
                    </div>

                    <div className="mt-20 grid md:grid-cols-3 gap-8">
                        <div className="bg-brand-light-gray p-8 rounded-xl border border-gray-200">
                             <svg className="w-10 h-10 text-brand-red mb-4" viewBox="0 0 44 28" fill="currentColor"><path d="M0 28V0h16v16H4v12H0zM28 28V0h16v16h-12v12H28z"/></svg>
                            <p className="text-brand-charcoal font-medium">
                                "I used to spend hours brainstorming, usually ending up with the same saturated ideas. YTGAP found me a topic with 100k searches and almost no videos. My channel finally has a unique voice."
                            </p>
                            <p className="mt-4 font-bold text-sm text-gray-500">— Tech Reviewer</p>
                        </div>
                        <div className="bg-brand-light-gray p-8 rounded-xl border border-gray-200">
                            <svg className="w-10 h-10 text-brand-red mb-4" viewBox="0 0 44 28" fill="currentColor"><path d="M0 28V0h16v16H4v12H0zM28 28V0h16v16h-12v12H28z"/></svg>
                            <p className="text-brand-charcoal font-medium">
                                "The 'Get Ideas' button is my secret weapon. Going from a keyword to a full video outline in a click has saved me from so much creator's block. It's like having a creative partner."
                            </p>
                            <p className="mt-4 font-bold text-sm text-gray-500">— Lifestyle Vlogger</p>
                        </div>
                        <div className="bg-brand-light-gray p-8 rounded-xl border border-gray-200">
                            <svg className="w-10 h-10 text-brand-red mb-4" viewBox="0 0 44 28" fill="currentColor"><path d="M0 28V0h16v16H4v12H0zM28 28V0h16v16h-12v12H28z"/></svg>
                            <p className="text-brand-charcoal font-medium">
                                "As a new creator, finding a foothold felt impossible. YTGAP helped me identify a low-competition niche that I was passionate about. My first video on that topic got more views than my previous ten combined."
                            </p>
                            <p className="mt-4 font-bold text-sm text-gray-500">— Early Access User</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="bg-brand-light-gray">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="bg-brand-charcoal rounded-2xl p-10 md:p-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Find Your Gap?</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                            Join thousands of creators who are building their audiences faster by making smarter, data-driven decisions. Your next viral video is waiting.
                        </p>
                        <div className="mt-8">
                           <a href="#" className="inline-flex items-center gap-3 bg-brand-red text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-red/40">
                                Get Started for Free
                                <ArrowRightIcon className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer className="bg-white border-t border-gray-200">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
               <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <Logo />
                    </div>
                    <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} YTGAP. All Rights Reserved.</p>
                    <div className="hidden md:block" style={{ width: '130px' }}></div>
               </div>
           </div>
        </footer>
    </div>
  );
};

export default HomePage;
