import classes from "./comment-list.module.css";

function CommentList() {
    return (
        <ul className={classes.comments}>
            {/* Render list of comments, from API */}
            <li>
                <p>This is a first comment!</p>
                <div>
                    By <address>User1</address>
                </div>
            </li>
            <li>
                <p>Another comment!</p>
                <div>
                    By <address>User2</address>
                </div>
            </li>
        </ul>
    );
}

export default CommentList;
