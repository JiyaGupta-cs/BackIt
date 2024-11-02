export default function ConnectWallet(props) {
    return (
        <div className='connectWallet h-screen'>
            <div className='typingContainer'>
                <div className='typing'>BACKIT</div>
            </div>
            <div className="walletButtonContainer">
                <button className='walletButton' onClick={props.connectMetamask}>
                    Connect to Metamask
                </button>
            </div>
        </div>
    );
}