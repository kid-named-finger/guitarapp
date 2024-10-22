function Footer() {
    const footerStyle = {
        minheight: '10vh',
        fontSize: '1.2em',
        color: 'white',
        background: "-webkit-gradient(linear, left top, left bottom, from(#10adb2), to(#005b8a))",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };
    
    return (
        <>
            
                <footer style={footerStyle}>
                    <p className='text-center pt-2'>@2024 Copyright - Prime Guitars</p>
                </footer>
            
        </>
    );
}

export default Footer;