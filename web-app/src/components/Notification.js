
function Notification ({hasUnreadMsgs}){
    if(hasUnreadMsgs){
        return(
            <>
            <h2>Welcome</h2>
            {hasUnreadMsgs && <p>You have unread messages</p>}
            
            </>
        );
    }else{
        <>
        <p>All messages are read</p>
        </>
    }

}
export default Notification;