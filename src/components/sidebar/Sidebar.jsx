import "./sidebar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import ChatIcon from '@mui/icons-material/Chat';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
                <RssFeedIcon className="sidebarIcon"/>
                <span className="sidebarListItem">Feed</span>
            </li>
            <li className="sidebarListItem">
                <ChatIcon  className="sidebarIcon"/>
                <span className="sidebarListItem">Chats</span>
            </li>
            <li className="sidebarListItem">
                <PlayCircleFilledIcon className="sidebarIcon"/>
                <span className="sidebarListItem">Videos</span>
            </li>
            <li className="sidebarListItem">
                <GroupIcon className="sidebarIcon"/>
                <span className="sidebarListItem">Groups</span>
            </li>
            <li className="sidebarListItem">
             <BookmarkIcon className="sidebarIcon"/>
              <span className="sidebarListItem">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
                <HelpOutlineIcon className="sidebarIcon"/>
                <span className="sidebarListItem">Questions</span>
            </li>
            <li className="sidebarListItem">
                <WorkOutlineIcon className="sidebarIcon"/>
                <span className="sidebarListItem">Jobs</span>
            </li>
            <li className="sidebarListItem">
                <EventIcon className="sidebarIcon"/>
                <span className="sidebarListItem">Events</span>
            </li>
            <li className="sidebarListItem">
                <SchoolIcon  className="sidebarIcon"/>
                <span className="sidebarListItem">Courses</span>
            </li>
            </ul>
           <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
         <ul className="sidebarFriendList">
            <li className="sidebarFriendList">
             <img className="sidebarFriendImg" src="/assets/services.jpg" alt="" />
            <span className="sidebarFriendName">Abhishek</span>
            </li>
      
            <li className="sidebarFriendList">
             <img className="sidebarFriendImg" src="/assets/services.jpg" alt="" />
            <span className="sidebarFriendName">Abhishek</span>
            </li>
            <li className="sidebarFriendList">
             <img className="sidebarFriendImg" src="/assets/services.jpg" alt="" />
            <span className="sidebarFriendName">Abhishek</span>
            </li>
            <li className="sidebarFriendList">
             <img className="sidebarFriendImg" src="/assets/services.jpg" alt="" />
            <span className="sidebarFriendName">Abhishek</span>
            </li>
            <li className="sidebarFriendList">
             <img className="sidebarFriendImg" src="/assets/services.jpg" alt="" />
            <span className="sidebarFriendName">Abhishek</span>
            </li>
            <li className="sidebarFriendList">
             <img className="sidebarFriendImg" src="/assets/services.jpg" alt="" />
            <span className="sidebarFriendName">Abhishek</span>
            </li>
            <li className="sidebarFriendList">
             <img className="sidebarFriendImg" src="/assets/services.jpg" alt="" />
            <span className="sidebarFriendName">Abhishek</span>
            </li>
            <li className="sidebarFriendList">
             <img className="sidebarFriendImg" src="/assets/services.jpg" alt="" />
            <span className="sidebarFriendName">Abhishek</span>
            </li>
    
        </ul>
      </div>
    </div>
  )
}
