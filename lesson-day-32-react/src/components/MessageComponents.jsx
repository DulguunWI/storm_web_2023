function MessageComponent({showMessage}) {
    return (
        <div>
            {showMessage && <p>This messsage is conditionally rendered!</p>}
        </div>
    );
}
export default MessageComponent