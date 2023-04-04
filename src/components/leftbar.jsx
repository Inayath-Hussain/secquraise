const LeftBar = () => {
    return (
        <div className='left-bar'>
            <svg width="30px" height="30px" style={{ marginTop: '10px' }} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs"><defs></defs><g ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="30" height="30"><path d="M3.63 19.78h56.73c2 0 3.63-1.63 3.63-3.63s-1.63-3.63-3.63-3.63H3.63c-2 0-3.63 1.63-3.63 3.63s1.63 3.63 3.63 3.63zm56.74 8.59H3.63C1.63 28.37 0 30 0 32s1.63 3.63 3.63 3.63h56.73c2 0 3.63-1.63 3.63-3.63s-1.62-3.63-3.62-3.63zm0 15.85H3.63c-2 0-3.63 1.63-3.63 3.63s1.63 3.63 3.63 3.63h56.73c2 0 3.63-1.63 3.63-3.63.01-2-1.62-3.63-3.62-3.63z" fill="#bbcbd0"></path></svg></g></svg>


            <img style={{ marginBottom: '50px' }} width='30' height='30' src="/log-out.png" alt="" />
        </div>
    );
}

export default LeftBar;