import "../styles/Loader.css";

function Loader({ text = "Processing..." }) {
    return (
        <div className="loader-overlay">
            <div className="loader-spinner"></div>
            <p className="loader-text">{text}</p>
        </div>
    );
}

export default Loader;
