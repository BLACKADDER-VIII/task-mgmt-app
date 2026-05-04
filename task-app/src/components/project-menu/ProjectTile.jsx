import { useState, useEffect, useRef } from 'react';
import './ProjectTile.css';


export default function ProjectTile({project, setCurrProject, isSelected, onDelete}){

    const [menuOpen, setMenuOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!menuOpen) return;
        const handler = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [menuOpen]);

    return (
        <div className={`project-tile${isSelected ? ' project-tile--selected' : ''}`} onClick={()=>{setCurrProject(project)}}>
            {project.title}
            {project.title !== 'All' && (
                <div ref={containerRef} className='project-tile-settings-wrapper'>
                    <button className='project-tile-settings-btn' onClick={(e) => { e.stopPropagation(); setMenuOpen(o => !o); }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3"/>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                        </svg>
                    </button>
                    {menuOpen && (
                        <div className='project-tile-dropdown'>
                            <button
                                className='project-tile-dropdown-item project-tile-dropdown-item--danger'
                                onClick={(e) => { e.stopPropagation(); onDelete(project); setMenuOpen(false); }}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}