import React from 'react'
import SidebarOption from './SidebarOption'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LibraryMusicRoundedIcon from '@material-ui/icons/LibraryMusicRounded';
import { useStateValue } from './StateProvider'
import './Sidebar.css'

function Sidebar() {
    const [{ playlists }, dispatch] = useStateValue();
    console.log(playlists);
    return (
        <div className='sidebar'>
            <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify-logo" />
            <SidebarOption title='Home' Icon={HomeRoundedIcon} />
            <SidebarOption title='Search' Icon={SearchRoundedIcon} />
            <SidebarOption title='Your Library' Icon={LibraryMusicRoundedIcon} />

            <br />
            <strong className='sidebar__playlist'>
                PLAYLISTS
            </strong>
            <hr />
            { playlists?.items?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
