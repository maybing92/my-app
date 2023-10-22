import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const playlist = lazy(() => import('./pages/Playlist'));
const luvit = lazy(() => import('./pages/Luvit'));
const knot = lazy(() => import('./pages/Knot'));
const classi = lazy(() => import('./pages/classi'));
const tips = lazy(() => import('./pages/Tips'));
const stream = lazy(() => import('./pages/Stream'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/playlist" element={<playlist />} />
                    <Route path="/luvit" element={<luvit />} />
                    <Route path="/knot" element={<knot />} />
                    <Route path="/classi" element={<classi />} />
                    <Route path="/tips" element={<tips />} />
                    <Route path="/stream" element={<stream />} />
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path="*" element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;